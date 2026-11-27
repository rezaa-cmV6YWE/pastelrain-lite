import { motion } from 'motion/react'

import { useParallax } from '#/hooks/use-parallax'

export function Title() {
  const { x: titleX, y: titleY } = useParallax(-0.3)
  const { x: tealX, y: tealY } = useParallax(0.08)
  const { x: coralX, y: coralY } = useParallax(0.04)

  return (
    <motion.div
      lang="ja"
      className="relative flex h-[80svh] w-full items-center justify-center"
      style={{ x: titleX, y: titleY }}
    >
      <motion.span
        aria-hidden
        className="absolute scale-110 font-display text-5xl text-drop-teal md:text-7xl"
        style={{ x: tealX, y: tealY }}
      >
        パステルレイン
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute scale-105 font-display text-5xl text-drop-coral md:text-7xl"
        style={{ x: coralX, y: coralY }}
      >
        パステルレイン
      </motion.span>
      <h1 className="absolute font-display text-5xl md:text-7xl">パステルレイン</h1>
    </motion.div>
  )
}
