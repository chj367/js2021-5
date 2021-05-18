# 조항재 [201840229]
***
## [05월18일]
### 오늘 배운 내용 요약
> 1. process 객체
> 2. os 모듈과 url 모듈
> 3. File System 모듈(읽기, 쓰기, 예외처리)
> 4. npm이용해서 설치-request, cheerio, async 모듈

### [9장. Node.js 기본]
#### <1.전역변수>
```jsx
console.log(__filename); // 현재 코드의 파일 경로 출력.
console.log(__dirname);  // 현재 코드의 폴더 경로 출력.
```

#### <2. process 객체의 속성과 이벤트>
- process 객체: 프로세스 정보를 제공하며, 제어할 수 있게 하는 객체.
- process 객체의 속성
  - env: 컴퓨터 환경 정보를 나타냄.
  - version: Node.js 버전을 나타냄.
  - versions: Node.js와 종속된 프로그램 버전을 나타냄.
  - arch: 프로세서의 아키텍처를 나타냄.
  - platform: 플랫폼을 나타냄.

- process 객체의 메소드
  - exit([exitCode=0]): 프로그램 종료.
  - memoryUsage(): 메모리 사용 정보 객체를 리턴.
  - uptime(): 현재 프로그램이 실행된 시간을 리턴.

#### <3. process 객체와 이벤트 개요>
- Node.js의 이벤트 연결 메소드: on( 이벤트 이름, 이벤트 핸들러 )

- process 객체의 이벤트
  - exit: 프로세스가 종료될 때 발생
  - uncaughtException: 예외가 일어날 때 발생.

- Node.js사이트에서 process 객체관련 정보: https://nodejs.org/dist/latest-v16.x/docs/api/process.html

- process 객체 예시
```jsx
// exit 이벤트를 연결
process.on('exit', () => {
   console.log("프로세스가 종료되었습니다.");
});
    // 'exit'는 이벤트 이름. ()부터 }까지는 이벤트 핸들러.
    // ()에 매개변수를 넣어서 사용가능! 
    // 만약 ()에 code 집어넣고, console.log(code);하면 0이 출력되면 정상종료. 1이 출력되면 비정상종료.

// uncaughtException 이벤트를 연결.
process.on('uncaughtException', () => {
   console.log("예외가 발생했습니다.");
});
    // ()에 error 집어넣고, console.log(error); 하면 Error 내용이 출력됨.

// 예외를 강제로 발생시킴.
error.error.error();
```

#### <4. os 모듈>
- process했을때는 그냥 바로 써도 가능했는데, os 모듈 할때는 객체를 생성하고 사용해야됨.

- os모듈의 메소드
  - hostname(): 운영체제의 호스트이름을 리턴
  - type(): 운영체제의 이름을 리턴
  - platform(): 운영체제의 플랫폼을 리턴.
  - arch(): 운영체제의 아키텍처를 리턴.
  - release(): 운영체제의 버전을 리턴.
  - uptime(): 운영체제가 실행된 시간을 리턴
  - loadavg(): 로드 에버리지 정보를 담은 배열을 리턴
  - totalmem(): 시스템의 총 메모리를 리턴.
  - freemem(): 시스템의 사용 가능한 메모리를 리턴.
  - cpus(): CPU의 정보를 담은 객체를 리턴.
  - getNetworkInterfaces(): 네트워크 인터페이스의 정보를 담은 배열을 리턴.

- os 모듈 예시
```jsx
const os = require("os");   // new키워드 없이 객체 생성.
  // const 키워드로 함. (상수)
  // 모듈이름이 os이면, 객체 이름을 os로 해야함!
  // os말고 다른 이름 사용해도 상관없음. 근데 대부분 os같은 잘 쓰는 이름으로 쓰는게 좋음!
  // require 키워드를 사용해서 os모듈을 가져옴.

console.log(os.hostname()); // 현재 컴퓨터의 호스트 이름이 출력됨.
```

#### <5. url 모듈>
- url 모듈의 메소드
  - parse( urlStr ): URL 문자열을 URL 객체로 변환해 리턴
  - format(urlObj): URL 객체를 URL 문자열로 변환해 리턴
  - resolve(from, to): 매개변수를 조합하여 완전한 URL 문자열을 생성해 리턴.

- url 모듈 예시
```jsx
const url = require("url");  // 객체 생성
  // 이것도 url말고 다른이름 사용해도 가능. 근데 웬만하면 url로 쓰는게 좋음.
 
console.log(foo.parse("https://naver.com"));
  // JSON 형태로 프로토콜, 호스트, 포트 등 해당 URL 관련 정보가 출력됨.
```

#### <6. File System 모듈>
- Node에 저장되어 있는 모듈이고, 보통 fs로 줄여서 사용함.

- 파일 읽기 메소드
  - fs.readFileSync(파일 이름): 동기적으로 파일을 읽어들임.
  - fs.readFile(파일 이름, 콜백 함수): 비동기적으로 파일을 읽어들임.

- 파일을 동기적으로 읽기 예시
```jsx
const fs = require("fs");     // 객체 생성
const file = fs.readFileSync("test.txt");  
  // 일단 하기전에 test.txt를 만들어서 내용을 작성했음.
  // "test.txt"파일을 읽어서 file에 집어넣음.

console.log(file);            // Buffer에 해당 내용이 16진수로 출력.
console.log(file.toString()); // toString()메소드를 이용해서 문자열로 변환시켜서 출력. 

console.log(fs.readFileSync("test.txt").toString());  // 위의 코드들을 이렇게 한줄로 줄여서 사용가능.
```

- 파일을 비동기적으로 읽기 예시
```jsx
const fs = require("fs");  // 객체 생성

fs.readFile("test.txt", (error, file) => {
   console.log(file);
   console.log(file.toString());
});
  // "test.txt"는 파일 이름. (error 부터 } 는 콜백 함수
  // 첫번째 매개변수는 보통 오류인 error, 두번째는 원하는 변수를 넣음.
  // test.txt를 읽어들여서 매개변수인 file에 집어넣는 방식.
  // 출력 내용은 동기식과 똑같음.
```

- 만약 파일이 엄청 무거우면... 
  - 동기식은 파일이 다 다운받아질때까지 계속 기다림. 밑의 코드는 작동안함. 프로그램이 정지됨.
  - 비동기식은 파일 다운받는건 따로 작동하고, 다운받는거랑 상관없는 밑의 코드는 작동함. 빠르고 효율적임.
  - 그래서 현재 웬만한 웹사이트는 비동기식으로 되어있음.

- 여러 파일 동기적으로 읽기 예시
```jsx
const fs = require("fs");   // 객체 생성

const a = readFileSync("a.txt");  // a.txt 읽어와서 a에 저장.
const b = readFileSync("b.txt");  // b.txt 읽어와서 b에 저장.
const c = readFileSync("c.txt");  // c.txt 읽어와서 c에 저장.

console.log(a, b, c);   // 출력.

 // a읽어오고, b읽어오고, c읽어오는거 다 따로 순차적으로 하기 때문에 시간이 비동기적으로 읽어오는것보다 오래 걸림.
```

- 파일 쓰기 메소드: 파일 읽을때보다 매개변수가 1개 증가함.
  - fs.writeFileSync(파일 이름, 문자열): 동기적으로 파일 씀.
  - fs.writeFile(파일 이름, 문자열, 콜백 함수): 비동기적으로 파일 씀.

- 동기적으로 파일 쓰기 예시
```jsx
const fs = require("fs");   // 객체 생성

fs.writeFileSync("test.txt", "안녕하세요!!"); // test.txt 파일에 안녕하세요!!가 쓰여짐.
console.log("쓰기 완료");   

// 쓰기도 읽기처럼 내용이 많으면 순차적으로 진행되기 때문에 오래걸림.
```

- 비동기적으로 파일 쓰기 예시
```jsx
const fs = require("fs");  // 객체 생성

fs.writeFile("test.txt", "잘자!", (error) => {  // test.txt 파일에 잘자!가 쓰여짐.
   console.log("쓰기 완료!");
});
```

- 파일 처리와 예외 처리
  - 동기 코드 예외처리: try catch 구문
  - 비동기 코드 예외처리: 콜백함수의 첫번째 매개변수 error를 활용

- 동기 코드 예외처리 예시
```jsx
const fs = require("fs");          // 객체 생성

try{
   const file = fs.readFileSync("none.txt");
   console.log(file);             
   console.log(file.toString()); 
} catch(exception) {               // 예외가 발생했을때
   console.log("문제 발생");
   console.log(exception);         // 오류메시지 출력
}
```

- 비동기 코드 예외처리 예시
```jsx
const fs = require("fs");             // 객체 생성

fs.readFile("none.txt", (error, file) => {
   if(error) {                        // 에러 발생했을때
   	console.log("문제 발생!"); 
	console.log(error);           // 에러 출력
   } else {                           // 정상 실행될때
	console.log(file);            // 파일 내용을 16진수로 출력 
	console.log(file.toString()); // 문자열로 출력
   }
}
```

#### <7. 노드 패키지 매니저>
- 새로 모듈 설치하면 해당 폴더에 엄청 많은 파일이 생성되는데 이것을 github에 push하면 엄청 오래 걸리기 때문에...
  - .gitignore파일에다가 push 하지않을 파일+폴더이름 작성해서 push하는것을 막기!
  - .gitignore 코드 만들어주는 사이트: https://www.toptal.com/developers/gitignore
  - .gitignore에서 주석처리는 # 사용.

- Node.js는 npm(Node.js Package Manager) 패키지 매니저 사용.

- npm을 이용한 외부 모듈 설치
```jsx
> npm install 모듈이름@버젼  // 원하는 버젼으로 설치 가능.
```

#### <8. request 모듈>
- request 모듈: 해당 url에 있는 내용들을 전부 갖고와줌.

- request 모듈 설치
```jsx
> npm install request

 // 설치하면 많은 파일들이 설치되는데 github에 올리기엔 너무 크기 때문에
 // .gitingnore파일에서 /node_modules 작성해서 push를 막고, package*.json 작성해서 해당 파일도 push를 막았음.
```

- request 모듈 예시
```jsx
const request = require("request");  // 객체 생성

const url = "https://naver.com";
request(url, (error, response, body) => {
   console.log(body);
});
    // request로 받은 값을 body에 저장해서 출력.
    // url에 있는 html내용들을 다 갖고와서 출력하는 것임.
```

#### <9. cheerio 모듈>
- request 모듈로 가져온 웹페이지는 단순한 HTML 문자열 전부.
- cheerio 모듈은 가져온 웹 페이지의 특정 위치를 지정해서 해당 부분만 추출할 수 있음.

- cheerio 모듈 설치
```jsx
> npm install cheerio

// 이미 위에서 node 모듈폴더는 .gitignore로 했기때문에 또 작성할 필요 없음.
```

- cheerio 모듈 예시
```jsx
const request = require("request");  // 객체 생성
const cheerio = require("cheerio");  // 객체 생성

const url = "https://naver.com";

request(url, (error, response, body) => {
   const $ = cheerio.load(body);
   console.log($("strong.new").text());
});
   // request한 값을 body에 저장.
   // body에 있는 값을 cheerio의 메소드인 load()로 $에 저장.
   // $는 변수라고 생각하면됨.

   // 해당 사이트 들어가서 원하는 곳의 html태그+아이디이름을 확인해서 
   // $안에 있는 "strong.new"의 내용 중 text(텍스트)만 추출해서 출력.
```

#### <10. async 모듈>
- 비동기 처리를 많이하면 콜백 지옥(콜백 함수를 여러개 들여쓰기하여 코드를 보기 힘든 상태)이 발생함.
- 콜백 지옥을 해결할 수 있는것이 parallel() 메소드 사용.

***
## [05월11일]
### 오늘 배운 내용 요약
> 1. Date 객체
> 2. Array 객체
> 3. underscorejs 라이브러리와 JSON 객체
> 4. 예외 처리(예외, try-catch-finally, throw 강제)

### [7장. 표준 내장 객체]
#### <4. Date 객체>
- new Date(): 현재 시간으로 Date 객체를 생성.
```jsx
// Date 객체 생성 예시-현재 시간
let foo = new Date();   // Date 객체 생성해서 foo에다가 넣음.
console.log(foo);       // 현재 시간 출력.
```

- new Date(유닉스 타임): 유닉스타임(1970-1-1 00:00:00부터 경과한 밀리초)으로 Date 객체를 생성.
```jsx
// Date 객체 생성 예시-유닉스타임
let foo = new Date(160000000000);   // 괄호안에 유닉스타임을 넣었더니
console.log(foo);                   // 넣은 유닉스타임에 맞는 시간 출력.
```
    *현재 유닉스타임 볼수있는 사이트: https://www.unixtimestamp.com/

- new Date(시간 문자열): 문자열로 Date 객체를 생성.
```jsx
// Date 객체 생성 예시-문자열
let foo = new Date("Dec 9, 2020 14:00:00");  // 괄호안에 시간을 문자열로 넣었더니
console.log(foo);                            // 넣은 값에 맞는 시간 출력.
```

- new Date(년, 월-1, 일, 시간, 분, 초, 밀리초): 시간 요소를 기반으로 Date 객체를 생성.
```jsx
// Date 객체 생성 예시-시간요소 
let foo = new Date(2021, 6-1, 11, 14, 30, 0);   // 괄호안에 시간 요소를 넣었더니
console.log(foo);                               // 넣은 값에 맞는 시간 출력.
```

- Month를 나타내는 월은 0부터 시작하니 주의!

- 메소드 활용: get OO () 메소드, set OO () 메소드를 가짐.
  - 다른 프로그래밍 언어처럼 get은 가져오는 내용, set 메소드는 설정할 내용을 작성하면 됨
  - OO에는 FullYear, Month, Day, Hours, Minutes, Seconds 등 들어감.
  - OO에 대한 자세한 내용은 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
 
- 메소드 예시1: 시간 더하기
```jsx
// 시간 더하기 예시
let foo = new Date();   
console.log(foo);     // 현재 시간 출력.   

foo.setFullYear(foo.getFullYear()+1);   // 현재시간에서 년+1
foo.setMonth(foo.getMonth()+1);         // 현재시간에서 월+1
foo.setDate(foo.getDate()+1);           // 현재시간에서 일+1

console.log(foo);    // 더한 시간 출력.
```

- 메소드 예시2: 시간 간격 구하기
```jsx
// 시간 간격 구하기 예시
let now = new Date();                    // 현재 시간
let before = new Date('Dec 9, 2020');   // 괄호에 특정 날짜를 작성.
                                        // December의 약어 Dec 사용 가능!

let interval = now.getTime() - before.getTime();   // now의 시간-before의 시간 차이를 interval에 저장.
interval = Math.floor(interval / (1000*60*60*24)); // 시간차이가 ms라서 계산을 해서 Day로 변환했음.

console.log(interval);     // 출력.
```

#### <5. Array 객체>
- Array 객체의 메소드
  - concat(): 매개 변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴.
  - join(): 배열 안의 모든 요소를 문자열로 만들어 리턴.
  - pop(): 배열의 마지막 요소를 제거하고 리턴. 원본 변형!
  - push(): 배열의 마지막 부분에 새로운 요소를 추가. 원본 변형!
  - reverse(): 배열의 요소 순서를 뒤집음. 원본 변형!
  - slice(): 배열 요소의 지정한 부분을 리턴.
  - sort(): 배열의 요소를 정렬. 원본 변형!
  - splice(): 배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴. 원본 변형!
```jsx
// 배열-json 기본 형태
let foo = [
	{ },         // 괄호 안에는 key: value가 들어감.
  { },
	{ }          // 마지막은 콤마(,) 생략
];
```

```jsx
// pop()과 push() 메소드 예시
let foo = [
    {
    // key: value,
        name: '고구마',
        price: 1000
    },
    {
        name: '감자',
        price: 500
    },
    {
        name: '바나나',
        price: 1500
    }
];

let popped = foo.pop();   // foo에 있는값중 마지막 1개를 추출해서 popped에 저장(스택의 pop)
console.log(popped);      // "바나나" 출력.
console.log(foo);         // 원본 출력했는데 원래 있었던 "바나나" 사라짐!
console.log();            // 이렇게 빈칸을 출력하면 한칸 띄워줌.

foo.push(popped);     // "바나나"를 popped에 다시 추가(스택의 push)
foo.push(             // "사과", "수박" 내용을 추가.
    {                  
        name: '사과',
        price: 2000
    },
    {
        name: "수박",
        price: 3000
    }
);
console.log(foo);     // '바나나', "사과", "수박"이 들어있는 상태 출력.
```

- ECMAScript5에서 추가된 Array 객체의 메소드
  - forEach(): 배열의 요소를 하나씩 뽑아 반복을 돌림.
  - map(): 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 만듦. React할때 많이 사용함!
  - filter(): 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴.
```jsx
// forEach(), map(), filter() 메소드 예시
let foo = [53, 72, 300, 145, 28];

console.log("======<forEach() 사용>======");
foo.forEach((item, index) => {    // foo에 있는 값을 1개씩 추출. item은 값, index는 인덱스.
    console.log(`${index}번째 요소는 ${item}입니다.`);   // 1개씩 출력 반복.
});
  // forEach()는 index, item 둘다 갖고올수있음.

console.log();
console.log("=======<map() 사용>=======");
let bar = foo.map((item, index) => {
    return item + 10;  // foo의 item값을 10더해서 bar에 저장.
});
console.log(bar);      // bar 출력.
  // map()은 item을 추출해서 다른 배열에 저장해줌.
  // forEach()는 index, item 둘다 사용한다면, map()은 item만 갖고 사용함.

console.log();
console.log("======<filter() 사용>======");
let foobar = foo.filter((item, index) => {
    return item % 2 == 0;  // 짝수만 return해서 foobar에 저장.
});
console.log(foobar);       // foobar 출력.
  // map()은 그냥 해당 값을 리턴해주는 메소드라면,
  // filter()는 조건을 넣어서 맞는 값만 리턴해주는 메소드.
```

#### <6. 조금 더 나아가기>
- 프로토타입에 메소드 추가하면 해당 자료형 전체에 추가 가능
- 익명함수와 화살표함수에서 this 의미 차이점: 익명함수에서 this는 자기 자신을 나타내지만, 화살표함수에서 this는 최상위 객체를 의미.
- underscore.js 라이브러리
  - 설치해서 사용하거나, 링크 연결해서 사용할 수 있음!
  - 사이트: https://underscorejs.org/
  - 다운받을때 ESM과 UMD중, UMD 사용!
    - Development는 주석도 되어있어서 코드 수정 가능한 파일.
    - Production는 주석 없이 한줄로 크드 쭉 있는 것. 용량을 줄이기 위해 압축시켜 놓은 파일. 우리는 이거 사용!

  - sortBy() 이용해서 정렬했음.
```jsx
// _.sortBy() 기본 형태
_.sortBy(foo, (item) => item.price); 
     // _는 underscorejs에서 갖고온 코드를 연결해서 사용하고 있기 때문에 
     // 그것을 갖다 쓸려면 _를 앞에 붙이면 됨. underscore라고 말함.

     // foo는 배열 이름. item은 foo에 있는 값. item.price는 item의 price를 가리킴. 
     
     // 예제7-9는 복잡했는데, 이렇게 underscorejs(외부 라이브러리)를 사용하면 간단하게 할 수 있음!
```
 
- JSON 객체: 자바스크립트 객체를 사용한 데이터 표현 방법
  - 문자열은 큰 따옴표로 만듦.
  - 모든 키는 큰 따옴표로 감싸야 함.
  - 숫자, 문자, 불 자료형만 사용할 수 있음.
  - 메소드
    - JSON.stringify(객체, 변환함수, 공백 개수): 자바스크립트 객체를 문자로 만들어줌.
    - JSON.parse(문자열): 문자열을 자바스크립트 객체로 만들어줌(파싱해줌) 
```jsx
// stringify() 메소드 예시
let foo = [
{
	name: "A군",
	region: "서울"

}, 
{
	name: "B군",
	region: "안양"
}];

let barA = JSON.stringify(foo);
console.log(barA);   // 문자열이라 한줄로 쭉 출력됨.
                     // 문자열이라 다 큰따옴표로 되어있음.

let barB = JSON.stringify(foo, null, 2);
                     // 변환함수는 거의 사용 안해서 null 입력함.
                     // 2는 스페이스(공백) 개수. 2칸 띄워짐.
console.log(barB);   // 공백 2개 때문에 JSON형태처럼 괄호가 띄워져 있음.
```

- 참고) 코드 작성하고나서 따옴표 넣고싶을때, shift+방향키로 선택을 하고 따옴표 누르면 적용됨.

### [8장. 예외 처리]
#### <1. 예외와 기본 예외 처리>
- 오류: 오류와 의미 모두 포함. 프로그램을 실행하기 전에 발생하는 문법적 오류. 코드 실행하기 전에 발생하므로 예외 처리 방법으로 처리 불가능.
- 예외: 프로그램을 실행하면서 발생하는 논리적 오류. 예외 처리 방법으로 처리 가능.
- 예외 예시
```jsx
// 예외 예시
function callThreeTimes(callback) {
	for (let i=0; i<3; i++) {
		callback();
	} 
}

callThreeTimes(function () { console.log("안녕하세요"); });
      // 익명함수를 사용해서 callback()함수를 선언했기 때문에 내용 정상 출력.

callThreeTimes();
     // callback()함수를 호출하는데 함수를 선언했던 내용이 없기 때문에 예외 발생.
```

- if~else문을 사용해서 예외 처리 (혹시 내용이 있는지 없는지 확인하는 용도)
```jsx
// if문으로 예외처리 예시
function callTenTimes(callback) {
	if(callback) {
		for(let i=0; i<10; i++) {
			callback();
		}
	} else {
			console.log("매개변수 callback이 지정되지 않았습니다.");
	}
}

// 정상 실행
callTenTimes(function () { console.log("안녕하세요"); });  

// 예외 발생
callTenTimes(); 
```

- try-catch-finally 구문 기본형태
```jsx
try {
		// 예외가 발생하면 작동하는 코드
} catch(exception) {
		// 예외가 발생하면 처리하는 코드
} finally {
		// 무조건 실행하는 코드
}
```

#### <2. 고급 예외 처리>
- try-catch-finally구문으로 예외처리하기
```jsx
Array(100)  // 이러면 배열을 100개 만든다는 뜻.
Array(-2000) // 배열을 -2000개 만든다는 뜻인데 말이 안되기 때문에 오류 발생(RangeError)

// try~catch~finally 구문으로 예외처리 예시
try {
		let foo = new Array(-2000);
} catch(exception) {  
		console.log(`${exception.name} 예외가 발생했습니다.`);
} finally {
		console.log("finally 구문이 실행되었습니다.");
}
```

- finally 구문 사용 유무
  - 진행도중 return문을 만나면 break문처럼 바로 종료함. 뒤의 내용은 작동 안함.
  - 그래서 값을 return해주고 난 다음에 다른 작업을 해야 할 경우, finally 구문에다가 작성하면 작업 가능! 
```jsx
// finally 구문 없을때
function test() {
	try {
			let foo = new Array(-2000);
	} catch(exception) {
			console.log(`${exception.name} 예외가 발생했습니다.`);
			return;                                // 밑의 내용 출력 없이 test() 함수 종료
			console.log("함수가 종료되었습니다.");  // 출력X
  }
}
test();    // test()함수 호출.

// finally 구문 있을때
function test() {
	try {
			let foo = new Array(-2000);
	} catch(exception) {
			console.log(`${exception.name} 예외가 발생했습니다.`);
			return;                                
  } finally {
			console.log("함수가 종료되었습니다.");   // 무조건 출력.
	}
}
test();    // test()함수 호출.
```

#### <3. 예외 객체>
- 예외 객체에는 name 속성(예외 이름)과 message 속성(예외 내용)이 있음.
- exception을 e로 줄여서 사용 가능!

#### <4. 예외 강제 발생>
- throw 키워드: 강제로 예외를 발생시킬때 사용하는 키워드. 예외 사항을 테스트해보고 싶을때나 오류 메시지를 만들고 싶을때 사용하면 좋음.
```jsx
// throw키워드 이용한 예외 강제 발생
const foo = new Error("메시지");
foo.name = "오류 제목입니다";         // 작성한 이 내용으로 오류 출력됨.
foo.message = "오류 메시지입니다.";   // 작성한 이 내용으로 오류 출력됨.

throw foo;      // throw 키워드 이용해서 강제로 예외 발생.
```

***
## [05월04일]
### 오늘 배운 내용 요약
> 1. 생성자 함수와 프로토타입
> 2. 기본자료형과 객체자료형
> 3. Number 객체(+메소드, 속성)
> 4. String 객체(+메소드, 속성)

### [6장. 객체]
#### <4. 생성자 함수와 프로토타입>
- 생성자 함수(Constructor): 객체를 만드는 함수.
  - 함수니까 function 키워드를 사용.
  - 일반함수와 구분하기 위해 이름을 대문자로 시작해서 사용.
  - 자바처럼 new 키워드를 함께 사용해서 객체를 생성.
```jsx
// 생성자 함수 예시
function Fruit(name, price) {
	this.name = name;
	this.price = price;
}

let foo = new Fruit("바나나", 1000);   // 객체 생성한것을 foo에 저장.

console.log(foo);  // Fruit { name: '바나나', price: 1000 } 출력.
```

- 프로토타입(Prototype)
  - 생성자 함수로 만든 객체는 프로토타입 공간에 메소드를 지정해서 모든 객체가 공유 하도록 만들수있음.
  - 프로토타입은 모든 함수가 가지고 있는 속성으로 해당 함수를 생성자 함수로 사용했을때만 의미가 있음.
```jsx
// 프로토타입을 사용한 메소드 생성 예시
function Fruit(name, price) {
	this.name = name;
	this.price = price;
}

Fruit.prototype.print = function () {    // 프로토타입에 메소드를 선언.
	console.log(`${foo.name}의 가격은 ${foo.price}원입니다.`);
};

let foo = new Fruit("바나나", 1000);   

console.log(foo);  // 위의 예시랑 똑같이 출력됨.
```

- 자바스크립트는 "프로토타입 기반의 객체지향 언어"여서 너무 자유로워 개발하기 힘들어서 가독성이 떨어진 문제점이 있었음.
- 그래서 ECMAScript6부터는 클래스 기능을 추가해서 자바처럼 "클래스 기반의 객체지향 프로그래밍 언어"로도 사용 가능하게 되었음.

#### <5. 조금 더 나아가기>
- 0, ""(빈 문자열), null은 똑같아보이지만, 다 다른 것임!
  - 0, NaN, "", undefined는 false로 변환될뿐이지 실제로는 값이 들어있는 것이라면,
  - null은 값이 아예 없는 상태를 말함. 공백 그 자체.

### [7장. 표준 내장 객체]
- 표준 내장 객체관련 정보(MDN 사이트-모질라) : [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects)
  - 이 사이트도 w3schools처럼 공부할수있는 + 코드들 다 정리되어있는 사이트.

#### <1. 기본 자료형과 객체 자료형의 차이>
- 기본자료형: 숫자, 문자열, Bool
  - typeof를 써서 출력하면 해당 변수의 자료형이 나옴.
```jsx
// 기본자료형 예시
let foo = 200;    // 숫자 가능
let bar = "Hi";   // 문자열 가능 
let bol = true;   // Bool 가능

console.log(typeof foo); // number 출력
console.log(typeof bar); // string 출력
console.log(typeof bol); // boolean 출력
```

- 객체 자료형: new 키워드를 사용해서 객체를 생성.
```jsx
// 객체자료형 예시
let number = new Number(273);  

console.log(typeof number);  // object 출력
```

- 자바스크립트는 다른 언어와 다르게 메소드를 추가할 수도 있다.
```jsx
// 이렇게 method를 추가하면 ERROR!
let foo = 50;

foo.method = function(){
    return "hello";
}

console.log(foo.method());  
```

```jsx
// 이렇게 프로토타입을 추가해야 정상작동!
let foo = 50;

Number.prototype.method = function(){  // foo가 50 숫자여서 Number 추가!
    return "hello";                    // (변수 타입을 추가해야함.)
} 

console.log(foo.method());  // hello 출력.
```

```jsx
// 여러개도 가능!
let foo = 50;
let bar = 50;

Number.prototype.method = function(){  
    return "hello";
} 

console.log(foo.method());   // hello 출력.
console.log(bar.method());   // hello 출력. 
                             // 이렇게 같은 Number가 여러개일경우에도 가능.
```

#### <2. Number 객체>
- Number 객체 생성 방법 2가지.
```jsx
let foo = 200;              // 이렇게 그냥 넣어줘도 되고.
let bar = new Number(200);  // new 키워드 사용해서 객체생성해도 되고.
```

- Number 객체의 메소드
  - toExponential(): 숫자를 지수 표시로 나타낸 문자열을 리턴.
  - toFixed(): 숫자를 고정소수점 표시로 나타낸 문자열을 리턴.
  - toPrecision(): 숫자 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴.
```jsx
// Number객체의 메소드-toFixed() 사용 예시
let number = 200.521032;

console.log(number.toFixed(1)); // number에 있는 값에서 소수점 1번째까지만 출력.
                                 // 200.5 출력.
console.log(number.toFixed(4));  // 소수점 4번째까지 출력.
                                 // 200.5210 출력. 
console.log(number.toFixed(10)); // 소수점 10번째자리까지 출력인데 넘어감!
                                 // 200.5210320000 출력. 
                                 // 빈 자리는 0으로 출력되는것을 확인가능! 
```

- 생성자 함수에 속성과 메소드 추가
```jsx
// 생성자 함수에 속성과 메소드 추가 
function Constructor() { }         // 이렇게 생성자 함수 생성!
Constructor.foo = 273;             // 생성자함수에 속성 추가
Constructor.bar = function() { };  // 메소드 추가

console.log(Constructor.foo);     // 속성 출력. 273 출력됨.
console.log(constructor.bar);     // 메소드 출력. [Function] 출력됨.
```
 - 이렇게 생성자 함수에 속성이나 메소드 추가할 수 있음!

- Number 생성자 함수의 속성
  - MAX_VALUE: 자바스크립트의 숫자가 나타낼 수 있는 최대 숫자
  - MIN_VALUE: 자바스크립트의 숫자가 나타낼 수 있는 최소 숫자
  - NaN: 숫자로 나타낼 수 없는 숫자
  - POSITIVE_INFINITY: 양의 무한대 숫자
```jsx
// Number 생성자 함수의 속성-MAX_VALUE 사용 예시
let foo = Number.MAX_VALUE;    // Number객체의 MAX_VALUE속성 사용.
let bar = Number.MAX_VALUE+1;  // 최대숫자+1이면...

console.log(foo);  // 최대 숫자 출력됨.
console.log(bar);  // 똑같이 최대 숫자 출력됨.
                   // 자바스크립트에서는 숫자가 넘어가도 오류를 발생안하고, 
                   // 최대 숫자 그대로 표시해준다는 것을 알 수 있음!
```

#### <3. String 객체>
- String 객체 생성 방법 2가지.
```jsx
let foo = "안녕하세요";              // 이렇게 그냥 넣어줘도 되고.
let bar = new String("안녕하세요");  // new 키워드 사용해서 객체생성해도 되고.
```

- String 객체의 속성 : length  >> 문자열의 길이를 나타냄.
- String 객체의 메소드: 엄청 많으니 책이나 사이트 참고!
```jsx
// 잘못된 String 객체의 메소드 사용
let foo = "abcdefg";

foo.toUpperCase(); // 모두 대문자로 변환.
console.log(foo);  // 근데 변환안되고 그대로 소문자 출력됨.
                   // 변환한것을 출력한게 아니라, 소문자인 원본을 출력했기때문.
                   // 따라서 변환한것을 출력할려면 다른곳에다가 저장을 해야함!
```

```jsx
// String 객체의 메소드 사용-정상 작동
let foo = "abcdefg";
let bar = foo.toUpperCase();  // foo값을 대문자로 변환한것을 bar에 저장.

console.log(foo);  // abcdefg 출력. 원본 데이터.
console.log(bar);  // ABCDEFG 출력. 변환한 데이터.
```

```jsx
// String 객체의 메소드 사용-추가
let foo = "abcdefg";
let bar = foo.toUpperCase();    // foo를 대문자로.
let foobar = bar.toLowerCase(); // bar를 소문자로.

console.log(foo);     // abcdefg 출력.
console.log(bar);     // ABCDEFG 출력.
console.log(foobar);  // abcdefg 출력. 
```

 - 이것을 통해 String객체의 메소드는 원본 데이터를 변경하는 것이 아니라 변경된 값을 리턴하는 것을 알수있다!

- 메소드 활용
   - indexOf() 메소드: 문자열 내부에 특정 문자열이 있는지 확인해줌.
```jsx
// indexOf() 메소드 사용 예시
let foo = "안녕하세요.";

if(foo.indexOf("안녕") >= 0) {  // 안녕이라는 단어가 foo에 있는지 확인하고 있는경우.
                                // (문자열도 이렇게 비교연산자 사용해서 조건문 가능)
	console.log("반갑습니다.");   // foo에 "안녕"이 있으니 "반갑습니다."출력함!
}
else {                          // "안녕"이 foo에 없을 경우
	console.log("감사합니다.");   
}
```

***
## [04월27일]
### 오늘 배운 내용 요약
> 1. 타이머함수-clearInterval() 함수
> 2. 변수, 함수(익명과 선언적 함수) 덮어씌우기
> 3. 객체-배열, JSON, 반복문
> 4. 객체-속성과 메소드, 생성자 함수와 프로토타입

### [5장. 함수]
#### <6. 표준 내장 함수>
- clearInterval() 함수 : setInterval()함수 무한반복되는것을 막을 수 있음.
```jsx
// clearInterval() 함수 예시
let foo = setInterval( () => {                             
    console.log("Interval 1초 경과!!!");     
}, 1000)                      // 1초에 한번씩 실행됨. 계속 반복.

setTimeout( () => {               
    clearInterval(foo);      // clearInterval()를 써서 반복을 멈출수있음.
}, 6000)                     // 6초전인 5초까지 총 5번 출력됨.
```

#### <7. 조금 더 나아가기>
- 같은 변수에 여러값을 넣으면 가장 마지막인 값이 덮어씌워져서 그 값이 출력됨.
```jsx
// 변수 덮어씌우기
let foo;
foo = 10;
foo = 20;
foo = "세번째";
console.log(foo);   // 맨 마지막에 나온 세번째가 출력됨.
```

```jsx
// 함수 덮어씌우기
let foo;
foo = () => { console.log("lst"); }    
foo = () => { console.log("2nd"); }
foo = () => { console.log("3rd"); }

foo();     // 변수처럼 함수도 맨 마지막에 있는 3rd가 출력됨.
```
- 자바스크립트는 변수나 함수나 같이 취급하기 때문에 같은 결과 나옴.

- 익명함수와 선언적함수가 같은 이름일때 익명함수가 맨 마지막으로 덮어씌워져서 익명함수가 출력된다.
```jsx
// 익명함수와 선언적함수 덮어씌우기
foo = () => { console.log("lst"); }  
function foo() { console.log("2nd"); };

foo();   // 익명함수인 1st가 출력됨.
```
- 하지만 이렇게 이름을 중복해서 사용하지는 말자!

### [6장. 객체]
#### <1. 객체 기본>
- 배열: 대괄호 안에 값을 넣어서 저장할 수 있음.
```jsx
// 배열 사용 예시
let foo = ["사과", "배", "바나나", "딸기"];

console.log(foo[0]);  // "사과"가 출력됨. 0은 인덱스번호.
```

- JSON(JavaScript Object Notation) : 자바스크립트의 객체를 표시하는 방법.
 - 중괄호 안에 키: 키값을 넣어서 객체를 선언함. 콜론(:)을 사용함.
 - 여기서 키는 배열에 있는 인덱스같은 개념.
   - 그래서 값을 불러올때 키를 작성하면 키값을 불러올 수 있음.
 - 웬만하면 키 이름은 한글말고 영어로 쓰는것이 좋음.
 - 자바스크립트말고 다른 언어에서도 많이 사용 가능.
 - JSON 없었을땐 CSV를 사용했음. CSV는 키 값만 나열한 방식.
```jsx
// 배열-JSON 사용 예시
let foo = {                   // JSON으로 넣은 값들을 foo에 집어넣음.
	제품명: "건조 망고",   // 키: 키값 
  유형: "당절임",
  원산지: "필리핀",
  price: 1200                 // 숫자도 집어넣을 수 있다.
};

console.log(foo);             // foo에 집어넣은 값들 모두 출력.
console.log(foo.유형);        // 유형의 값인 '당절임'이 출력.
console.log(foo.price);       // price의 값인 1200이 출력.
```

#### <2. 객체와 반복문>
- 반복문 사용해서 배열안에 있는 내용들을 출력할 수 있다.
```jsx
// 위의 예시 이어서 + 반복문 사용해서 출력
for(let key in foo){
    console.log(`${key}: ${foo[key]}`);
}
```

#### <3. 속성과 메소드>
- 요소(element): 배열 내부에 있는 값 하나하나를 가리킴. 값만.
- 속성(property): 객체 내부에 있는 값 하나하나를 가리킴. 키+키값.

- 자바스크립트에서의 배열, JSON에 둘다 어떤 자료형이든, 함수를 넣어도 다 적용됨.

- 메소드(method): 객체의 속성 중 자료형이 함수인 속성을 가리킴.
```jsx
// 속성과 메소드 예시
let foo = {                   
    name: "건조 망고", 
    price: 1200,
    print: function () {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
};

foo.print();   // "건조 망고의 가격은 1200원 입니다."가 출력.
```

- JSON 안에서 화살표 함수를 쓰면 undefined가 나온다. 사용 불가. 그래서 반드시 function 키워드를 이용해야 한다.

- C++, C#, Java에서는 this 키워드를 생략할 수 있는데, 자바스크립트에서는 this 키워드를 사용하지 않으면 오류가 발생한다. 반드시 사용하자.

#### <4. 생성자함수와 프로토타입>
- 배열을 이용해서 JSON 여러개를 집어넣을 수 있음.
```jsx
// 배열 이용해서 JSON 여러개 집어넣기
let product = [                    // product에다가 JSON으로 여러개 집어 넣음.
    {name: '사과', price: 1200},
    {name: '배', price: 1500},
    {name: '자두', price: 1000},
    {name: '딸기', price: 2000},
    {name: '바나나', price: 1500}
];

function printProduct(bar){       // product의 값을 집어넣은 foo를 받아온 것을 다시 bar 집어넣었음.
    console.log(`${bar.name}은 ${bar.price}원 입니다.`);
}

for (let foo of product) {        // 앞에는 아무거나. 뒤에는 위의 product객체 작성.
    printProduct(foo);            // foo를 1개씩 집어넣어서 출력하는 함수 반복 호출.
}
```

- 생성자(Constructor): 객체지향 프로그래밍에서 제일 먼저 호출되서, 객체의 초기화를 담당하는 곳. 
- 생성자 함수 
 - 일반함수와 구분하기 위해 대문자로 시작하는 이름을 사용.
 - 자바처럼 new 키워드를 함께 사용해서 객체를 생성함.
```jsx
// 생성자 함수 사용 예시
function Product(foo, bar){     // 생성자 함수 사용. 인자 이름은 아무거나 사용 가능.
    this.foo1 = foo;            // foo1와 bar1은 그냥 키 이름. 아무거나 사용 가능. 
    this.bar1 = bar;            // foo와 bar는 밑에서 받은 값을 각각 집어넣음.  
}

let product = new Product("바나나", 1200);  // new키워드를 이용해서 객체 생성.
                                           // "바나나"는 foo로 들어가고, 1200은 bar로 들어감.

console.log(product);           // Product{name: '바나나', price: 1200} 으로 출력됨.
```

***
## [04월20일]
### 대면 중간고사 실시로 내용X

***
## [04월13일]
### 오늘 배운 내용 요약
> 1. 함수 생성 방법(익명, 선언적, 화살표 함수)
> 2. 함수 기본 형태
> 3. 함수 매개변수 초기화
> 4. 콜백 함수
> 5. 표준 내장 함수(숫자 변환, 타이머 함수)

### [5장. 함수]
#### <1. 함수 생성 방법>
- 익명 함수: 이름이 없는 함수. 이름이 없어 호출을 할수없어서 변수를 사용함.
   - 형태: let 변수이름 = function( ) {      };
   - 함수 객체를 변수에 넣어서 변수를 사용하는 방식.
```jsx
// 익명 함수 예시
let foo = function() {         // 익명함수를 변수 foo에 넣음.
	console.log("첫번줄");
	console.log("두번째 줄");
};                             // 함수니까 세미콜론 붙이기!
foo();             // foo 호출
console.log(foo);  // console창에 foo 출력  
```

- 선언적 함수 : 이름이 있는 함수. 이름이 있으니 변수에 넣을 필요 없음.
   - 형태: function 함수이름( ) {     };
   - 일반적인 함수를 만들때는 선언적 함수를 사용함.
```jsx
// 선언적 함수 예시
function foo() {             // 함수이름이 foo
	console.log("첫번줄");
	console.log("두번째 줄");
};                             
foo();              // 함수 foo를 호출
console.log(foo);
```

- 화살표 함수 : 익명함수를 더 간단하게 생성하는 방법.
   - 형태: let 변수이름 = ( ) ⇒ {  };
   - function 키워드 사용 안함.
   - 하나의 표현식을 리턴하는 함수는 중괄호 생략 가능. 근데 중괄호 하는게 오류 안나서 생략 안하는게 나음.
```jsx
// 화살표 함수 예시
let foo = () => {            // 익명함수이니까 변수 foo에 넣음.
	console.log("첫번줄");
	console.log("두번째 줄");
};                             
foo();            
console.log(foo);
```

#### <2. 함수의 기본 형태>
```jsx
// 함수의 기본 형태
function 함수이름(매개변수) {   // 매개변수는 여러개여도 상관없음.
    함수 코드;
    return 리턴값;             // 리턴값 없어도 상관없음.
}
```

- 계산식을 return하는것보단, 변수에 계산식을 넣고 그 변수를 return하는게 더 나음.
```jsx
// 계산식을 return하는 방식
function power(x) {
    return x * x;
}
console.log(power(10));

// 계산식을 변수에 넣고 변수를 return하는 방식
function foo(x){
    let bar = x * x;
    return bar;
}
let foobar = foo(10);
console.log(foobar);    // 변수 이용하는게 더 보기 좋음.
```

- 매개변수가 여러개인 함수
```jsx
// 매개변수가 여러개인 함수 예시
function foo(a, b) {        // 매개변수가 2개인 경우
	let bar = a + b;
	return bar;
}
let foobar = foo(10, 20);   // 받는값도 2개여야 한다!
console.log(foobar);
```

- 리턴 없는 함수
```jsx
// 리턴이 없는 함수 예시
function print(message){
    console.log(`${message}라고 말했습니다.`);    // backtick(`)+($)+{}를 쓰면 괄호안에 변수내용이 들어감.  
}                                                 
print("안녕하세요.");  // "안녕하세요"는 message에 들어감. 매개변수.
```

#### <3. 함수 매개변수 초기화>
- 초기화가 필요한 이유
```jsx
// 초기화가 필요한 이유 예시
function print(name, count){
    console.log(`${name}이/가 ${count}개 있습니다.`);    
}
print("사과",10);   // "사과"는 name에, 10은 count에 들어감.
print("사과");      // "사과"는 name에 들어가는데, count에 들어갈 값이 없기때문에 
                    //  undefined가 뜸! 그래서 초기화를 시켜줘야함.
```

- 조건문으로 초기화하기1
```jsx
// 조건문으로 매개변수 초기화 예시1
function print(name, count){
    if(!count){
        count = "입력하시오!!";
    }   
    console.log(`${name}이/가 ${count}개 있습니다.`);    
}
print("사과",10);   // "사과"는 name에, 10은 count에 들어감.
print("사과");      // "사과"는 name에 넣고, count에 넣을 값이 없기 때문에
                    //  들어갈 값은 위에서 초기화한 값인 "입력하시오!!"가 들어감.
```

- 조건문으로 초기화하기2
```jsx
// 조건문으로 매개변수 초기화 예시2-디폴트 매개변수
function print(name="무명", count=1){
    console.log(`${name}이/가 ${count}개 있습니다.`);    
}
print("사과",10); // "사과"는 name에, 10은 count에 들어감.
print("사과");    // "사과"는 name에 넣고, count는 넣을 값이 없기때문에 초기화한 값 1이 들어감.
print();          // name과 count에 넣을 값이 없기때문에 초기화한 값 "무명"과 1이 들어감.
```

#### <4. 콜백 함수>
- 콜백 함수: 함수의 매개변수로 전달하는 함수. 자기 자신을 다시 불러들임.
```jsx
// 콜백 함수 예시
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
```

#### <5. 표준 내장 함수>
- 숫자 변환 함수
  - parseInt() : 문자열을 정수로 변환시켜주는 함수
  - parseFloat() : 문자열을 실수로 변환시켜주는 함수
```jsx
// 숫자 변환 함수 예시
let inputA = '52';
let inputB = '52.273';
let inputC = '1403동';

console.log(parseInt(inputA));      // 52 
console.log(parseFloat(inputA));    // 52 
 
console.log(parseInt(inputB));      // 52 
console.log(parseFloat(inputB));    // 52.273 (소수점까지 나옴)
 
console.log(parseInt(inputC));      // 1403 (정수만 나옴)

console.log(Number(inputA));       // 52     (정수로 나옴)
console.log(Number(inputB));       // 52.273 (실수로 나옴) 
console.log(Number(inputC));       // NaN (문자열이 섞여있는 숫자는 출력못함)
```
 - 진법 변환도 가능함: ex) parseInt("10", 2); 하면 10을 2진수로 변환시켜서 2가 출력됨.
 - 숫자 생성 방법
   - 8진수: 0숫자    >> ex) 010  하면 10진수로는 8
   - 16진수: 0x숫자 >> ex) 0x10 하면 10진수로는 16

- 타이머 함수
   - setTimeout(함수, 시간): 특정 시간 후에 함수를 실행함.
   - setInterval(함수, 시간): 특정 시간마다 함수를 실행함.
```jsx
// 타이머 함수 예시
setTimeout( () => {                 // 이런곳처럼 1회성일때 익명함수 쓰는게 좋음. 
    console.log("1초 경과!!!");     // 여기는 함수.
}, 1000)                           // 여기는 시간. 1000밀리초=1초

setInterval( () => {                        // setInterval은 특정시간마다여서 무한작동함.
    console.log("Interval 1초 경과!!!");     //  1초마다 출력.
}, 1000)
```

 - 컴퓨터 시간은 밀리초(millisecond). 1000밀리초 = 1초
 - 계속 출력하는거 종료할려면 Ctrl + C 누르면 됨
 - 타이머 제거 함수 : clearInterval(id);

***
## [04월06일]
### 오늘 배운 내용 요약
> 1. 반복문(for in과 for of, 중첩-별찍기, break, continue, 기타 내용)
> 2. 잠깐. 배열
> 3. 잠깐. 자주 쓰이는 함수

### [4장. 반복문]
#### <4. for in과 for of 반복문>
- for in 반복문은 배열의 인덱스와 데이터 값 둘다 가져오고 싶을때 사용!
```jsx
// for in 반복문 예제
let foo = [10, 20, 30, 40, 50];

for(let i in foo){
    console.log(`${i}번째 요소는 ${foo[i]}이다.`)  // 출력: 0번째 요소는 10이다. 1번째 요소는 20이다. ...
}                                                 // 백틱이 아닌 ' '를 사용하면 문자열로 출력되니 주의!
```
- for of 반복문은 배열의 데이터 값만 가져오고 싶을때 사용!
```jsx
// for of 반복문 예제
let foo = [10, 20, 30, 40, 50];

for(let item of foo){
   console.log(item)  // 출력: 10 20 30 40 50
}
```

#### <5. 중첩 반복문>
- 중첩 반복문을 이용해서 다양한 도형을 만들 수 있다 : ex) 삼각형, 마름모, 사다리꼴...

#### <6. break 키워드>
- 반복문을 벗어날때 사용.
```jsx
// break 키워드 예제
let i = 0;
let foo = [2, 3, 5, 4, 10];
while(true){              
    if(foo[i]%2==0){      // 배열에 있는 값이 짝수일때
        bar = foo[i];     // 그 짝수 값을 bar 변수에 집어넣고
        break;            // break를 만나서 while문 밖으로 나갈수있음.
    }
    i = i+1;              // i++, i +=1 이랑 같음.
}
console.log(`처음 발견한 짝수는 ${bar}입니다.`);  // 출력: 처음 발견한 짝수는 2입니다.
```

#### <7. continue 키워드>
- 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행.
```jsx
// continue 사용 예제
for(let i=1; i<10 i++) {
	if(i%2==0){
		continue;   // continue문은 if문이 아닌 for문을 계속 반복하라고 함.
	}  
	console.log(i);  // 출력: 1 3 5 7 9
}
```

#### <8. 기타 내용>
- 스코프(Scope): 변수를 사용할 수 있는 범위. 전역변수와 지역변수.
- 호이스팅(Hoisting): 해당 블록에서 사용할 변수를 미리 확인해서 정리하는 작업.
- var 키워드: 지금으로 따지면 let 키워드. 익스플로러에서 썼었음.


#### <잠깐. 배열 관련>
- 배열 선언과 초기화
```jsx
// 배열 선언, 초기화 예시
let foo = new Array();   // foo 변수를 객체화해서 배열을 선언.
let bar = [];            // bar 변수를 배열로 선언
foo = [1, 10, Orange]    // 초기화 
bar = [1, 10, Orange]    // 초기화
```
- 배열 선언과 초기화를 동시에.
```jsx
// 배열의 선언과 동시에 초기화
let foo = new Array(1, 10, Orange);  // 소괄호이니 주의!
let bar = [1, 10, Orange];          
```
- 배열의 길이를 알고 싶을때 .length 사용

#### <잠깐. 자주 쓰이는 함수 관련>
- push: 배열의 끝에 원하는 값을 추가해주는 함수
```jsx
// push 사용 예시
let foo = [1,3,2,7,6];
foo.push("push 추가", 0.5, 3.2);
console.log(foo);   // 출력: 1, 3, 2, 7, 6, 'push 추가', 0.5, 3.2
```
- pop: 배열의 마지막 주소에 있는 값을 제거해주는 함수
```jsx
// pop 사용 예시
let foo = [1,3,2,7,6];
foo.pop();
console.log(foo);   // 출력: 1, 3, 2, 7
```
- shift: 배열의 첫번째 주소에 있는 값을 제거한 후에 반환해주는 함수
```jsx
// shift 사용 예시
let foo = [1,3,2,7,6];
foo.shift();
console.log(foo);   // 출력: 3, 2, 7, 6
```
- push와 pop을 이용하면 stack, push와 shift를 이용하면 queue.

- concat: 두 개의 배열을 합쳐주는 함수
```jsx
// concat 사용 예시
let foo = [1,3,2,7,6];
let bar = ["a","b","c","d","e"];
foo = foo.concat(bar);
console.log(foo);   // 출력: 1, 3, 2, 7, 6, 'a', 'b', 'c', 'd', 'e'
```
- reverse: 배열을 역순으로 재배치해주는 함수
```jsx
// reverse 사용 예시
let foo = [1,3,2,7,6];
foo.reverse();
console.log(foo); // 출력: 6, 7, 2, 3, 1
```
- spot: 배열을 순서대로 정렬해주는 함수
```jsx
// sort 사용 예시
let foo = [1,3,2,7,6];
foo.sort();
console.log(foo);  // 출력: 1, 2, 3, 6, 7
```
- slice: 배열에서 내가 원하는 만큼의 데이터를 추출해주는 함수
  - slice( [시작 인덱스], [마지막 인덱스] )
  - 추출해서 다른곳에 사용 가능.
  - 추출했던 원래 배열은 그대로 유지.
```jsx
// slice 사용 예시
let foo = [1,3,2,7,6,9,8,5,4,0];
console.log(foo);
console.log(foo.slice(1,5)); // 출력: 3, 2, 7, 6
                             // 인덱스 1부터 5직전까지 추출 = 인덱스 1~4인 값.
console.log(foo);            // 출력: 1, 3, 2, 7, 6, 9, 8, 5, 4, 0
```
- splice: slice와 다르게 그냥 잘라버리는 함수. 그래서 원래 배열은 잘려져 있음.
  - splice( [시작 인덱스], [잘라낼 인덱스 갯수] )
```jsx
// splice 사용 예시
let foo = ["a", "b", "c", "d", "e"];
let bar = foo.splice(1,3);  // 인덱스 1에서 3개를 잘라서 bar에 저장.
console.log(bar);       // 잘라낸 값: b, c, d가 출력
console.log(foo);       // foo에 남은 값 : a, e가 출력
```
- array.splice( [시작 인덱스], [잘라낼 인덱스 갯수], [추가 값] ): 추가한 값은 잘라진 부분에 들어감.
```jsx
// array.splice 사용 예시
let foo = ["a", "b", "c", "d", "e"];
let bar = foo.splice(1,3,"삽입");  // foo의 인덱스 1부터 3개값은 bar에 저장 + 잘라낸 부분에 "삽입" 추가 
console.log(foo);      // 출력: 'a', '삽입', 'e'
console.log(bar);      // 출력: 'b', 'c', 'd'
```
- join: 배열값들 사이에 원하는 문자를 삽입하여 반환하는 함수
```jsx
// join 사용 예시
let foo = [0, 1, 2, 3, 4, 5];
foo = foo.join("/");
console.log(foo);   // 출력: 0/1/2/3/4/5
```


***
## [03월30일]
### 오늘 배운 내용 요약
> 1. 조건문(중첩, switch, 삼항연산자, 입력받기)
> 2. 반복문(배열, while, for, for in과 for of)

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





