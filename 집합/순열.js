/**
 * 순열
 * 5p2
 * 순열의 경우는 앞에서부터 돌기 때문에 방문횟수가 필요하다!
 */

let arr = [1, 2, 3, 4, 5];
let sel = new Array(2);
let visited = new Array(5).fill(false);

permutation(0);

function permutation(k) {
  if (k == sel.length) {
    console.log(sel);
    return;
  }

  for (let i = 0; i < 5; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      sel[k] = arr[i];
      permutation(k + 1);
      visited[i] = false;
    }
  }
}
