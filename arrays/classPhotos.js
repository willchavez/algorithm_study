function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)

  let tallerGroup = redShirtHeights[0] > blueShirtHeights[0] ? 'red' : 'blue'

  let adheresToRule = true
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (tallerGroup === 'red' && redShirtHeights[i] <= blueShirtHeights[i]) {
      adheresToRule = false
      break
    }
    if (tallerGroup === 'blue' && blueShirtHeights[i] <= redShirtHeights[i]) {
      adheresToRule = false
      break
    }
  }
  return adheresToRule
}

// Do not edit the line below.
exports.classPhotos = classPhotos
