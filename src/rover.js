module.exports = mission => {
  const [x, y, facing, commands] = mission; // variables
  if ( facing === 's' ){
    if (commands === 'f')
      return [x, y - 1];
    else
      return [x, y];
  }
  if (commands === 'f')
    return [x, y + 1];
  else
    return [x, y];
};
