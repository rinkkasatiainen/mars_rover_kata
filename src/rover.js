function forward(facing) {
  if (facing === 's')
    return ([x, y]) => [x, y - 1]
  else
    return ([x, y]) => [x, y + 1]
}

module.exports = mission => {
  const [x, y, facing, commands] = mission; // variables
  if (commands === 'f')
    return forward(facing)([x,y]);
  else
    return [x, y];
};
