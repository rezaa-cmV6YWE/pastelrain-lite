interface ProjectLink {
  label: string
  href: string
}

interface Project {
  title: string
  kind: string
  year: string
  summary: string
  links: Array<ProjectLink>
}

const PROJECTS: Array<Project> = [
  {
    title: 'pastelrain',
    kind: 'Website',
    year: '2026',
    summary:
      'An interactive story you scroll through, drawn in paper-cut scenes of a Japanese seaside town at the end of summer.',
    links: [
      { label: 'Visit', href: 'https://pastelrain.com' },
      { label: 'Code', href: 'https://github.com/rezaa-cmV6YWE/pastelrain' },
    ],
  },
  {
    title: 'performai-api',
    kind: 'API',
    year: '2026',
    summary: 'Scores and ratings from maimai DX and CHUNITHM, as an API their own sites never had.',
    links: [{ label: 'Code', href: 'https://github.com/rezaa-cmV6YWE/performai-api' }],
  },
  {
    title: 'Elix',
    kind: 'Mobile app',
    year: '2026',
    summary: 'A self-management app that turns your days into an RPG: quests, XP, gold and guilds.',
    links: [
      { label: 'App code', href: 'https://github.com/rezaa-cmV6YWE/elix-mobile' },
      { label: 'Server code', href: 'https://github.com/rezaa-cmV6YWE/elix-server' },
    ],
  },
  {
    title: 'rezaa.me',
    kind: 'Website',
    year: '2023–2024',
    summary: 'My first portfolio, with a terminal you could type into.',
    links: [
      { label: 'Visit', href: 'https://rezaa.me' },
      { label: 'Code', href: 'https://github.com/rezaa-cmV6YWE/me' },
    ],
  },
]

const HOVER_COLORS = [
  'hover:text-glass-orange',
  'hover:text-glass-coral',
  'hover:text-glass-teal',
  'hover:text-glass-amber',
]

export function Projects() {
  return (
    <section className="space-y-3">
      <h2 className="font-pixel text-2xl">projects</h2>
      <ul className="space-y-2">
        {PROJECTS.map((project, index) => (
          <li
            key={project.title}
            className="border-b border-glass-ink/25 pb-2 last:border-0 last:pb-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-sm text-glass-ink-muted">
                {project.kind} · {project.year}
              </span>
            </div>
            <p className="text-glass-ink-muted">{project.summary}</p>
            <ul className="mt-1 flex flex-wrap gap-x-3 text-sm">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-sm font-medium underline underline-offset-2 transition ${HOVER_COLORS[index % HOVER_COLORS.length]}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
