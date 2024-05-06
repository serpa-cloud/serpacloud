/* eslint-disable no-console */
// eslint-disable-next-line space-before-function-paren, func-names
const Resizer = function({ deviceProperties: state, breakpoints = [] }) {
  const client = {};
  const { screen } = global;

  let width = global.innerWidth || state.width;
  let height = global.innerHeight || state.height;

  if (state.os === 'iOS') {
    width = (screen && screen.width) || width;
    height = (screen && screen.height) || height;
  }

  if (!state.isMobileAgent) {
    if (width > 1200) client.screenSize = 'desktop';
    else if (width < 815) client.screenSize = 'phone';
    else client.screenSize = 'tablet';
  }

  if (width < height) client.orientation = 'portrait';
  else client.orientation = 'landscape';

  const breakpoint = breakpoints.find(({ name, min, max }) => {
    if (!name) throw new Error('You need to define a name for your breakpoint');
    const maxLimit = max || Infinity;
    const minLimit = min || -Infinity;

    if (!max) console.warning('If you dont define a max, the max value will be Infinity');
    if (!min && min !== 0) {
      console.warning('If you dont define a min, the min value will be -Infinity');
    }

    if (width > minLimit && width <= maxLimit) return true;
    return false;
  });

  return {
    ...client,
    width,
    height,
    breakpoint: (breakpoint && breakpoint.name) || null,
  };
};

export default Resizer;
