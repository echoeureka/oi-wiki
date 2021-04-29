function wiggleMaxLength(nums: number[]): number {
  let len = nums.length;
  if (len === 1 || (len === 2 && nums[0] !== nums[1])) return len;
  let dp = new Array(len).fill(0).map(() => new Array(2).fill(0));
  dp[0] = [1, 1];
  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] > 0) dp[i][0] = dp[i - 1][1] + 1;
    else dp[i][0] = dp[i - 1][0];
    if (nums[i] - nums[i - 1] < 0) dp[i][1] = dp[i - 1][0] + 1;
    else dp[i][1] = dp[i - 1][1];
  }
  return Math.max(...dp[len - 1]);
}
