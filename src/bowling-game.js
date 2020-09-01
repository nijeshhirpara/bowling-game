class BowlingGame {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    let score = 0;
    this.rolls.forEach(pins => {
      score += pins;
    })
    return score;
  }
}

module.exports = BowlingGame