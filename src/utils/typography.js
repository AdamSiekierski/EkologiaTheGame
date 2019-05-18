import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '21px',
  baseLineHeight: 1.666,
  googleFonts: [{
    name: 'VT323',
    styles: [
      '400',
      '700',
    ],
  }],
  bodyFontFamily: ['VT323'],
  headerFontFamily: ['VT323'],
});

export default typography
