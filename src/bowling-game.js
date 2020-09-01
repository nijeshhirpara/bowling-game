class BowlingGame {
  constructor() {
    this.rolls = []
  }

  // set pins for corresponding roll
  roll(pins) {
    this.rolls.push(pins)
  }

  // calculate score
  score() {
    let game = this;
    let score = 0;
    let currentRoll = 0;

    for(let frame = 0; frame < 10; frame++) {
      // check if it's a strike
      if(isStrike(currentRoll)) {
        // The scoring of a strike is the sum of the number of pins knocked down 
        // plus the number of pins knocked down in the next two bowls.
        score += 10 + this.getPins(currentRoll + 1) + this.getPins(currentRoll + 2);
        currentRoll++;
      }
      // check if it's a spare
      else if(isSpare(currentRoll)) {
        // The scoring of a spare is the sum of the number of pins knocked down 
        // plus the number of pins knocked down in the next bowl
        score += 10 + this.getPins(currentRoll + 2);
        currentRoll += 2;
      } else {
        // Simply add the score of two frames
        score += this.getPins(currentRoll) + this.getPins(currentRoll + 1);
        currentRoll += 2;
      }
    }

    return score;

    // If in 2 tries, the bowler knocks down all the pins, it is a spare
    function isSpare(rolIndex) {
      return game.rolls[rolIndex] + game.rolls[rolIndex + 1] === 10
    }

    // If in one try, the bowler knocks down all the pins, it is a strike. 
    function isStrike(rolIndex) {
      return game.rolls[rolIndex] === 10
    }
  }

  // get Roll pins at given index if any
  getPins(rolIndex) {
    return typeof this.rolls[rolIndex] !== 'undefined'? this.rolls[rolIndex] : 0;
  }
}

module.exports = BowlingGame