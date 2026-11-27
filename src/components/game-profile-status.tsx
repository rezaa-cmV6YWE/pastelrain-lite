interface GameProfileStatusProps {
  game: string
  /** Width / height of the real card, so the placeholder holds its space. */
  aspectRatio: string
  isLoading: boolean
  isError: boolean
  maintenanceReason: string | null
}

/**
 * Loading, error and maintenance states shared by the maimai and CHUNITHM cards.
 * Renders nothing once real profile data is available.
 */
export function GameProfileStatus({
  game,
  aspectRatio,
  isLoading,
  isError,
  maintenanceReason,
}: GameProfileStatusProps) {
  if (isLoading) {
    return (
      <output
        aria-label={`loading ${game} profile`}
        className="block w-full rounded-sm bg-glass-ink/15 motion-safe:animate-pulse"
        style={{ aspectRatio }}
      />
    )
  }

  if (isError) {
    return <p className="text-sm text-glass-coral">couldn't reach {game} right now.</p>
  }

  if (maintenanceReason) {
    return (
      <div className="text-sm">
        <p className="text-glass-amber">down for maintenance, check back soon.</p>
        <p className="text-glass-ink-muted">{maintenanceReason}</p>
      </div>
    )
  }

  return null
}
