// game.js assesment

function scoreGame(frames) {
  let totalScore = 0;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const isStrike = frame[0] === 10;
    const isSpare = frame[0] + frame[1] === 10;

    if (isStrike) {
      totalScore += 10;
      if (frames[i + 1] && frames[i + 1][0] === 10) {
        totalScore += frames[i + 1][0];
        if (frames[i + 2]) {
          totalScore += frames[i + 2][0];
        }
      } else if (frames[i + 1]) {
        totalScore += frames[i + 1][0] + (frames[i + 1][1] || 0);
      }
    } else if (isSpare) {
      totalScore += 10 + (frames[i + 1] ? frames[i + 1][0] : 0);
    } else {
      totalScore += frame[0] + frame[1];
    }
  }

  return totalScore;
}

// Test cases
const frames1 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
];
const frames2 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
];
const frames3 = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
];

console.log("Score for frames1:", scoreGame(frames1)); // Output: 123
console.log("Score for frames2:", scoreGame(frames2)); // Output: 141
console.log("Score for frames3:", scoreGame(frames3)); // Output: 300

