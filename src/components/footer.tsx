export function Footer() {
  return (
    <footer className="flex flex-col items-start">
      <a
        href="https://pastelrain.com"
        className="rounded-sm font-pixel text-2xl transition hover:text-glass-teal"
      >
        pastelrain.com
      </a>
      <span className="text-sm text-glass-ink-muted">Built with TanStack Start</span>
      <span className="text-sm text-glass-ink-muted">
        Profile picture by{' '}
        <a
          href="https://www.pixiv.net/en/artworks/138023835"
          lang="ja"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition hover:text-glass-coral"
        >
          えってる
        </a>
      </span>
    </footer>
  )
}
