export function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60

  const minutes = String(m).padStart(2, "0")
  const secs = String(s).padStart(2, "0")

  return `${minutes}:${secs}`
}