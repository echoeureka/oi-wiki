function longestBeautifulSubstring(word: string): number {
  let reg = /a+e+i+o+u+/g;
  let arr = word.match(reg);
  if (arr === null) {
    return 0;
  }
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(ans, arr[i].length);
  }
  return ans;
}
