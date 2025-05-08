const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [n,m]= input[0].trim().split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

let ans=0;
let sum1= arr.reduce( (a,b)=>a+b,0); //이거때문이였구나
//최소값이 전부 다 담길수 없는 값부터 시작해서, 음...
//근데 1부터 시작해도 되는거아닌가?
let left=Math.max(...arr);
let right=sum1;

while(left <= right){
    let mid = Math.floor((left+right)/2);
    
    if(checkmcnt(mid)){
        left = mid + 1;
        ans=mid;
    }
    else right = mid-1;
}
console.log(left);


function checkmcnt(mid){
    let cnt=0;
    let sum=0;
    for(let i=0;i<n;i++){

        if(mid >= sum + arr[i])sum += arr[i];
        else{
            cnt++;
            sum=arr[i];
        }
        //길이를 더 늘려야함
        if(cnt > m) return true;
    }
    cnt++; //계산후 남아있는 블루레이를 카운트 해줘야함
    if(cnt > m) return true;
    //길이를 더 줄일 수 있음
    return false;
}

//이문제는 음.... 이럴꺼면 블루레이의 개수가 최대 m개가 되는 크기의 최소값이 맞지않냐.....
//아쉬운문제