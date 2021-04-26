function numDecodings_better(s: string): number {
  let len = s.length;
  let l = 0;
  let r = 1;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    ans = 0;
    if (s[i] !== "0") {
      ans += r;
    }
    if (
      i > 0 &&
      s[i - 1] !== "0" &&
      parseInt(s[i - 1]) * 10 + parseInt(s[i]) <= 26
    ) {
      ans += l;
    }
    l = r;
    r = ans;
  }
  return ans;
}
