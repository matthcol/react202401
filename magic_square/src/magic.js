export function initSquare(n) {
    return Array(n)
      .fill(0)
      .map(() => Array(n).fill(0));
  }
  
  export function initValues(maxValue) {
    return [...Array(maxValue).keys()].map((i) => i + 1);
  }
  