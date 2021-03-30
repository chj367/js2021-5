/*  <Switch문 사용1>
let input = 32;

switch(input % 2){
    case 0:
        console.log("짝수!");
        break;
    case 1:
        console.log("홀수!");
        break;

} */


/*  <Switch문 사용2>
let date = new Date();  // 지금 날짜를 갖고와서 3월인데

console.log(date.getMonth());  // 2가 나오는이유는 0부터 시작한다는 뜻

switch(date.getMonth()+1){   // 그래서 +1을 해줌.
    case 12:
    case 1:
    case 2:
        console.log("겨울입니다.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("봄입니다.");
         break;
    case 6:
    case 7:
    case 8:
        console.log("여름입니다.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("가울입니다.");
        break;
    default:
        console.log("다시 입력해주세요.");
        break;                

} */


/* <삼항연산자 예제1>
let number = 30;
console.log(number % 2 == 0 ? "짝수" : "홀수"); */


/* <삼항연산자 예제2>
let test;

test = test ? test : "초기화 해주세요.";
console.log(test);

number = number ? number : "초기화 해주세요.";
console.log(number);  */


/* <짧은 초기화 조건문>
test = test || "초기화 해주세요.";
console.log(test);

number = number || "초기화 해주세요.";
console.log(number);  */


/* < 입력받기>
const repl = require('repl');

repl.start({
    prompt: "숫자 입력해주세요> ",    // 여기는 출력화면에 뜨는것 + 콤마를 찍기
    eval: (command, context, filename, callback) => { // 화살표 함수
        let number = Number(command);
        if(isNaN(number)) {    // isNaN : 숫자가 아니다. Not a Number
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자입니다.");
        }

        callback();      // 계속 입력하게 만들기.(Ctrl+D 누르기전엔 무한반복)
    }
}) */