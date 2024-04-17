import cn from "classnames"
import { cva, type VariantProps } from "cva"
import * as React from "react"

export enum BadgeVariant {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Outline = "outline",
}

const badgeVariants = cva("dc-c-badge", {
  variants: {
    variant: {
      [BadgeVariant.Primary]: "dc-c-badge--primary",
      [BadgeVariant.Secondary]: "dc-c-badge--secondary",
      [BadgeVariant.Danger]: "dc-c-badge--danger",
      [BadgeVariant.Outline]: "dc-c-badge--outline",
    },
  },
  defaultVariants: {
    variant: BadgeVariant.Primary,
  },
})

export type BadgeProps<E extends React.ElementType> = {
  as?: E
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<E> &
  VariantProps<typeof badgeVariants>

const Badge = ({ as = "div", className, variant, ...props }: BadgeProps<React.ElementType>) => {
  const Component = as
  return <Component className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
