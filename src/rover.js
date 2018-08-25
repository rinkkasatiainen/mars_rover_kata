module.exports = mission => {
  const [x, y, commands] = mission; // variables
  if (commands === 'f')
    return [x, y + 1];
  else
    return [x, y];
};
