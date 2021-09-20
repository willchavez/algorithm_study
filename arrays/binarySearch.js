function binarySearch(array, target) {
  // Write your code here.
  let start = 0
  let end = array.length
  let found = -1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (array[middle] === target) {
      found = middle
      break
    }
    if (array[middle] < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  return found
}

// Do not edit the line below.
exports.binarySearch = binarySearch
