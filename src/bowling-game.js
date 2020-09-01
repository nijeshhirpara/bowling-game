class BowlingGame {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    return 0
  }
}

module.exports = BowlingGame