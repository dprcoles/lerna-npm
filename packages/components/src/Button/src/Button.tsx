import cn from "classnames"
import { cva, type VariantProps } from "cva"
import * as React from "react"

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Outline = "outline",
  Ghost = "ghost",
  Link = "link",
}

export enum ButtonSize {
  Default = "default",
  Small = "small",
  Large = "large",
  Icon = "icon",
}

const buttonVariants = cva("dc-c-button", {
  variants: {
    variant: {
      [ButtonVariant.Primary]: "dc-c-button--primary",
      [ButtonVariant.Secondary]: "dc-c-button--secondary",
      [ButtonVariant.Danger]: "dc-c-button--danger",
      [ButtonVariant.Outline]: "dc-c-button--outline",
      [ButtonVariant.Ghost]: "dc-c-button--ghost",
      [ButtonVariant.Link]: "dc-c-button--link",
    },
    size: {
      [ButtonSize.Default]: "",
      [ButtonSize.Small]: "dc-c-button--small",
      [ButtonSize.Large]: "dc-c-button--large",
      [ButtonSize.Icon]: "dc-c-button--icon",
    },
  },
  defaultVariants: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Default,
  },
})

export type ButtonProps<E extends React.ElementType> = {
  as?: E
  children?: React.ReactNode
  isFullWidth?: boolean
} & React.ComponentPropsWithoutRef<E> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps<React.ElementType>
>(({ as = "button", className, variant, isFullWidth, size, ...props }, ref) => {
  const Component = as
  return (
    <Component
      className={cn(
        buttonVariants({ variant, size, className }),
        isFullWidth && "dc-c-button--full"
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
