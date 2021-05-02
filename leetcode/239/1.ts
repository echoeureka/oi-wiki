function getMinDistance(nums: number[], target: number, start: number): number {
  let dis = 10000000;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      dis = Math.min(dis, Math.abs(i - start));
    }
  }
  return dis;
}
