const {expect} = require("chai")
const runCommands = require('./rover')


describe('Mars rover', () => {
  it('should not move if it receives no commands', function () {
    const oldPosition = [0, 0];
    const newPosition = runCommands(oldPosition)('');
    expect(newPosition).to.eql(oldPosition);
  });
});
