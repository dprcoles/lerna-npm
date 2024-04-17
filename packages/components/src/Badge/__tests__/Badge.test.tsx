import { render } from "@testing-library/react"
import React from "react"

import { Badge, BadgeVariant } from "../src/Badge"

const BADGE_TEXT = "Test Badge"

describe("<Badge />", () => {
  const setup = (propOverrides = {}) => {
    const props = {
      onClick: jest.fn(),
      ...propOverrides,
    }

    const wrapper = render(<Badge {...props}>{BADGE_TEXT}</Badge>)

    return {
      ...wrapper,
      base: wrapper.container.querySelector(".dc-c-badge")!,
    }
  }

  it("shows the expected badge text", () => {
    const { base } = setup()

    expect(base).toHaveTextContent(BADGE_TEXT)
  })

  it("adds any expected class names", () => {
    const { base } = setup({ className: "test-class" })

    expect(base).toHaveClass("test-class")
  })

  it("allows the use of an alternative element", () => {
    const { base } = setup({ as: "a" })

    expect(base).toHaveClass("dc-c-badge")
    expect(base.tagName).toBe("A")
  })

  it.each([...Object.values(BadgeVariant)])(
    "adds the expected %s variant class name modifier",
    variant => {
      const { base } = setup({ variant })

      expect(base).toHaveClass(`dc-c-badge--${variant}`)
    }
  )

  it("renders matching snapshot", () => {
    const { asFragment } = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
