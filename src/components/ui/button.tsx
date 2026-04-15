import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "glow"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-accent1 text-white hover:bg-accent1/90 shadow-lg shadow-accent1/25",
          variant === "secondary" && "bg-white/10 text-foreground hover:bg-white/20",
          variant === "outline" && "border border-border bg-transparent hover:bg-white/5 text-foreground",
          variant === "ghost" && "hover:bg-white/5 text-foreground",
          variant === "link" && "text-accent1 underline-offset-4 hover:underline",
          variant === "glow" && "bg-accent1 text-white shadow-[0_0_30px_rgba(124,92,255,0.5)] hover:shadow-[0_0_50px_rgba(124,92,255,0.7)] hover:scale-105",
          size === "default" && "h-10 px-5 py-2",
          size === "sm" && "h-9 rounded-lg px-3",
          size === "lg" && "h-12 rounded-xl px-8 text-base",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
