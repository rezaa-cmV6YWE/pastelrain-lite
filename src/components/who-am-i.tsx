import { Image } from '@unpic/react'
import type { ReactNode } from 'react'
import { LuCircuitBoard } from 'react-icons/lu'
import {
  SiBetterauth,
  SiBlender,
  SiBun,
  SiDiscord,
  SiDrizzle,
  SiExpo,
  SiGit,
  SiGithub,
  SiHono,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencode,
  SiPostman,
  SiReact,
  SiSteam,
  SiTanstack,
  SiTypescript,
  SiUnity,
  SiWarp,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

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
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        label: 'JavaScript',
        icon: <SiJavascript size={ICON_SIZE} />,
      },
      {
        href: 'https://www.typescriptlang.org/',
        label: 'TypeScript',
        icon: <SiTypescript size={ICON_SIZE} />,
      },
      { href: 'https://nodejs.org/', label: 'Node.js', icon: <SiNodedotjs size={ICON_SIZE} /> },
      { href: 'https://bun.sh/', label: 'Bun', icon: <SiBun size={ICON_SIZE} /> },
      { href: 'https://react.dev/', label: 'React', icon: <SiReact size={ICON_SIZE} /> },
      { href: 'https://nextjs.org/', label: 'Next.js', icon: <SiNextdotjs size={ICON_SIZE} /> },
      { href: 'https://tanstack.com/', label: 'TanStack', icon: <SiTanstack size={ICON_SIZE} /> },
      { href: 'https://expo.dev/', label: 'Expo', icon: <SiExpo size={ICON_SIZE} /> },
      { href: 'https://hono.dev/', label: 'Hono', icon: <SiHono size={ICON_SIZE} /> },
      {
        href: 'https://orm.drizzle.team/',
        label: 'Drizzle ORM',
        icon: <SiDrizzle size={ICON_SIZE} />,
      },
      {
        href: 'https://www.better-auth.com/',
        label: 'Better Auth',
        icon: <SiBetterauth size={ICON_SIZE} />,
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
      {
        href: 'https://code.visualstudio.com/',
        label: 'VS Code',
        icon: <VscVscode size={ICON_SIZE} />,
      },
      { href: 'https://opencode.ai/', label: 'OpenCode', icon: <SiOpencode size={ICON_SIZE} /> },
      { href: 'https://www.warp.dev/', label: 'Warp', icon: <SiWarp size={ICON_SIZE} /> },
      { href: 'https://git-scm.com/', label: 'Git', icon: <SiGit size={ICON_SIZE} /> },
      { href: 'https://www.postman.com/', label: 'Postman', icon: <SiPostman size={ICON_SIZE} /> },
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
