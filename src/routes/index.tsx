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
      <div className="w-full space-y-8 rounded-3xl border border-gray-100 bg-gray-700/20 p-4 backdrop-blur-xl backdrop-filter">
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
