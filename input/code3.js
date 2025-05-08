// 3. 입력값이 여러 줄일 때

/* ex)
110
78
158
*/
const fs = require("fs");
const input = fs.readFileSync("./input3.txt").toString().trim().split("\n");

console.log(input); // [ '110\r', '78\r', '158' ] \r 이라는 캐리지리턴문자가 들어가서 길이를 차지한다 그래서 각각 trim으로 문자를 제거해주고 사용하는것이 좋다
console.log(input[0].length); //4 \r때문에 4로 측정된다.

let arr2 = [];
for (let i = 0; i < input.length; i++) {
  arr2[i] = +input[i].trim(); //이렇게 숫자로도 바꿀수 있다.
}
console.log(arr2); // 110 78 158
