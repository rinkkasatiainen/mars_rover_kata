const S = require('sanctuary')

function forward({x, y, facing}) {
  console.log('forward', {x, y, facing})
  if (facing === 's')
    return S.Just({x, y: y - 1 , facing})
  else
    return S.Just({x, y: y + 1 , facing})
}

function positionOf(justOf) {
  const {x, y, facing } = S.maybeToNullable(justOf)
  return [x, y];
}

module.exports = mission => {
  const [x, y, facing, ...commands] = mission; // variables
  const functions = commands.map(c => forward)

  return positionOf(S.pipeK(functions)( S.Just({x,y,facing}) ))
};
