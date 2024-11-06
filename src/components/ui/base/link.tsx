import * as React from "react"
import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"

export interface LinkInternalProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps {
  className?: string
}

const LinkInternal = React.forwardRef<HTMLAnchorElement, LinkInternalProps>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        className={cn("cursor-pointer", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
LinkInternal.displayName = "LinkInternal"

export { LinkInternal }
