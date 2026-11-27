import { createFileRoute } from '@tanstack/react-router'

import { ChunithmProfile } from '#/components/chunithm-profile'
import { Footer } from '#/components/footer'
import { MaimaiProfile } from '#/components/maimai-profile'
import { NowPlayingSpotify } from '#/components/now-playing-spotify'
import { Projects } from '#/components/projects'
import { Title } from '#/components/title'
import { WhoAmI } from '#/components/who-am-i'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="m-auto max-w-2xl p-4">
      <Title />
      <div className="w-full space-y-8 rounded-3xl border border-white/35 bg-glass p-4 text-glass-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_40px_rgba(30,58,95,0.2)] backdrop-blur-md backdrop-brightness-45 backdrop-saturate-150">
        <WhoAmI />
        <Projects />
        <NowPlayingSpotify />
        <MaimaiProfile />
        <ChunithmProfile />
        <Footer />
      </div>
    </main>
  )
}
