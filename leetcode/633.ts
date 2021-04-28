function rudgeSquareSum(c: number): boolean {
  let l = 0,
    r = Math.floor(Math.sqrt(c));
  while (l <= r) {
    let total = l * l + r * r;
    if (total === c) return true;
    else if (total > c) r--;
    else l++;
  }
  return false;
}
