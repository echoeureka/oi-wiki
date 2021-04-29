function maxProfit(prices: number[]): number {
  let len = prices.length;
  let dp = new Array(len + 1).fill(0).map(() => new Array(3).fill(0));
  dp[0][1] = -prices[0];
  for (let i = 1; i <= len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i - 1]);
    dp[i][2] = dp[i - 1][1] + prices[i - 1];
  }
  return Math.max(...dp[len]);
}
