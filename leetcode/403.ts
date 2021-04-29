function canCross(stones: number[]): boolean {
  const set = new Set<number>();
  return main(stones, 0, 0, set);
}

const main = (stones: number[], index: number, k: number, set: Set<number>) => {
  const key = index * 4000 + k;
  if (set.has(key)) return false;
  set.add(key);
  for (let i = index + 1; i < stones.length; i++) {
    let gap = stones[i] - stones[index];
    if (gap >= k - 1 && gap <= k + 1) {
      if (main(stones, i, gap, set)) return true;
    } else if (gap > k + 1) break;
  }
  return index === stones.length - 1;
};
