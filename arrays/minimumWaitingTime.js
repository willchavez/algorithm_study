function minimumWaitingTime(queries) {
  // sort
  queries.sort((a, b) => a - b)

  // keep track of total wait time
  let waitingTime = 0

  for (let i = 0; i < queries.length; i++) {
    // duration of current interval
    let duration = queries[i]

    // calculate the amount of times this interval will appear in the sum
    let queriesLeft = queries.length - (i + 1)

    // multiply the duration by the number of times this duration will be present in the sum
    waitingTime += duration * queriesLeft
  }
  return waitingTime
}
// [1, 2, 2, 3, 6]
// [0, 1, (1+2), (1+2+2), (1+2+2+3)]

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime
