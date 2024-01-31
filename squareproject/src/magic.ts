export function initSquare(n: number): number[][] {
    return Array(n)
      .fill(0)
      .map(() => Array(n).fill(0));
  }
  
export function initValues(maxValue: number): number[] {
return [...Array(maxValue).keys()].map((i) => i + 1);
}