function reverse(x: number): number {
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    x = ~~(x / 10);
  }
  return ans < (-2) ** 31 || ans > 2 ** 31 - 1 ? 0 : ans;
}
