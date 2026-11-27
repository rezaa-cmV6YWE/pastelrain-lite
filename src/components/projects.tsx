export function Projects() {
  return (
    <section className="space-y-3">
      <h2 className="font-pixel text-2xl">projects</h2>
      <ul className="space-y-2">
        <li className="border-b border-glass-ink/25 pb-2 last:border-0 last:pb-0">
          <a
            href="https://github.com/rezaageng/elix-mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-sm"
          >
            <h3 className="text-lg font-semibold transition group-hover:text-glass-orange">
              Elix Mobile
            </h3>
            <p className="text-glass-ink-muted">
              A gamified social platform built with React Native / Expo. Users pick a role, complete
              quests, earn rewards, and participate in guild chat and leaderboards.
            </p>
          </a>
        </li>
        <li className="border-b border-glass-ink/25 pb-2 last:border-0 last:pb-0">
          <a
            href="https://github.com/rezaageng/elix-server"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-sm"
          >
            <h3 className="text-lg font-semibold transition group-hover:text-glass-coral">
              Elix Server
            </h3>
            <p className="text-glass-ink-muted">
              A Hono backend server built on Bun, providing a typed REST API with WebSocket support,
              OAuth-based authentication, and a domain-driven database schema covering classes,
              guilds, quests, economy, shop, inventory, notifications, and users.
            </p>
          </a>
        </li>
        <li className="border-b border-glass-ink/25 pb-2 last:border-0 last:pb-0">
          <a
            href="https://github.com/rezaageng/me"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-sm"
          >
            <h3 className="text-lg font-semibold transition group-hover:text-glass-teal">me</h3>
            <p className="text-glass-ink-muted">
              My professional portfolio website built with React, TypeScript, Next.js, and
              TailwindCSS. It's no longer maintained, the server is dead lol. I will recreate it in
              the future with a new design and features.
            </p>
          </a>
        </li>
      </ul>
    </section>
  )
}
