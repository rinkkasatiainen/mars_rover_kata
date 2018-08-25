const {expect} = require("chai")
const runCommands = require('./rover')


describe('Mars rover', () => {
  it('should not move if it receives no commands', function () {
    const mission = [0, 0];
    const newPosition = runCommands(mission);
    expect(newPosition).to.eql([0, 0]);
  });

  it('should go forward by one', () => {
    const mission = [0, 0, 'f'];
    const newPosition = runCommands(mission);
    expect(newPosition).to.eql([0, 1]);
  })
});
