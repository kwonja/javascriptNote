// 1. 입력값이 한개일때(한 줄)

const fs = require(`fs`);
let input = fs.readFileSync("./input1.txt").toString().trim();
console.log(input);
