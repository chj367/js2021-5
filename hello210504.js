/* <생성자 함수> 
function Fruit(name, price) {
	this.name = name;
	this.price = price;
}

let foo = new Fruit("바나나", 1000);  // 객체 생성한것을 foo에 저장.

console.log(foo);     // Fruit { name: '바나나', price: 1000 } 출력.
*/

/* <프로토타입을 사용한 메소드 생성> 
function Fruit(name, price) {
	this.name = name;
	this.price = price;
}

Fruit.prototype.print = function () {    // 프로토타입에 메소드를 선언.
	console.log(`${foo.name}의 가격은 ${foo.price}원입니다.`);
};

let foo = new Fruit("바나나", 1000);   

console.log(foo); 
*/

// ********************[7장. 표준 내장 객체]*************************

/*  <기본 자료형>
let foo = 200;    // 숫자 가능
let bar = "Hi";   // 문자열 가능 
let bol = true;   // Bool 가능

console.log(typeof foo); // number 출력
console.log(typeof bar); // string 출력
console.log(typeof bol); // boolean 출력
*/

/* <method 추가-이렇게 하면 ERROR> 
let foo = 50;

foo.method = function(){
    return "hello";
}

console.log(foo.method());
*/

/* <method 추가-프로토타입을 추가하면 정상> 
let foo = 50;
Number.prototype.method = function(){  // foo가 50 숫자여서 Number 추가    
                                       // (변수 타입을 추가해야함.)
    return "hello";
} 
console.log(foo.method());  // hello 출력.
*/

/* <method 추가-여러개도 가능> 
let foo = 50;
let bar = 50;
Number.prototype.method = function(){  
    return "hello";
} 
console.log(foo.method());   // hello 출력.
console.log(bar.method());   // hello 출력. 
                             // 이렇게 같은 Number가 여러개일경우에도 가능. 
*/

/* <Number객체의 메소드-toFixed()사용> 
let number = 200.5210332;

console.log(number.toFixed(1));  // 변수 number에 있는 값에서 소수점 1번째까지만 출력.
                                 // 200.5 출력.
console.log(number.toFixed(4));  // 소수점 4번째자리까지 출력.
                                 // 200.5210 출력. 
console.log(number.toFixed(10)); // 소수점 10번째자리까지 출력인데 넘어갈 경우.
                                 // 200.5210320000 출력. 
                                 // 빈 자리는 0으로 출력되는것을 확인가능!
*/

/* <생성자 함수에 속성과 메소드 추가>
function Constructor() { }          // 이렇게 생성자 함수 생성!
Constructor.foo = 273;              // 생성자함수에 속성 추가
Constructor.bar = function () { };  // 메소드 추가

console.log(Constructor.foo);      // 속성 출력. 273 출력됨.
console.log(Constructor.bar);      // 메소드 출력. [Function] 출력됨.
*/

/* <Number 생성자 함수의 속성-MAX_VALUE 사용>
let foo = Number.MAX_VALUE;    // Number객체의 MAX_VALUE속성 사용.
let bar = Number.MAX_VALUE+1;  // 최대숫자+1이면...

console.log(foo);  // 최대 숫자 출력됨.
console.log(bar);  // 똑같이 최대 숫자 출력됨.
                   // 자바스크립트에서는 숫자가 넘어가도 오류를 발생안하고, 
                   // 최대 숫자 그대로 표시해준다는 것을 알 수 있음!
*/

/* <잘못된 String 객체의 메소드 사용>
let foo = "abcdefg";

foo.toUpperCase(); // 모두 대문자로 변환.
console.log(foo);  // 근데 변환안되고 그대로 소문자 출력됨.
                   // 변환한것을 출력한게 아니라, 소문자인 원본을 출력했기때문.
                   // 따라서 변환한것을 출력할려면 다른곳에다가 저장을 해야함!
*/

/* <String 객체의 메소드 사용-정상 작동>
let foo = "abcdefg";
let bar = foo.toUpperCase();  // foo값을 대문자로 변환한것을 bar에 저장.

console.log(foo);  // abcdefg 출력. 원본 데이터.
console.log(bar);  // ABCDEFG 출력. 변환한 데이터.
*/

/* <String 객체의 메소드 사용-추가>
let foo = "abcdefg";
let bar = foo.toUpperCase();  // foo를 대문자로.
let foobar = bar.toLowerCase(); // bar를 소문자로.

console.log(foo);     // abcdefg 출력.
console.log(bar);     // ABCDEFG 출력.
console.log(foobar);  // abcdefg 출력. 
*/

/* <indexOf() 메소드 사용>
let foo = "안녕하세요.";

if(foo.indexOf("안녕") >= 0) {  // 안녕이라는 단어가 foo에 있는지 확인하고 있는경우.
                                // (문자열도 이렇게 비교연산자 사용해서 조건문 가능)
	console.log("반갑습니다.");   // foo에 "안녕"이 있으니 "반갑습니다."출력함!
}
else {                          // "안녕"이 foo에 없을 경우
	console.log("감사합니다.");   
}
*/

/* -The END- */