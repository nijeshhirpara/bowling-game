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
    let roll_1_index = 0;
    let roll_2_index = 1;

    for(let frame = 0; frame < 10; frame++) {
      roll_1_index = frame * 2;
      roll_2_index = frame * 2 + 1;

      // check if it's a spare
      if(isSpare(roll_1_index)) {
        // The scoring of a spare is the sum of the number of pins knocked down 
        // plus the number of pins knocked down in the next bowl
        score += 10 + this.rolls[roll_2_index + 1];
      } else {
        // Simply add the score of two frames
        score += this.rolls[roll_1_index] + this.rolls[roll_2_index];
      }
    }

    return score;

    // If in 2 tries, the bowler knocks down all the pins, it is a spare
    function isSpare(rolIndex) {
      return game.rolls[rolIndex] + game.rolls[rolIndex + 1] === 10
    }
  }
}

module.exports = BowlingGame