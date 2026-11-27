import { Image } from '@unpic/react'

import { GameProfileStatus } from '#/components/game-profile-status'
import { useMaimaiProfileQuery } from '#/integrations/performai'

export function MaimaiProfile() {
  const { data, isLoading, isError } = useMaimaiProfileQuery()

  const profile = data && !data.maintenance ? data.data : null

  return (
    <section className="space-y-3">
      <h2 className="font-pixel text-2xl">maimai</h2>

      <GameProfileStatus
        game="maimai"
        aspectRatio="396 / 165"
        isLoading={isLoading}
        isError={isError && !data}
        maintenanceReason={data?.maintenance ? data.reason : null}
      />

      {profile && (
        <>
          <p className="sr-only">
            maimai profile: {profile.name}, rating {profile.rating.value}
          </p>
          <div aria-hidden className="relative">
            <Image src={profile.frame ?? ''} alt="" width={396} height={165} className="w-full" />
            <div className="absolute top-2 left-2 w-2/3 sm:top-4 sm:left-4">
              <Image
                src={profile.nameplate ?? ''}
                alt=""
                width={396}
                height={63}
                className="w-full"
              />
              <Image
                src={profile.icon ?? ''}
                alt=""
                width={64}
                height={64}
                className="absolute top-0.5 left-0.5 aspect-square w-[14%] sm:top-1 sm:left-1 sm:w-14"
              />
              <div className="absolute top-0.5 left-[15%] w-[20%] sm:top-1">
                <Image src={profile.rating.color ?? ''} alt="" width={396} height={63} />
                <span className="absolute top-[10%] left-[45%] text-[8px] font-semibold tracking-widest text-rain-ink sm:top-[13%] sm:text-xs">
                  {profile.rating.value}
                </span>
                <Image
                  src={profile.classRank ?? ''}
                  alt=""
                  width={64}
                  height={64}
                  className="absolute -top-1 left-full w-1/2 sm:-top-2 sm:w-[70%]"
                />
              </div>
              <div className="absolute top-[35%] left-[15%] flex max-w-[35%] items-center justify-between rounded border bg-white sm:top-[42%]">
                <span className="text-[8px] text-black sm:text-xs">{profile.name}</span>
                <div className="w-1/4">
                  <Image src={profile.courseRank ?? ''} alt="" width={396} height={63} />
                </div>
              </div>
              <div className="absolute bottom-1 left-[15%] w-[35%]">
                <Image
                  src={profile.title.typeUrl ?? ''}
                  alt=""
                  width={396}
                  height={63}
                  className="absolute bottom-0 left-0"
                />
                <div className="relative w-full translate-y-[-20%] text-center text-[4px] text-black sm:text-[8px]">
                  {profile.title.value}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
