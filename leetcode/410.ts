function splitArray(nums: number[], m: number): number {
  let l = Math.max(...nums);
  let r = nums.reduce((a, b) => a + b);
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    let need = 1,
      cur = 0;
    for (const num of nums) {
      if (cur + num > mid) {
        need++;
        cur = 0;
      }
      cur += num;
    }
    if (need > m) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
