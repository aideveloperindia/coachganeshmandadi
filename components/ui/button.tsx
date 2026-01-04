import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-royal-indigo text-ivory-white hover:bg-royal-indigo/90 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300",
        accent: "bg-gradient-to-r from-magenta via-golden-amber to-bright-marigold text-white hover:from-magenta/90 hover:via-golden-amber/90 hover:to-bright-marigold/90 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300",
        outline: "border-2 border-royal-indigo text-royal-indigo hover:bg-royal-indigo hover:text-ivory-white hover:scale-105 transition-all duration-300",
        ghost: "hover:bg-soft-blush/20 hover:text-magenta",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-2xl px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }








