import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "border-transparent bg-accent1 text-white shadow",
        variant === "secondary" && "border-transparent bg-white/10 text-foreground",
        variant === "outline" && "border-border text-foreground",
        variant === "destructive" && "border-transparent bg-red-500 text-white shadow",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
