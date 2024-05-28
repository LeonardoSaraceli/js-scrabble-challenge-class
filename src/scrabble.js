class Scrabble {
  constructor(str) {
    this.str = str ? str.toLowerCase() : ''
  }

  score() {
    let total = 0

    const charCounts = {}

    const letters = {
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      l: 1,
      n: 1,
      r: 1,
      s: 1,
      t: 1,
      d: 2,
      g: 2,
      b: 3,
      c: 3,
      m: 3,
      p: 3,
      f: 4,
      h: 4,
      v: 4,
      w: 4,
      y: 4,
      k: 5,
      j: 8,
      x: 8,
      q: 10,
      z: 10
    }

    if (this.str === '') return total

    for (let i = 0; i < this.str.length; i++) {
      const char = this.str[i]

      if (char in letters) {
        if (!charCounts[char]) {
          charCounts[char] = 0
        }
        charCounts[char]++
      }
    }

    for (const char in charCounts) {
      total += letters[char] * charCounts[char]
    }
    return total
  }
}

module.exports = Scrabble
