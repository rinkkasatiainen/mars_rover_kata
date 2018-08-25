module.exports = mission => {
  const [x, y, facing, commands] = mission; // variables
  let forward;
  if ( facing === 's' )
    forward = ([x, y]) => [x, y - 1]
  else
    forward = ([x, y]) => [x, y + 1]

  if (commands === 'f')
    return forward([x,y]);
  else
    return [x, y];
};
