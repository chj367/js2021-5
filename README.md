# 조항재 [201840229]
***
## [03월30일]
### 오늘 배운 내용 요약
> 1. 조건문(중첩, switch, 삼항연산자, 입력받기)
> 2. 반복문(배열, while, for, for in 와 for of)

- 입력이나 삭제 한꺼번에 하기 : Ctrl+Shift+Alt 누른상태로 방향키 위,아래로 움직이면 커서가 위,아래로 늘어남. <br>
그래서 커서 범위에 따라 여러줄 삭제, 입력가능 + ESC키 누르면 원래상태로 돌아옴.

### [3장. 조건문]
#### <3. 중첩 조건문>
- 중첩 조건문 : if문 안에 if-else문 있는 조건문.
```jsx
// 중첩조건문 예제
let date = new Date();
let hours = date.getHours();

if(hours < 11) {
    console.log("아침입니다."); }
else {
    if(hours < 15) {
       console.log("점심입니다."); }
    else {
       console.log("저녁입니다."); }
}
```

- 논리연산자를 이용한 조건문 
```jsx
else if(4.2 <= score && score < 4.5)
```

#### <4. switch 조건문>
- case 값에 따라 문장이 실행.
- break를 통해 밖으로 나옴.
```jsx
// Switch문 예제1
let input = 30;

switch(input % 2) {
	case 0:
		console.log("짝수입니다.");
		break;
	case 1:
		console.log("홀수입니다.");
		break;
}
```

```jsx
// Switch문 예제2
let date = new Date();    // 지금 시스템 날짜를 갖고와서 3월인데

console.log(date.getMonth());  // 2가 나오는이유는 0부터 시작한다는 뜻

switch(date.getMonth()+1){   // 그래서 +1을 해줘서 3으로 맞추기.
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
}
```

#### <5. 삼항 연산자>
- 삼항 연산자 기본 형태)  <조건> ? <참일때 실행> : <거짓일때 실행> 
```jsx
// 삼항연산자 예제
let number = 30;

console.log(number % 2 == 0 ? "짝수" : "홀수");  // 나머지가 0이므로 짝수가 출력.
```

#### <6. 입력받기>
- 자바스크립트에서 입력받을때는 prompt() 함수 사용함.
```jsx
// 입력받기 예제
const repl = require('repl');

repl.start({
    prompt: "숫자 입력해주세요> ",        // 여기는 출력화면에 뜨는곳 + 콤마를 찍기
    eval: (command, context, filename, callback) => {      // 화살표 함수
        let number = Number(command);
        if(isNaN(number)) {         // NaN : Not a Number(숫자형이 아니다)
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자입니다.");
        }

        callback();      // 계속 입력하게 만들기.(Ctrl+D 누르기전엔 무한반복)
    }
})
```

### [4장. 반복문]
```jsx
// 반복문 예시
for(let i=0; i<1000; i++){
	console.log("출력");
}
```
- 위의 예제에서 실행 순서는 ① let i = 0; →  ② i < 1000; → ③ console.log("출력") → ④ i++; → ⑤i< 1000; →  ⑥ console.log("출력)"  →  ⑦ i++  → ...이렇게 반복함.

#### <1. 배열>
 - C언어 경우는 자료형+크기 다 지정해야함 : ex) int a[10];  // 정수형 + 크기 10인 배열 a
 - js는 크기를 미리 정하지 않고, 자료형도 선언하지 않음.
 - 기본 형태) let 이름 = [자료, 자료, 자료, 자료, 자료]
    - 대괄호로 값을 넣음. 자료값은 자료형을 아무거나해도 상관X.
```jsx
// 배열선언 예시
let box = ["안녕", "Hello", 1234, 3.141592, true, false]
```
  
- 배열의 .length 속성 : 배열의 길이를 알려줌.
  - 위의 예시를 사용하면 console.log(box.length);를 하면 6이 출력됨.

#### <2. while 반복문>
```jsx
// while 반복문 예제
let i = 0;
let box = [30, 200, 150, 50, 10];

while(i < box.length){              // i가 box.length인 5미만까지는 계속 반복.
	console.log(i + "번째 출력: " + box[i]);
  i++;       
}
```

- 반복의 횟수가 결정되어있지 않을때는 while문, 결정되어있으면 for문 사용.

#### <3. for 반복문>
```jsx
// for 반복문 예제
let output = 0;

for(let i=0; i<=100; i++){   // i가 0부터 100까지 계속 반복.
	output = output + i;       // output 변수에다가 계속 i를 더해줌. 
}
```

#### <4. for in 반복문과 for of 반복문>
 - for in 반복문 기본형태 :  for (let 인덱스 in 배열) {  }  &nbsp; // 인덱스값이 필요할때 사용
 - for of 반복문 기본형태 :  for (let 요소 of 배열) {  }    &nbsp; // 배열의 값을 추출할때 사용

```jsx
// for in 반복문과 for of 반복문 예제
let box = [10, 20, 30, 40, 50];

for(let i in box){
	console.log(`${i}번째 요소: ${box[i]}`);  // 0~4번째 요소 : 10~50 순서대로 출력.
}    

for(let item of box){
    console.log(item);   // 10~50이 순서대로 출력.
}
```

***
## [03월23일]
### 오늘 배운 내용 요약
> 1. 연산자, 문자열, 불, 변수와 상수
> 2. 자료형
> 3. 조건문

### [2장.자바스크립트 기본]
#### <연산자> 
- 기본 연산자 : +(덧셈), -(뺄셈), *(곱셈), /(나눗셈), %(나머지)
  - 나머지 연산자의 부호는 왼쪽 피연산자의 부호를 따라감.
- 복합 대입 연산자 : +=(덧셈 후 대입), -=(뺄셈 후 대입), *=(곱셈 후 대입), /=(나눗셈 후 대입), %=(나머지 대입)   
- 증감 연산자 : 변수++, ++변수, 변수--, -- 변수
- 일치 연산자 : 자료형과 값이 같은지(===), 다른지(!==) 비교(비교 연산자와 달리 자료형까지 확인함)
    
#### <문자열>
- ""(큰 따옴표), ''(작은 따옴표) 둘 중 하나 선택해서 사용가능.
- 이스케이프 문자 :  \t(수평탭), \n(줄바꿈), \'(작은따옴표), \"(큰따옴표), \\(역슬래시) 등. 
- 문자열 합치기 : + 사용
- 문자열[숫자] : 배열. 인덱스는 0부터 시작.
- 템플릿 문자열 : Tab키 위에 있음. 템플릿 문자열은 생성할 때 내부에 ${ 표현식 }을 사용해서 바로 결과값을 같이 출력 가능.
   - ex) `23+58 = ${23+58}` 를 하면 '23+58=83'가 출력.
       
#### <불(Bool)>
- 참 또는 거짓 >> True(1), False(0)
-  비교연산자 : ==(같다), !=(다르다), >, <, >=, <= 
-  논리연산자 : ! (not, 논리 부정 연산자), || (or, 논리합 연산자), && (and, 논리곱 연산자)
   - 논리합(or) : 하나라도 true면 전체가 true, 모두다 false이면 전체가 false.
   - 논리곱(and) : 모두다 true이면 전체가 true, 하나라도 false있으면 전체가 false.

#### <기타>  
- 변수 선언할때는 let 키워드 사용!
   - 참고) 예전 자바스크립트 코드보면 var이라고 되어있는데 이것은 let과 동일. 
   - 참고) 자바스크립트는 C, C++, 자바등과 다르게 변수에 자료형을 지정하지 않는다. 그래서 동일한 변수에도 여러 종류의 자료형을 넣을 수 있다.
  
- 상수(Constant)는 항상 같은 수이므로, 값을 바꿀수 없음. + 상수 선언할때는 const 키워드 사용!  
     
#### <자료형>
- 자바스크립트의 6가지 자료형 : 문자열(string), 숫자(number), 불(bool), 함수(function), 객체(object), undefined
  - undefined  자료형 : 변수를 선언했으나 초기화하지 않은 자료형.

- typeof : 해당 변수의 자료형 추출. 

- 강제 자료형 변환
  - Number() : 숫자로 자료형 변환. / String() : 문자열로 자료형 변환. / Boolean() : 불로 자료형 변환.
  - 숫자로 변환할 수 없는 문자열을 Number()로 변환하면 NaN이라고 출력되는데 NaN(Not a Number)은 숫자 자료형이지만 숫자가 아니라는 뜻을 의미함.
  - NaN은 표현 불가능한 수치형 결과를 나타내는 값, 자기 자신과 일치하지 않는 유일한 값이다.
  - Boolean()함수를 사용할때 0, NaN, "", null, undefined는 false가 나옴. 나머지는 모두 true.
  
- 자동 자료형 변환 
  - 숫자와 문자열에 +를 붙이면 숫자가 문자열로 자동변환함.
  - 불 자료형 자동변환 : ! 연산자를 두번 사용하면 Boolean()함수를 사용하는 것과 똑같음

### [3장. 조건문]
- if 조건문과 if-else 조건문 

***
## [03월16일]
### 오늘 배운 내용 요약 
>1. 자바스크립트로 할 수 있는 일
>2. VS코드와 GitHub 사용 및 동기화 방법
>3. js파일과 html파일 생성
>4. 자바스크립트 기본 용어

#### <자바스크립트로 할 수 있는 일>
  - 웹 클라이언트 애플리케이션 개발
  - 웹 서버 개발 : Node.js
  - 모바일 애플리케이션 개발 : 네이티브 애플리케이션, React Native
  - 데스크톱 애플리케이션 : 일렉트론 모듈
  - 게임 개발 : 유니티(Unity)
  - 데이터베이스 관리 : SQL 프로그래밍 언어

#### <VS코드와 GitHub사용 및 동기화 방법>
- 폴더를 새로 만들고, VS코드에서 3번째 아이콘-Initialize Repository누르면 새로 생성완료.
- README.md에 매주 배운 내용 정리하기
- 내용 입력 후 상단 Message부분에 수정한 내용 간단하고 작성하기
- +를 누르면 Stage로 가고, V를 누르면 Commit한다.
- 하단 구름모양 누르고 상단에 public/private 선택하면 GitHub와 동기화 완료
- gitHub에서 Repository 삭제 방법 : Home에서 삭제할 Repository 클릭하고 Settings 맨 밑에 가면 삭제 가능
- VS코드에서 3줄로 작성했는데, GitHub에서 1줄로 보이는 경우 "br"로 강제 엔터키 적용하게 하기.
- 설치한 Markdown Preview Enhanced 할려면, 상단 우측 1번째 클릭하면 오른쪽 화면에 내가 작성한 내용 확인 가능

#### <js파일과 html파일 생성>
- Terminal 단축키 : Ctrl + `
- Terminal에서 node hello.js 입력하면 hello.js에서 입력했던 내용이 밑에 출력
- node만 입력하면 >로 바뀌는데 여기서 간단한 입력하면 바로 밑에 결과 출력. 원래대로 되돌리고 싶으면 Ctrl + D
- html파일에서 html:5를 입력하면 html의 기본 코드 자동 생성.
- alert("Hello World"); 로 입력하면 웹 브라우저에서 팝업창으로 출력
- <script src="hello.js"></script> 입력하면 hello.js를 불러옴

#### <자바스크립트 기본 용어>
- 표현식, 문장, 프로그램, 키워드
- 식별자 : 키워드X, 특수문자는 _와 $만 허용, 숫자로 시작X, 공백X
  - 생성자 함수의 이름은 항상 대문자로 시작
  - 변수, 함수, 속성, 메소드의 이름은 항상 소문자로 시작
  - 여러 단어로 된 식별자는 각 단어의 첫글자를 대문자로 함 : Camel 표기법
- 주석 : // 또는 /* */ 사용
- 출력 메소드 : console.log("   ");
- 숫자 : 사칙연산(+, -, *, /) 와 나머지(%)

### [공지사항]
★최신 입력 날짜가 항상 위에 있어야함!





