function countPoints(points: number[][], queries: number[][]): number[] {
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    let num = 0;
    for (let j = 0; j < points.length; j++) {
      if (computed(queries[i], points[j])) num++;
    }
    ans.push(num);
  }
  return ans;
}

function computed(circle: number[], point: number[]): boolean {
  let distance = 0;
  distance = Math.sqrt(
    Math.pow(circle[0] - point[0], 2) + Math.pow(circle[1] - point[1], 2)
  );
  return distance <= circle[2];
}
