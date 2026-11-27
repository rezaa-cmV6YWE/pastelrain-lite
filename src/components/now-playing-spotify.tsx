import { useQuery } from '@tanstack/react-query'
import { Image } from '@unpic/react'
import { SiSpotify } from 'react-icons/si'

import { getSpotifyNowPlaying } from '#/integrations/spotify/spotify.functions'
import type { SpotifyNowPlaying } from '#/integrations/spotify/spotify.functions'

export function NowPlayingSpotify() {
  const { data, isLoading, isError } = useQuery<SpotifyNowPlaying>({
    queryKey: ['spotify-now-playing'],
    queryFn: () => getSpotifyNowPlaying(),
    refetchInterval: 30000,
  })

  return (
    <section className="space-y-3">
      <h2 className="flex items-center gap-2 font-pixel text-2xl">
        <SiSpotify aria-hidden />
        listening to
      </h2>

      {isLoading && (
        <output
          aria-label="loading what's playing"
          className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 p-2"
        >
          <div className="h-12 w-12 rounded-lg bg-glass-ink/15 motion-safe:animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-32 rounded bg-glass-ink/15 motion-safe:animate-pulse" />
            <div className="h-3 w-24 rounded bg-glass-ink/15 motion-safe:animate-pulse" />
          </div>
        </output>
      )}

      {isError && !data && (
        <p className="text-sm text-glass-coral">couldn't reach Spotify right now.</p>
      )}

      {data && !data.track && (
        <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 p-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
            <SiSpotify aria-hidden className="text-glass-ink-muted" />
          </div>
          <p className="text-sm text-glass-ink-muted">Not playing anything right now.</p>
        </div>
      )}

      {data?.track && (
        <a
          href={data.track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 p-2 hover:bg-white/10"
        >
          {data.track.albumArt ? (
            <Image
              src={data.track.albumArt}
              width={48}
              height={48}
              alt={`${data.track.name} album art`}
              className="rounded-lg object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <SiSpotify aria-hidden className="text-glass-ink-muted" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-semibold transition group-hover:text-glass-teal">
                {data.track.name}
              </p>
              {data.isPlaying ? (
                <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-green-400 motion-safe:animate-pulse">
                  <span className="sr-only">playing now</span>
                </span>
              ) : (
                <span className="shrink-0 text-xs text-glass-ink-muted">paused</span>
              )}
            </div>
            <p className="truncate text-xs text-glass-ink-muted">{data.track.artist}</p>
          </div>
        </a>
      )}
    </section>
  )
}
