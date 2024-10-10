import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("whitespace-nowrap", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-white text-center text-black border-black",
      link: "bg-white text-center text-black",
      link2: "text-black underline",
      third: "bg-black text-white border-black",
      four: "bg-transparent text-center text-white border-white",
      five: "bg-transparent text-center text-black border-black",
      six: "bg-transparent text-center text-white border-white",
      submit: "bg-black text-white border-black text-center",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
      secondary: "border-2 py-3 px-6",
      link2: "text-xs",
      link: "border-x px-3 gap-2 flex justify-center items-center",
      third: "border-2 py-3 px-6",
      four: "border-2 py-3 px-6",
      five: "border-2 py-3 px-6",
      six: "border-2 py-3 px-6",
      submit: "border-x px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className })) +" rounded-[var(--button-radius)]"}
        ref={ref}
        {...props}
        style={{borderRadius:  "var(--button-radius)"}}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
