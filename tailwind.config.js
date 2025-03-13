/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: 'calc(var(--vh, 1vh) * 100)', // --vh가 없는 경우 1vh로 대체
      },
      minHeight: {
        screen: 'calc(var(--vh, 1vh) * 100)', // --vh가 없는 경우 1vh로 대체
      },
      fontFamily: {
        suite: ['SUITE Variable', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'sans-serif']
      },
    },
  },
  plugins: [],
}

