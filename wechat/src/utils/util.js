export function getMax(array) {
  let max = 0
  let length = 0
  if (array !== undefined && array !== null && array.length > 0) {
    length = array.length
  }
  for (var i = 0; i < length; i++) {
    max =
      max === 0
        ? array[i]
        : parseInt(max) > parseInt(array[i])
          ? parseInt(max)
          : parseInt(array[i])
  }
  return max
}
