/** @type {import('tailwindcss').Config} */

const range = (length) => Array.from({ length }, (_, i) => i);

const pixels = range(1000 + 1).map((x) => [x, `calc(${x}rem / 16)`]);
const px0To1000 = Object.fromEntries(pixels);
const px0To64 = Object.fromEntries(pixels.slice(0, 64 + 1));

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'main': "#71503D",
        'disabled': "#EAE9E5",
        'mainBg': "#EAE9E5",
        'lightGray': "#F4F4F4",
        'gray': "#AAAAAA",
        'black': '#1E1E1E',
        'station-01': "#263C96",
        'station-02': "#3CB44A",
        'station-03': "#FF7300",
        'station-04': "#2C9EDE",
        'station-05': "#8936E0",
        'station-06': "#B5500B",
        'station-07': "#697215",
        'station-08': "#E51E6E",
        'station-09': "#CEA43A",
        'station-bundang': "#FFCE33",
        'station-sinbundang': "#A71E31",
        'station-gyeongchun': "#01AD77",
        'station-gyeongui': "#7CC4A5",
        'station-airport': "#69A5D1",
      },
      minWidth: px0To1000,
      minHeight: px0To1000,
      maxWidth: px0To1000,
      maxHeight: px0To1000,
      width: px0To1000,
      height: px0To1000,
      padding: px0To1000,
      margin: px0To1000,
      fontSize: px0To64,
      borderRadius: px0To64,
    },
    screens: {
      mobile: { max: "415px" },
    },
  },

  plugins: [],

  '@tailwind base': {
    '*': {
      boxSizing: 'border-box',
    },
  },
};