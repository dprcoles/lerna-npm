/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/components/src/**/*.{ts,tsx,html,css}",
    "./packages/**/*.stories.tsx",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx,html,css}",
  ],
  presets: [require("@dprcoles/styles/tailwind.config.js")],
}
