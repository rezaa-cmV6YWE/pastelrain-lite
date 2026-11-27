import { Image } from '@unpic/react'
import { cn } from 'cn'

import { GameProfileStatus } from '#/components/game-profile-status'
import { useChunithmProfileQuery } from '#/integrations/performai'

export function ChunithmProfile() {
  const { data, isLoading, isError } = useChunithmProfileQuery()

  const profile = data && !data.maintenance ? data.data : null

  return (
    <section className="space-y-3">
      <h2 className="font-pixel text-2xl">CHUNITHM</h2>

      <GameProfileStatus
        game="CHUNITHM"
        aspectRatio="576 / 228"
        isLoading={isLoading}
        isError={isError && !data}
        maintenanceReason={data?.maintenance ? data.reason : null}
      />

      {profile && (
        <>
          <p className="sr-only">
            CHUNITHM profile: {profile.name ?? 'player'}
            {profile.level != null && `, level ${profile.level}`}, rating {profile.rating.value}
          </p>
          <div aria-hidden className="relative">
            <Image
              src={profile.nameplate ?? ''}
              alt=""
              width={396}
              height={63}
              className="w-full"
            />
            <div className="absolute top-0 right-3 w-[72%] sm:right-6">
              <div className="relative">
                {profile.team && profile.team.emblemUrl ? (
                  <Image
                    src={profile.team.emblemUrl ?? ''}
                    alt=""
                    width={396}
                    height={63}
                    className="w-full"
                  />
                ) : null}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 translate-y-3/4 text-center text-xs font-bold text-rain-ink sm:text-base">
                  {profile.team?.name}
                </div>
              </div>
              <div className="relative -mt-2">
                {profile.titles ? (
                  <Image
                    src={profile.titles[0].typeUrl ?? ''}
                    alt=""
                    width={396}
                    height={63}
                    className="w-full"
                  />
                ) : null}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center text-xs font-bold text-black sm:text-base">
                  {profile.titles?.[0]?.value}
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 border border-black/50 bg-white/50 font-bold text-black">
                  <div className="border-b border-black/50 px-1">
                    <span className="sm:text-2xl">Lv.</span>
                    <span className="sm:text-4xl">{profile.level}</span>
                    <span className="ml-4 text-xl sm:text-4xl">{profile.name}</span>
                  </div>
                  <div className="mt-1 flex px-1 sm:mt-2">
                    <span className="text-xs sm:text-lg">Rating</span>
                    <div className="ml-2 flex items-end gap-1">
                      {profile.rating.images?.map((img: string, i: number) => (
                        <Image
                          key={i}
                          src={img}
                          alt=""
                          layout="fullWidth"
                          className={cn('h-4 sm:h-6', {
                            'h-1 sm:h-2': i === 2,
                          })}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mr-1 w-[20%] bg-white">
                  <Image
                    src={profile.character?.image ?? ''}
                    alt=""
                    width={78}
                    height={78}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
