const BowlingGame = require('../src/bowling-game');

describe('Bowling Game', () => {
  var bowlingGame, gameRolls;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
    gameRolls = (rolls, pins) => {
      for (let i = 0; i < rolls; i++) {
        bowlingGame.roll(pins);
      }
    };
  });

  it('should score 0 for a gutter game', () => {
    gameRolls(20, 0);
    expect(bowlingGame.score()).toEqual(0);
  })

  it('should score 20 for all ones', () => {
    gameRolls(20, 1);
    expect(bowlingGame.score()).toEqual(20);
  })

  it('should score 30 for 10 ones and 10 two pins', () => {
    gameRolls(10, 1);
    gameRolls(10, 2);
    expect(bowlingGame.score()).toEqual(30);
  })
})