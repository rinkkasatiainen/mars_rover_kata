const S = require('sanctuary')

function forward({x, y, facing}) {
  if (facing === 's')
    return {x, y: y - 1 , facing}
  else
    return {x, y: y + 1 , facing}
}

function positionOf({x, y, facing}) {
  return [x, y];
}

module.exports = mission => {
  const [x, y, facing, ...commands] = mission; // variables

  const execute = initial => command => {
    const {x, y, facing} = initial;
    if (command === 'f')
      return forward({x, y, facing});
    else
      return {x, y, facing};
  }

  return positionOf(S.reduce(execute)({x, y, facing})(commands))
};
