import { Image } from '@unpic/react'
import type { ReactNode } from 'react'
import { LuCircuitBoard } from 'react-icons/lu'
import {
  SiBlender,
  SiBruno,
  SiBun,
  SiCloudflareworkers,
  SiDiscord,
  SiGithub,
  SiHono,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiSteam,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiUnity,
  SiZedindustries,
} from 'react-icons/si'
import { TbBrandCSharp, TbBrandFramerMotion, TbBrandReactNative } from 'react-icons/tb'

import { ElysiaIcon, HermesAgentIcon, OhMyPiIcon, RexIcon } from '#/components/brand-icons'

interface IconLinkData {
  href: string
  label: string
  icon: ReactNode
}

const ICON_SIZE = 32

const ICON_GROUPS: Array<{ title: string; links: Array<IconLinkData> }> = [
  {
    title: 'main skills',
    links: [
      {
        href: 'https://www.typescriptlang.org/',
        label: 'TypeScript',
        icon: <SiTypescript size={ICON_SIZE} />,
      },
      { href: 'https://react.dev/', label: 'React', icon: <SiReact size={ICON_SIZE} /> },
      { href: 'https://nextjs.org/', label: 'Next.js', icon: <SiNextdotjs size={ICON_SIZE} /> },
      {
        href: 'https://tanstack.com/',
        label: 'TanStack Start & Router',
        icon: <SiTanstack size={ICON_SIZE} />,
      },
      {
        href: 'https://tanstack.com/query',
        label: 'TanStack Query',
        icon: <SiReactquery size={ICON_SIZE} />,
      },
      {
        href: 'https://tailwindcss.com/',
        label: 'Tailwind CSS',
        icon: <SiTailwindcss size={ICON_SIZE} />,
      },
      {
        href: 'https://motion.dev/',
        label: 'Motion',
        icon: <TbBrandFramerMotion size={ICON_SIZE} />,
      },
      {
        href: 'https://reactnative.dev/',
        label: 'React Native',
        icon: <TbBrandReactNative size={ICON_SIZE} />,
      },
      { href: 'https://bun.sh/', label: 'Bun', icon: <SiBun size={ICON_SIZE} /> },
      { href: 'https://hono.dev/', label: 'Hono', icon: <SiHono size={ICON_SIZE} /> },
      { href: 'https://elysiajs.com/', label: 'Elysia', icon: <ElysiaIcon size={ICON_SIZE} /> },
      {
        href: 'https://www.postgresql.org/',
        label: 'PostgreSQL',
        icon: <SiPostgresql size={ICON_SIZE} />,
      },
      {
        href: 'https://workers.cloudflare.com/',
        label: 'Cloudflare Workers',
        icon: <SiCloudflareworkers size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: 'want to learn',
    links: [
      {
        href: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        label: 'C#',
        icon: <TbBrandCSharp size={ICON_SIZE} />,
      },
      { href: 'https://unity.com/', label: 'Unity', icon: <SiUnity size={ICON_SIZE} /> },
      { href: 'https://www.blender.org/', label: 'Blender', icon: <SiBlender size={ICON_SIZE} /> },
      {
        href: 'https://docs.arduino.cc/',
        label: 'Arduino',
        icon: <LuCircuitBoard size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: 'tools',
    links: [
      { href: 'https://zed.dev/', label: 'Zed', icon: <SiZedindustries size={ICON_SIZE} /> },
      { href: 'https://omp.sh/', label: 'Oh My Pi', icon: <OhMyPiIcon size={ICON_SIZE} /> },
      {
        href: 'https://hermes-agent.nousresearch.com/',
        label: 'Hermes',
        icon: <HermesAgentIcon size={ICON_SIZE} />,
      },
      { href: 'https://www.usebruno.com/', label: 'Bruno', icon: <SiBruno size={ICON_SIZE} /> },
      {
        href: 'https://www.superlogical.com/rex',
        label: 'Rex',
        icon: <RexIcon size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: 'links',
    links: [
      {
        href: 'https://github.com/rezaa-cmV6YWE',
        label: 'GitHub',
        icon: <SiGithub size={ICON_SIZE} />,
      },
      {
        href: 'https://discord.com/users/465403883469012992',
        label: 'Discord',
        icon: <SiDiscord size={ICON_SIZE} />,
      },
      {
        href: 'https://steamcommunity.com/id/rrainc/',
        label: 'Steam',
        icon: <SiSteam size={ICON_SIZE} />,
      },
    ],
  },
]

function IconLink({ href, label, icon }: IconLinkData) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative inline-flex rounded-lg p-1.5"
    >
      {icon}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 rounded bg-rain-ink px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {label}
      </span>
    </a>
  )
}

export function WhoAmI() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Image
          src="/avatar.jpg"
          alt="re:'s avatar"
          width={128}
          height={128}
          className="-mt-20 rounded-full border border-gray-100"
        />
        <div>
          <h2 className="font-pixel text-4xl">hi, i'm re:</h2>
          <p>i'm a software developer.</p>
        </div>
      </div>
      <div className="space-y-4">
        {ICON_GROUPS.map((group) => (
          <div key={group.title} className="space-y-1">
            <h3 className="font-pixel text-xl">{group.title}</h3>
            <ul className="-mx-1.5 flex flex-wrap">
              {group.links.map((link) => (
                <li key={link.href}>
                  <IconLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
