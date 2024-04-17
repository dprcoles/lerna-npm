import type { Preview } from "@storybook/react"

import "./main.css"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Dark",
      values: [
        {
          name: "Dark",
          value: "rgb(31 31 31)",
        },
        {
          name: "Light",
          value: "#fff",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
