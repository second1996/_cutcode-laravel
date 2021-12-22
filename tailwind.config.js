module.exports = {
  content: ["./app/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1540px',
    },
    container: {
      center: true,
      padding: '10px',
    },
    fontSize: {},
    extend: {
      colors: {
        white: "#FFF",
        purple: "#7843E9",
        pink: "#EC4176",
        dark: "#222",
        gray: "#454545",
        darkblue: "#1E1F43",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
