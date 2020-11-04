var myPow = function (x, n) {
  let product = 1
  let tmp = x
  while (n) {
    if (n & (2 === 1)) {
      product *= x
    }
    if (n === 1) {
      product *= tmp
      break
    }
    tmp *= tmp
    n = n >> 2
  }
  return n < 0 ? 1 / product : product
}

myPow(2, 10)
