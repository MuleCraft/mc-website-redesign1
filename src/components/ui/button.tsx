import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "btn whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-[#204066] hover:bg-[#1a3355] hover:border-[#1a3355]",
          variant === "outline" && "bg-white text-[#204066] hover:bg-[#F3F4F6] border-[#204066]",
          variant === "ghost" && "border-transparent hover:bg-accent hover:text-accent-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

