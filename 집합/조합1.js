/**
 * 전체집합[1,2,3,4,5]
 * 5C2
 */

let arr = [1, 2, 3, 4, 5];
let sel = new Array(2);

comb(0, 0);

function comb(index, k) {
  if (k == sel.length) {
    console.log(sel);
    return;
  }
  if (index >= arr.length) return;
  sel[k] = arr[index];
  comb(index + 1, k + 1);
  comb(index + 1, k);
}
