let date = new Date();   // date 객체를 생성하고
h = date.getHours();     // 객체의 getHours함수를 사용.

// 불(Bool)과 논리연산자
console.log("h < 3 || h > 8");
console.log("h >= 3 && h <= 8");

// 자료형 
let type = typeof(date);
console.log(type);

const con1 = "상수선언";
console.log(con1);

// 조건문 if - 홀짝
let input = 32;

if(input%2==0){
    console.log("짝수!");
}
    console.log("홀수!");


// 조건문 if - 오전,오후
if(date.getHours() < 12){
    console.log("오전!");
}
console.log("오후!");

if(date.getHours() < 12){
    console.log("오전!"); }
else console.log("오후!");


// Date()
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());