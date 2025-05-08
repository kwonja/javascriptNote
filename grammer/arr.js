/**
 * 1차원 배열
 */

let arr = [1, 2, 3];

/**
 * 2차원 배열
 */

let arr2 = new Array(5);

for (let i = 0; i < 5; i++) {
  arr2[i] = new Array(5).fill(0);
}

/**
 * 3차원 배열
 */

// arr[2][3][5] 3*5 크기의 배열을 3차원으로 표시해보자!

let board = new Array(2);

let arr3 = new Array(3);
for (let i = 0; i < 3; i++) {
  arr3[i] = new Array(5).fill(1);
}

print(arr3);

board[0] = arr3;

arr3 = new Array(3);
for (let i = 0; i < 3; i++) {
  arr3[i] = new Array(5).fill(2);
}
board[1] = arr3;

print(board[0]);
print(board[1]);

function print(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
}
