"use client"

import { useEffect, useRef } from "react"

export type IconType =
  | "agents"
  | "metrics"
  | "platform"
  | "fiscal"
  | "predictive"
  | "security"
  | "workflow"
  | "growth"
  | "tax"
  | "finance"
  | "accounting"

interface PixelIconProps {
  type: IconType
  size?: number
  className?: string
}

// ── Agents icon: humanoid pixel figure running ───────────────────────────────
const AGENT_FRAMES: number[][][] = [
  // Frame 0 — stand
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
  ],
  // Frame 1 — step left
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
  ],
  // Frame 2 — stand
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
  ],
  // Frame 3 — step right
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
  ],
]

function drawAgents(ctx: CanvasRenderingContext2D, W: number, t: number, color = "55, 50, 47") {
  const fps = 5
  const totalFrames = AGENT_FRAMES.length
  const rawIdx = Math.floor(t / (1000 / fps))
  const frameIdx = ((rawIdx % totalFrames) + totalFrames) % totalFrames
  const frame = AGENT_FRAMES[frameIdx] || AGENT_FRAMES[0]
  if (!frame) return

  const rows = frame.length
  const cols = frame[0].length
  const ps = Math.floor(W / cols)
  const offX = Math.floor((W - cols * ps) / 2)
  const offY = Math.floor((W - rows * ps) / 2)

  // Natural subtle bob
  const bobY = Math.sin(t * 0.01) * ps * 0.35

  frame.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (!cell) return
      const opacity = 0.5 + 0.5 * Math.sin(t * 0.001 + r * 0.3)
      ctx.fillStyle = `rgba(${color}, ${opacity})`
      ctx.fillRect(offX + c * ps, offY + r * ps + bobY, ps - 1, ps - 1)
    })
  })
}

// ── Metrics / Growth icon: growing pixel bar chart ───────────────────────────
function drawMetrics(ctx: CanvasRenderingContext2D, W: number, t: number, color = "55, 50, 47") {
  const ps = Math.floor(W / 12)
  const bars = 3
  const bw = ps * 2
  const gap = ps
  const total = bars * bw + (bars - 1) * gap
  const offX = Math.floor((W - total) / 2)
  const maxH = W * 0.7

  const heights = [0.45, 0.75, 0.55]
  const wave = Math.sin(t * 0.002) * 0.12

  heights.forEach((h, i) => {
    const animated = Math.max(0.1, h + wave * (i % 2 === 0 ? 1 : -1))
    const bh = animated * maxH
    const x = offX + i * (bw + gap)
    const y = W - bh - ps

    const rowCount = Math.floor(bh / ps)
    for (let row = 0; row < rowCount; row++) {
      const progress = 1 - row / rowCount
      const alpha = 0.2 + progress * 0.8
      ctx.fillStyle = `rgba(${color}, ${alpha})`
      ctx.fillRect(x, y + row * ps, bw, ps - 1)
    }
  })
}

// ── Platform icon: rotating gear / network nodes ─────────────────────────────
function drawPlatform(ctx: CanvasRenderingContext2D, W: number, t: number, color = "55, 50, 47") {
  const cx = W / 2
  const cy = W / 2
  const r = W * 0.35
  const ps = Math.floor(W / 12)

  const pulse = 0.6 + 0.4 * Math.sin(t * 0.003)
  ctx.fillStyle = `rgba(${color}, ${pulse})`
  const cs = ps * 1.4
  ctx.fillRect(cx - cs / 2, cy - cs / 2, cs, cs)

  const nodeCount = 5
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2 + t * 0.0015
    const nx = cx + Math.cos(angle) * r
    const ny = cy + Math.sin(angle) * r
    const opacity = 0.3 + 0.5 * ((Math.sin(angle * 2 + t * 0.002) + 1) / 2)
    ctx.fillStyle = `rgba(${color}, ${opacity})`
    ctx.fillRect(Math.round(nx / ps) * ps - ps / 2, Math.round(ny / ps) * ps - ps / 2, ps, ps)
  }
}

// ── Security icon: pulsing shield lock ───────────────────────────────────────
function drawSecurity(ctx: CanvasRenderingContext2D, W: number, t: number, color = "55, 50, 47") {
  const ps = Math.floor(W / 12)
  const pulse = 0.5 + 0.5 * Math.sin(t * 0.004)

  const points = [
    [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2],
    [2, 3], [9, 3],
    [2, 4], [9, 4],
    [2, 5], [9, 5],
    [3, 6], [8, 6],
    [4, 7], [7, 7],
    [5, 8], [6, 8],
    [5, 9],
  ]

  ctx.fillStyle = `rgba(${color}, 0.6)`
  for (const [x, y] of points) {
    ctx.fillRect(x * ps, y * ps, ps * 0.9, ps * 0.9)
  }

  ctx.fillStyle = `rgba(16, 185, 129, ${0.6 + pulse * 0.4})`
  ctx.fillRect(5 * ps, 4 * ps, ps * 1.5, ps * 2)
}

// ── Canvas wrapper ────────────────────────────────────────────────────────────
export function PixelIcon({ type, size = 40, className = "" }: PixelIconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const draw = (t: number) => {
      if (!ctx) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = size * dpr
      canvas.height = size * dpr
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, size, size)

      // Disable anti-aliasing for crisp pixel edges
      ctx.imageSmoothingEnabled = false

      switch (type) {
        case "agents":
        case "fiscal":
        case "predictive":
        case "accounting":
        case "tax":
        case "finance":
          drawAgents(ctx, size, t, "55, 50, 47")
          break
        case "metrics":
        case "growth":
          drawMetrics(ctx, size, t, "55, 50, 47")
          break
        case "platform":
        case "workflow":
          drawPlatform(ctx, size, t, "55, 50, 47")
          break
        case "security":
          drawSecurity(ctx, size, t, "55, 50, 47")
          break
        default:
          drawAgents(ctx, size, t, "55, 50, 47")
          break
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [type, size])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: `${size}px`, height: `${size}px`, display: "block" }}
    />
  )
}
