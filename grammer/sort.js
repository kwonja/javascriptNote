/**
 * 숫자 배열 정렬
 */
const nums = [1, 3, 2, 5, 9, 7];

// 왼쪽, 오른쪽을 기준으로 양수면 자리를 바꿈
// 비교의 기준은 파라미터 기준!
// 오름차순
nums.sort(function (a, b) {
  return a - b;
});
console.log(nums);

// 내림차순
nums.sort(function (a, b) {
  return b - a;
});
console.log(nums);

/**
 * 문자열 배열 정렬
 */

const names = ["banana", "apple", "cherry"];
names.sort(); // ["apple", "banana", "cherry"]
console.log(names);

names.sort().reverse();
console.log(names);

/**
 * 3. 객체 배열 정렬
 */

//Q1. 객체 배열에서 나이를 오름차순으로 정렬!
const users = [
  { name: "Kim", age: 30 },
  { name: "Lee", age: 25 },
  { name: "Park", age: 40 },
  { name: "Gark", age: 40 },
  { name: "Zark", age: 25 },
];

users.sort(function (a, b) {
  return a.age - b.age;
});

console.log(users);
/**
 * 
 [
  { name: 'Lee', age: 25 },
  { name: 'Kim', age: 30 },
  { name: 'Park', age: 40 }
]
 */

// 정렬이 2가지 조건일때
users.sort(function (a, b) {
  if (a.age !== b.age) return a.age - b.age; // 이름 오름차순
  return a.name.localeCompare(b.name); //이름 오름차순
});

// a.name.localeCompare(b.name);
// 왼쪽이 오른쪽보다 크면 양수

console.log(users);
