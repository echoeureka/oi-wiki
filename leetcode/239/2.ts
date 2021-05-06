function splitString(s: string): boolean {
  return fs(s, [], 0);
}

function fs(s: string, arr: number[], index: number): boolean {
  if (index === s.length) return true;

  for (let i = index; i < s.length; i++) {
    let num = parseInt(s.substring(index, i + 1));
    if (arr.length === 0 || arr[arr.length - 1] === num + 1) {
      arr.push(num);
      return fs(s, arr, i);
      arr.pop();
    }
  }
  return false;
}
