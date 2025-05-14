/**
 * 중복순열
 */

let arr = [1, 2, 3, 4, 5];
let sel = new Array(2);
let visited = new Array(5).fill(false);
console.log("하이");
permutation(0);

function permutation(k) {
  if (k == sel.length) {
    console.log(sel);
    return;
  }

  for (let i = 0; i < 5; i++) {
    sel[k] = arr[i];
    permutation(k + 1);
  }
}
