function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b)
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a)
  } else {
    blueShirtSpeeds.sort((a, b) => a - b)
  }

  let totalSpeed = 0
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
  }
  return totalSpeed
}

// 2, 3, 5, 5, 9
// 7, 6, 3, 2, 1

// 2, 3, 5, 5, 9
// 1, 2, 3, 6, 7

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle
