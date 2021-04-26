function numDecodings(s: string): number {
  let len = s.length;
  let dp = new Array(len + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= len; i++) {
    if (s[i - 1] !== "0") {
      dp[i] = dp[i - 1];
    }
    if (
      i > 1 &&
      s[i - 2] !== "0" &&
      parseInt(s[i - 2]) * 10 + parseInt(s[i - 1]) <= 26
    ) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[len];
}
