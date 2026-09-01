"use client"

import { useEffect, useRef } from "react"

export type IconType = "agents" | "metrics" | "platform"

interface PixelIconProps {
  type: IconType
  size?: number
  className?: string
}

// ── Agents icon: humanoid pixel figure running (size 32px) ───────────────────
const AGENT_FRAMES: number[][][] = [
  // Frame 0 - stand
  [
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,0,0,1,1,0],
    [0,1,1,0,0,1,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
  ],
  // Frame 1 - step left
  [
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,0,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,0],
  ],
  // Frame 2 - stand
  [
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,0,0,1,1,0],
    [0,1,1,0,0,1,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
  ],
  // Frame 3 - step right
  [
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,0],
    [0,0,0,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,0],
  ],
]

function drawAgents(ctx: CanvasRenderingContext2D, W: number, t: number, color = "99, 102, 241") {
  const fps = 1.5
  const rawIdx = Math.floor(t / (1000 / fps))
  const frameIdx = ((rawIdx % AGENT_FRAMES.length) + AGENT_FRAMES.length) % AGENT_FRAMES.length
  const frame = AGENT_FRAMES[frameIdx] || AGENT_FRAMES[0]
  if (!frame) return

  const rows = frame.length
  const cols = frame[0].length
  const ps = Math.floor(W / cols)
  const offX = Math.floor((W - cols * ps) / 2)
  const offY = Math.floor((W - rows * ps) / 2)

  const bobY = Math.sin(t * 0.0025) * ps * 0.35

  frame.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (!cell) return
      const opacity = 0.45 + 0.55 * Math.sin(t * 0.0003 + r * 0.3)
      ctx.fillStyle = `rgba(${color}, ${opacity})`
      ctx.fillRect(offX + c * ps, offY + r * ps + bobY, ps - 1, ps - 1)
    })
  })
}

// ── Metrics icon: growing pixel bar chart (size 40px) ─────────────────────────
function drawMetrics(ctx: CanvasRenderingContext2D, W: number, t: number, color = "99, 102, 241") {
  const ps = Math.floor(W / 12)
  const bars = 3
  const bw = ps * 2
  const gap = ps
  const total = bars * bw + (bars - 1) * gap
  const offX = Math.floor((W - total) / 2)
  const maxH = W * 0.7

  const heights = [0.45, 0.75, 0.55]
  const wave = Math.sin(t * 0.0005) * 0.12

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

      // Crisp pixels
      ctx.imageSmoothingEnabled = false

      if (type === "agents") {
        drawAgents(ctx, size, t, "99, 102, 241")
      } else {
        drawMetrics(ctx, size, t, "99, 102, 241")
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
