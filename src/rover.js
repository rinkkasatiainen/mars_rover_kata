module.exports = position => commands => {
  if (commands === 'f')
    return [position[0], position[1] + 1];
  return position;
}
