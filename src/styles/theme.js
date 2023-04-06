const fontSize = {
  small: '1.2rem',
  regular: '1.6rem',
  semiLarge: '2rem',
  large: '2.4rem',
  big: '6.4rem',
};

const fontWeight = {
  nomal: '400',
  bold: '700',
  heavy: '900',
};

const darkVersion = {
  background: '#141414',
  fontPrimary: '#ffffff',
  box: '#292A2D',
};

const color = {
  pink: '#DB7CB1',
  blue: '#78ACD5',
  purple: '#919FEB',
  red: '#FF2460',
  black: '#141414',
  white: '#ffffff',
};

const hide = {
  opacity: '0',
  'pointer-events': 'none',
};

const gradient = {
  background: `radial-gradient(60.25% 122.24% at 103.28% -41.67%, #fdc2b0 0%, rgba(235, 81, 158, 0.25) 100%),
  radial-gradient(80.74% 163.82% at -1.23% -17.59%, #5af8fe 0%, rgba(235, 81, 158, 0.25) 100%),
  radial-gradient(49.18% 100.93% at 77.87% 111.11%, rgba(137, 59, 254, 0.85) 0%, rgba(128, 187, 219, 0.2125) 80%),
  #4edffc;`,
  'background-blend-mode': 'overlay, normal, normal, normal, normal',
};

const theme = {
  fontSize,
  fontWeight,
  darkVersion,
  color,
  hide,
  gradient,
};

export default theme;
