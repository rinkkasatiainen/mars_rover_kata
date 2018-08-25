module.exports = mission => {
  const [x, y, commands] = mission;
  if (commands === 'f')
    return [x, y + 1];
  return [x, y];
};
