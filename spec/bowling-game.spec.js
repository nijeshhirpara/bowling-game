const BowlingGame = require('../src/bowling-game');

describe('Bowling Game', () => {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('should score 0 for a gutter game', () => {
      for (let i = 0; i < 20; i++) {
          bowlingGame.roll(0)
      }
      expect(bowlingGame.score()).toEqual(0);
  })
})