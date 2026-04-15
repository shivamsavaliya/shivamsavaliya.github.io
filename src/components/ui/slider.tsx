"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  className?: string
  label?: string
}

function Slider({ value, onChange, min = 0, max = 100, step = 1, className, label }: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className={cn("w-full", className)}>
      {label && <label className="block text-sm font-medium mb-2 text-foreground/70">{label}</label>}
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-accent1
            [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(124,92,255,0.6)]
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:hover:scale-125
          "
          style={{
            background: `linear-gradient(to right, var(--accent1) ${percentage}%, rgba(255,255,255,0.1) ${percentage}%)`
          }}
        />
      </div>
    </div>
  )
}

export { Slider }
