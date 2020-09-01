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

  describe('with Spare', () => {
    var rollSpare;
  
    beforeEach(function() {
      rollSpare = () => {
        bowlingGame.roll(4);
        bowlingGame.roll(6);
      }
    });

    it('should score 20 for a spare', function() {
      rollSpare();
      bowlingGame.roll(5);
      bowlingGame.roll(0);
      gameRolls(16, 0);
      expect(bowlingGame.score()).toEqual(20);
    });

    it('should score 34 for two spares', function() {
      rollSpare();
      bowlingGame.roll(5);
      bowlingGame.roll(0);
      rollSpare();
      bowlingGame.roll(2);
      bowlingGame.roll(0);
      gameRolls(12, 0);
      expect(bowlingGame.score()).toEqual(34);
    });

    it('should score 28 for two consecutive spares', function() {
      rollSpare();
      rollSpare();
      bowlingGame.roll(2);
      bowlingGame.roll(0);
      gameRolls(14, 0);
      expect(bowlingGame.score()).toEqual(28);
    });
  });

  describe('with Strike', () => {
    var rollStrike;
  
    beforeEach(function() {
      rollStrike = () => {
        bowlingGame.roll(10);
      }
    });

    it('should score 28 for a strike', function() {
      rollStrike();
      bowlingGame.roll(5);
      bowlingGame.roll(4);
      gameRolls(17, 0);
      expect(bowlingGame.score()).toEqual(28);
    });

    it('should score 46 for two strikes', function() {
      rollStrike();
      bowlingGame.roll(5);
      bowlingGame.roll(4);
      rollStrike();
      bowlingGame.roll(2);
      bowlingGame.roll(2);
      gameRolls(14, 0);
      expect(bowlingGame.score()).toEqual(46);
    });

    it('should score 46 for two strikes', function() {
      rollStrike();
      rollStrike();
      bowlingGame.roll(2);
      bowlingGame.roll(2);
      gameRolls(16, 0);
      expect(bowlingGame.score()).toEqual(40);
    });
  });
  
})