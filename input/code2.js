// 2. 입력값이 여러개일때(한 줄에 공백으로 구분)

// 5
// 110 78 158

const fs = require("fs");
var [n, input] = fs.readFileSync("./input2.txt").toString().trim().split("\n");
console.log(n + "3"); //3    -> trim()을 통해 공백을 없애지 않으면 이상한 값이 나올 수 있다!
console.log(n.trim() + "5"); //55
console.log(n + n); //5
console.log(+n.trim() + 1); // 6
console.log(input); // 110 78 158  -> 스트링 값이라서 split을 통해 배열로 만들어줘야함!

let arr = input.trim().split(" ");
console.log(arr); //[ '110', '78', '158' ]

/**
 * 문자열 배열 -> 숫자 배열
 */

let stringArrToNumber = input.trim().split(" ").map(Number);
console.log(stringArrToNumber);
