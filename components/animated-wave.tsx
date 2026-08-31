"use client"

import { useEffect, useRef } from "react"

export function AnimatedWave({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "·∘○◯◌●◉"
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    const render = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      ctx.font = "13px monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const cols = Math.floor(rect.width / 22)
      const rows = Math.floor(rect.height / 22)

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = (x + 0.5) * (rect.width / cols)
          const py = (y + 0.5) * (rect.height / rows)

          // Multiple wave interference
          const wave1 = Math.sin(x * 0.18 + time * 1.8) * Math.cos(y * 0.14 + time * 0.9)
          const wave2 = Math.sin((x + y) * 0.09 + time * 1.3)
          const wave3 = Math.cos(x * 0.08 - y * 0.08 + time * 0.7)

          const combined = (wave1 + wave2 + wave3) / 3
          const normalized = (combined + 1) / 2

          const charIndex = Math.floor(normalized * (chars.length - 1))
          const alpha = 0.08 + normalized * 0.35

          ctx.fillStyle = `rgba(55, 50, 47, ${alpha})`
          ctx.fillText(chars[charIndex], px, py)
        }
      }

      time += 0.025
      frameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  )
}
