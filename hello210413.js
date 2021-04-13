/* <익명함수> 
let foo = function () {        // 익명함수를 foo 변수에 넣음.
    console.log("첫번줄");
    console.log("두번째 줄");
};

foo();             // foo 호출
console.log(foo);  // console창에서 foo 출력
*/

/*  <선언적 함수> 
function foo() {             // 함수 이름이 foo
    console.log("첫번줄");
    console.log("두번째 줄");
};

foo();                      // 함수 foo를 호출
console.log(foo);  
*/

/*  <화살표 함수>   
let foo = () => {             // 익명함수이니까 변수 foo에 넣음.
    console.log("첫번줄");
    console.log("두번째 줄");
};

foo();            
console.log(foo);  
*/

/* <함수의 기본 형태1-계산식을 return하는 방식>
function power(x) {
    return x * x;
}
console.log(power(10));

 <함수의 기본 형태2-계산식을 변수에 넣고 변수를 return하는 방식>
function foo(x){
    let bar = x * x;
    return bar;
}
let foobar = foo(10);
console.log(foobar);    // 형태1보단 이렇게 코딩하는게 더 보기 좋음.
*/

/* <함수의 기본 형태3-매개변수가 여러개인 함수>
function foo(a, b) {        // 매개변수가 2개인 경우
	let bar = a + b;
	return bar;
}
let foobar = foo(10, 20);   // 받는값도 2개여야 한다!
console.log(foobar);
*/

/* <함수의 기본 형태4-리턴없는 함수>
function print(message){
    console.log(`${message}라고 말했습니다.`);    // backtick(`)+($)+{}를 쓰면 괄호안에 변수내용이 들어감.  
}                                                  
print("안녕하세요.");  // "안녕하세요"는 message에 들어감. 매개변수.
*/

/* <함수 매개변수 초기화1-초기화 필요한 이유> 
function print(name, count){
    console.log(`${name}이/가 ${count}개 있습니다.`);    
}
print("사과",10);   // "사과"는 name에, 10은 count에 들어감.
print("사과");      // "사과"는 name에 들어가는데, count에 들어갈 값이 없기때문에 undefined가 뜸! 그래서 초기화를 시켜줘야함.
*/

/* <함수 매개변수 초기화2-조건문으로 매개변수 초기화하기1> 
function print(name, count){
    if(!count){
        count = "입력하시오!!";
    }   
    console.log(`${name}이/가 ${count}개 있습니다.`);    
}
print("사과",10);   // "사과"는 name에, 10은 count에 들어감.
print("사과");      // "사과"는 name에, count에 들어갈 값은 위에서 초기화한 값인 "입력하시오!!"가 들어감.
*/

/* <함수 매개변수 초기화3-조건문으로 초기화하기2-디폴트 매개변수> 
function print(name="무명", count=1){
    console.log(`${name}이/가 ${count}개 있습니다.`);    
}
print("사과",10);   // "사과"는 name에, 10은 count에 들어감.
print("사과");      // "사과"는 name에, count는 넣을 값이 없기때문에 초기화한 값 1이 들어감.
print();            // name과 count에 넣을 값이 없기때문에 초기화한 값 "무명"과 1이 들어감.   
*/

/* <콜백함수> 
function tenTimes(foo) {      // 매개변수에다가 foo를 넣음.     
    for(let i=0; i<10; i++){
        foo();                // 매개변수로 전달한 foo를 호출
    }
}  

tenTimes( function ()  {        // 익명함수.
    console.log("함수 호출");
});            

tenTimes( () => {               // 화살표 함수로도 사용 가능. 
    console.log("함수 호출");
});  
*/

/* <표준 내장 함수-숫자변환>  
let inputA = '52';
let inputB = '52.273';
let inputC = '1403동';

console.log(parseInt(inputA));      // 52
console.log(parseFloat(inputA));    // 52
 
console.log(parseInt(inputB));      // 52 
console.log(parseFloat(inputB));    // 52.273 (소수점까지 나옴)
 
console.log(parseInt(inputC));      // 1403 (숫자만 나옴)

console.log(Number(inputA));       // 52     (정수로 나옴)
console.log(Number(inputB));       // 52.273 (실수로 나옴) 
console.log(Number(inputC));       // NaN (문자열이 섞여있는 숫자는 출력못함) 
*/

/* <표준 내장 함수-타이머함수> 
setTimeout( () => {                // 이런곳처럼 1회성일때 익명함수 쓰는게 좋음. 
    console.log("1초 경과!!!");     // 여기는 함수.
}, 1000)                           // 여기는 시간. 1000밀리초=1초

setInterval( () => {                        // setInterval은 특정시간마다여서 무한작동함.
    console.log("Interval 1초 경과!!!");     //  1초마다 출력.
}, 1000)   
*/

/*  The End  */