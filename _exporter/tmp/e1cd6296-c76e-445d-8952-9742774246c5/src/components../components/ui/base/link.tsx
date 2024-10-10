import * as React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"

export interface LinkInternalProps
  extends React.LinkHTMLAttributes<HTMLLinkElement> {}

const LinkInternal = React.forwardRef<HTMLLinkElement, LinkInternalProps>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        className={cn(
          "cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
LinkInternal.displayName = "LinkInternal"

export { LinkInternal }
