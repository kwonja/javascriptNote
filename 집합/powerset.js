/**
 * 5개의 배열에서 2개의 배열의 부분집합을 구하기
 */

let arr = [1, 2, 3];

for (let i = 0; i <= 3; i++) {
  let sel = new Array(i);
  comb(0, 0, sel);
}
function comb(idx, k, sel) {
  if (k === sel.length) {
    console.log(sel);
    return;
  }

  if (idx === arr.length) return;
  sel[k] = arr[idx];
  comb(idx + 1, k + 1, sel);
  comb(idx + 1, k, sel);
}
