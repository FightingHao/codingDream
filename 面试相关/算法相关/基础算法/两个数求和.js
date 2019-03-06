function sum(a, b) {
  if (a === 0) return b
  if (b === 0) return a
  return (a ^ b) + ((a & b) << 1)
}

console.log(sum(1, 2));