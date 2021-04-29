function rob(nums: number[]): number {
  let len = nums.length;
  if (len <= 2) return Math.max(...nums);
  let dp_1 = new Array(len).fill(0).map(() => new Array(2).fill(0));
  let dp_2 = new Array(len).fill(0).map(() => new Array(2).fill(0));
  dp_2[0][0] = 0;
  dp_2[0][1] = nums[0];
  for (let i = 1; i < len - 1; i++) {
    dp_1[i][0] = Math.max(dp_1[i - 1][0], dp_1[i - 1][1]);
    dp_1[i][1] = dp_1[i - 1][0] + nums[i];
    dp_2[i][0] = Math.max(dp_2[i - 1][0], dp_2[i - 1][1]);
    dp_2[i][1] = dp_2[i - 1][0] + nums[i];
  }
  dp_1[len - 1][0] = Math.max(dp_1[len - 2][0], dp_1[len - 2][1]);
  dp_1[len - 1][1] = dp_1[len - 2][0] + nums[len - 1];
  return Math.max(
    dp_1[len - 1][0],
    dp_1[len - 1][1],
    dp_2[len - 2][0],
    dp_2[len - 2][1]
  );
}
