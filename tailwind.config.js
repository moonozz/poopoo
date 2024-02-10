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
        'hoverGray': '#D9D8D1',
        '01': "#263C96",
        '02': "#3CB44A",
        '03': "#FF7300",
        '04': "#2C9EDE",
        '05': "#8936E0",
        '06': "#B5500B",
        '07': "#697215",
        '08': "#E51E6E",
        '09': "#CEA43A",
        'gyeonggang': "#2683F2",
        'gyeongui': "#7CC4A5",
        'gyeongchun': "#01AD77",
        'airport': "#69A5D1",
        'kimpogold': '#96710A',
        'seohae': '#8BC53F',
        'bundang': "#FFCE33",
        'sillim': "#4E67A5",
        'sinbundang': "#A71E31",
        'everline': '#77C371',
        'ui_sinseol': '#C5C000',
        'uijeongbu': '#FF9D27',
        'incheon01': '#6F99D0',
        'incheon02': '#FFB850',
        'magtrainf': '#FFCD12',
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