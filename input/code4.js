/* 4. 배열 형태로 저장할때
3
110 78 158
110 78 158
110 78 158
110 78 158
*/
const fs = require("fs");
const input = fs.readFileSync("./input4.txt").toString().trim().split("\n"); //split으로 자를경우 CF를 trim으로 없애고 사용해야한다
console.log(input); // [ '3\r', '110 78 158\r', '110 78 158\r', '110 78 158\r', '110 78 158' ]

let n = input[0].trim();
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  let inputArr = input[i + 1].trim().split(" ");
  arr[i] = [];
  for (let j = 0; j < inputArr.length; j++) {
    arr[i][j] = inputArr[j];
  }
}

console.log(arr);
print();

function print() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/* 
[ '110', '78', '158' ]
[ '110', '78', '158' ]
[ '110', '78', '158' ]
*/
