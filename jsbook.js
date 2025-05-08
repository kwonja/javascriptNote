//node에서의 최대 최소
let mx = Infinity;
let mn = -Infinity;

//1차원 배열
let n = 10;
let arr = new Array(n).fill(0);
console.log(arr);

//2차원 배열
arr = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  arr[i] = new Array(n).fill(0);
}
console.log(arr);

//js prototype methods

//배열 맨 앞에 삽입
arr.unshift(3);

//배열 맨 앞에서 삭제 및 반환
arr.shift();

//배열 맨 뒤 삽입
arr.push(3);

//배열 맨 뒤 삭제 및 반환
arr.pop();

arr = [1, 2, 3, 4, 5, 3];
//배열의 특정 값의 index를 찾고 싶을때
arr.indexOf(3); //없으면 -1을 반환 ,찾는건 맨 앞에서 부터
arr.indexOf(3, -1); //음수를 사용하면 배열 뒤에서 부터 탐색
console.log(arr.indexOf(3, -1)); // index : 5
//배열의 중간에서 삽입과 삭제를 하고 싶을때

//slice와 splice의 차이점은 원본 배열에 영향을 주는 여부!
//slice : 원본 배열에 영향을 안줌
//splice : 원본 배열에 영향을 줌

//slice
const animals = ["ant", "bison", "camel", "duck", "elephant"];

//숫자 1개만 있으면 index 2부터 끝까지 가져와 배열로 반환
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

//slice(a,b) a 부터 b-1을 포함한 원소배열
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(2, 0));
// Expected output: Array []

//splice
//splice(a,b,[item...])
//a는 시작 인덱스 b는 제거할 index 개수, 그 뒤는 제거하고 나서 index a부터 추가할 item , 통해 여러개를 추가할 수 있도 있다
//2에 원소가 있다면? 해당 원소는 뒤로 밀린다.

//하나도 제거하지 않고, 2번 인덱스에 "drum"과 "guitar" 추가
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

//3번 인덱스에서 한 개 요소 제거
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

//2번 인덱스에서 한 개 요소 제거하고 "trumpet" 추가
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

//set, map
//set은 중복된수는 저장되지 않음
//꺼낼때 O(1)의 걸린다는 장점이 있음

//add : 값을 추가
//delete : 값을 제거
//has : 값이 있는지 확인
let set = new Set();
let set2 = new Set([1, 2, 3, 4, 5]); //이렇게 배열로 set을 세팅할 수도 있음
set.add(1);
set.add(2);
set.add(3);
set.add(1);

console.log(set.has(1)); //true boolean 형태로 반환
console.log(set.size); //3

for (let item of set) {
  console.log(item);
}

//map
// Map 생성
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

console.log(map); //Map(2) { 'name' => 'Alice', 'age' => 25 }

//set : key, value 형태로 값을 대입할 수 있음
//get : get(key) 형태로 value값을 가져올 수 있음

map.set("name", "New Alice");
console.log(map.get("name"));
console.log(map.get("name1")); //없는 값을 작성하면 undefined가 나옴

map.delete("name");
console.log(map.size);

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}
map.clear();

//구조 분해 할당
// [새로운 이름으로 할당하기]
var o = { p: 42, q: true };
var { p: foo, q: bar } = o;
console.log(foo);
// console.log(p); p는 사용이 불가능합니다
