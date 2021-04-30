function singleNumber(nums: number[]): number {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [num, cnt] of map.entries()) {
    if (cnt === 1) return num;
  }
}
