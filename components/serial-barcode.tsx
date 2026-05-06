const CODE39_PATTERNS: Record<string, string> = {
  "0": "nnnwwnwnn",
  "1": "wnnwnnnnw",
  "2": "nnwwnnnnw",
  "3": "wnwwnnnnn",
  "4": "nnnwwnnnw",
  "5": "wnnwwnnnn",
  "6": "nnwwwnnnn",
  "7": "nnnwnnwnw",
  "8": "wnnwnnwnn",
  "9": "nnwwnnwnn",
  A: "wnnnnwnnw",
  B: "nnwnnwnnw",
  C: "wnwnnwnnn",
  D: "nnnnwwnnw",
  E: "wnnnwwnnn",
  F: "nnwnwwnnn",
  G: "nnnnnwwnw",
  H: "wnnnnwwnn",
  I: "nnwnnwwnn",
  J: "nnnnwwwnn",
  K: "wnnnnnnww",
  L: "nnwnnnnww",
  M: "wnwnnnnwn",
  N: "nnnnwnnww",
  O: "wnnnwnnwn",
  P: "nnwnwnnwn",
  Q: "nnnnnnwww",
  R: "wnnnnnwwn",
  S: "nnwnnnwwn",
  T: "nnnnwnwwn",
  U: "wwnnnnnnw",
  V: "nwwnnnnnw",
  W: "wwwnnnnnn",
  X: "nwnnwnnnw",
  Y: "wwnnwnnnn",
  Z: "nwwnwnnnn",
  "-": "nwnnnnwnw",
  ".": "wwnnnnwnn",
  " ": "nwwnnnwnn",
  "*": "nwnnwnwnn",
}

type SerialBarcodeProps = {
  value: string
  className?: string
}

export function SerialBarcode({ value, className }: SerialBarcodeProps) {
  const encodedValue = `*${value.toUpperCase()}*`
  const narrow = 2
  const wide = 5
  const gap = 2
  const height = 72

  let x = 12
  const bars: Array<{ x: number; width: number }> = []

  for (const char of encodedValue) {
    const pattern = CODE39_PATTERNS[char]

    if (!pattern) {
      return null
    }

    pattern.split("").forEach((unit, index) => {
      const width = unit === "w" ? wide : narrow
      const isBar = index % 2 === 0

      if (isBar) {
        bars.push({ x, width })
      }

      x += width
    })

    x += gap
  }

  const totalWidth = x + 12

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${totalWidth} ${height + 26}`}
        role="img"
        aria-label={`Barcode for serial ${value}`}
        className="h-auto w-full"
      >
        <rect width={totalWidth} height={height + 26} rx="18" fill="currentColor" className="text-background dark:text-card" />
        <g className="text-foreground dark:text-white">
          {bars.map((bar, index) => (
            <rect
              key={`${bar.x}-${index}`}
              x={bar.x}
              y={12}
              width={bar.width}
              height={height}
              fill="currentColor"
            />
          ))}
        </g>
        <text
          x={totalWidth / 2}
          y={height + 18}
          textAnchor="middle"
          className="fill-current text-[14px] tracking-[0.28em] text-foreground dark:text-white"
        >
          {value}
        </text>
      </svg>
    </div>
  )
}
