function getMaximumXor(nums: number[], maximumBit: number): number[] {
  let ans = [];
  let xor = [];
  xor.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    xor.push(xor[i - 1] ^ nums[i]);
  }
  let max_bit = (1 << maximumBit) - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans.push(xor[i] ^ max_bit);
  }
  return ans;
}
