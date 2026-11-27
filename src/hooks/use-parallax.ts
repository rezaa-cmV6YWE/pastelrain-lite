import { motionValue, springValue, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'
import { useEffect } from 'react'

// Every parallax consumer shares one pointer source and one pair of springs.
const SPRING = { stiffness: 40, damping: 20 }
const pointerX = motionValue(0)
const pointerY = motionValue(0)
const smoothX = springValue(pointerX, SPRING)
const smoothY = springValue(pointerY, SPRING)

// Device orientation fires continuously with sensor noise; ignoring changes below this keeps the
// springs at rest while the phone is held still.
const ORIENTATION_DEADBAND = 0.01

let subscribers = 0
let detachListeners: (() => void) | null = null

const onMouse = (e: MouseEvent) => {
  pointerX.set(e.clientX / window.innerWidth - 0.5)
  pointerY.set(e.clientY / window.innerHeight - 0.5)
}

const onTouch = (e: TouchEvent) => {
  const touch = e.touches[0]
  if (!touch) return
  pointerX.set(touch.clientX / window.innerWidth - 0.5)
  pointerY.set(touch.clientY / window.innerHeight - 0.5)
}

const onOrientation = (e: DeviceOrientationEvent) => {
  const beta = Math.max(-30, Math.min(30, e.beta ?? 0))
  const gamma = Math.max(-30, Math.min(30, e.gamma ?? 0))
  const nx = gamma / 60
  const ny = beta / 60
  if (
    Math.abs(nx - pointerX.get()) < ORIENTATION_DEADBAND &&
    Math.abs(ny - pointerY.get()) < ORIENTATION_DEADBAND
  ) {
    return
  }
  pointerX.set(nx)
  pointerY.set(ny)
}

const requestOrientation = () => {
  const DOE = window.DeviceOrientationEvent as
    | (typeof window.DeviceOrientationEvent & {
        requestPermission?: () => Promise<'granted' | 'denied' | 'default'>
      })
    | undefined

  if (typeof DOE?.requestPermission === 'function') {
    DOE.requestPermission().then((state) => {
      if (state === 'granted') {
        window.addEventListener('deviceorientation', onOrientation)
      }
    })
    return
  }

  window.addEventListener('deviceorientation', onOrientation)
}

const onFirstGesture = () => {
  requestOrientation()
  window.removeEventListener('touchstart', onFirstGesture)
  window.removeEventListener('click', onFirstGesture)
}

function attachListeners(): () => void {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (mql.matches) return () => {}

  window.addEventListener('mousemove', onMouse)
  window.addEventListener('touchmove', onTouch)
  window.addEventListener('touchstart', onFirstGesture, { passive: true })
  window.addEventListener('click', onFirstGesture)

  // Non-iOS devices can start orientation immediately; iOS will wait for the
  // first user gesture through onFirstGesture.
  const DOE = window.DeviceOrientationEvent as
    | (typeof window.DeviceOrientationEvent & {
        requestPermission?: () => Promise<'granted' | 'denied' | 'default'>
      })
    | undefined
  if (typeof DOE?.requestPermission !== 'function') {
    window.addEventListener('deviceorientation', onOrientation)
  }

  return () => {
    window.removeEventListener('mousemove', onMouse)
    window.removeEventListener('touchmove', onTouch)
    window.removeEventListener('deviceorientation', onOrientation)
    window.removeEventListener('touchstart', onFirstGesture)
    window.removeEventListener('click', onFirstGesture)
  }
}

export function useParallax(depth: number): {
  x: MotionValue<number>
  y: MotionValue<number>
} {
  const x = useTransform(smoothX, (v) => v * depth * 140)
  const y = useTransform(smoothY, (v) => v * depth * 140)

  useEffect(() => {
    subscribers += 1
    if (subscribers === 1) detachListeners = attachListeners()
    return () => {
      subscribers -= 1
      if (subscribers === 0) {
        detachListeners?.()
        detachListeners = null
      }
    }
  }, [])

  return { x, y }
}
