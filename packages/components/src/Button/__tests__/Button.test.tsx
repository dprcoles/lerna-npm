import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"

import { Button, ButtonSize, ButtonVariant } from "../src/Button"

const BUTTON_TEXT = "Test Button"

describe("<Button />", () => {
  const setup = (propOverrides = {}) => {
    const props = {
      onClick: jest.fn(),
      ...propOverrides,
    }

    const wrapper = render(<Button {...props}>{BUTTON_TEXT}</Button>)

    return {
      ...wrapper,
      base: wrapper.container.querySelector(".dc-c-button")!,
    }
  }

  it("shows the expected button text", () => {
    const { base } = setup()

    expect(base).toHaveTextContent(BUTTON_TEXT)
  })

  it("adds any expected class names", () => {
    const { base } = setup({ className: "test-class" })

    expect(base).toHaveClass("test-class")
  })

  it("runs the onClick prop when the button is clicked", async () => {
    const onClick = jest.fn()
    const { base } = setup({ onClick })

    userEvent.click(base).then(() => {
      expect(onClick).toHaveBeenCalled()
    })
  })

  it("allows the use of an alternative element", () => {
    const { base } = setup({ as: "a" })

    expect(base).toHaveClass("dc-c-button")
    expect(base.tagName).toBe("A")
  })

  it.each([...Object.values(ButtonVariant)])(
    "adds the expected %s variant class name modifier",
    variant => {
      const { base } = setup({ variant })

      expect(base).toHaveClass(`dc-c-button--${variant}`)
    }
  )

  it.each([...Object.values(ButtonSize).filter(x => x !== ButtonSize.Default)])(
    "adds the expected %s size class name modifiers",
    size => {
      const { base } = setup({ size: size })

      expect(base).toHaveClass(`dc-c-button--${size}`)
    }
  )

  it("renders matching snapshot", () => {
    const { asFragment } = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
