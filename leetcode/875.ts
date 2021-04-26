function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (is_possible(piles, h, m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
}

function is_possible(piles: number[], h: number, k: number): boolean {
  let time = 0;
  for (const pile of piles) {
    time += Math.floor((pile - 1) / k) + 1;
  }
  return time <= h;
}
