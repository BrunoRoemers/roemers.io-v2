const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // only the tailwind classes that are found in these files will be included in the production bundle!
    // NOTE: don't generate class names dynamically or tailwind will not detect them, see https://tailwindcss.com/docs/content-configuration.
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  safelist: [
    // classes in this array are ALWAYS included, regardless of whether they appear in "content"
  ],
  theme: {
    fontFamily: {
      heading: ['Roboto', ...defaultTheme.fontFamily.sans],
      body: ['Assistant', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
