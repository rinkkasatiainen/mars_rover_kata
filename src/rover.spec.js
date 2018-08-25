function runCommands(oldPosition, commands) {
  return oldPosition;
}
const {expect} = require("chai")


describe('Mars rover', () => {
  it('should not move if it receives no commands', function () {
    const oldPosition = [0, 0];
    const newPosition = runCommands(oldPosition, '');
    expect(newPosition).to.eql(oldPosition);
  });
});
