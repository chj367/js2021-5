/* <전역 변수>
console.log(__filename); // 현재 코드의 파일 경로 출력.
console.log(__dirname);  // 현재 코드의 폴더 경로 출력.
*/

/* <process 객체> 
// exit 이벤트를 연결
process.on('exit', () => {
	console.log("프로세스가 종료되었습니다.");
});
    // 'exit'는 이벤트 이름. ()부터 }까지는 이벤트 핸들러.
    // ()에 매개변수를 넣어서 사용가능! 
    // 만약 ()에 code 집어넣고, console.log(code);하면
    // 0이 출력되면 정상종료. 1이 출력되면 비정상종료.

// uncaughtException 이벤트를 연결.
process.on('uncaughtException', () => {
	console.log("예외가 발생했습니다.");
});
    // ()에 error 집어넣고, console.log(error); 하면 Error 내용이 출력됨.

// 예외를 강제로 발생시킴.
error.error.error();
*/

/* <os 모듈>
const os = require("os");   // new키워드 없이 객체 생성.
  // const 키워드로 함. (상수)
  // 모듈이름이 os이면, 객체 이름을 os로 해야함!
  // os말고 다른 이름 사용해도 상관없음. 근데 대부분 os같은 잘 쓰는 이름으로 쓰는게 좋음!
  // require 키워드를 사용해서 os모듈을 가져옴.

console.log(os.hostname()); // 현재 컴퓨터의 호스트 이름이 출력됨.
*/

/* <url 모듈>
const url = require("url");  // 객체 생성
  // 이것도 url말고 다른이름 사용해도 가능. 근데 웬만하면 url로 쓰는게 좋음.
 
console.log(foo.parse("https://naver.com"));
  // JSON 형태로 프로토콜, 호스트, 포트 등 해당 URL 관련 정보가 출력됨.
*/

/* <파일 읽기-동기식>
const fs = require("fs");     // 객체 생성
const file = fs.readFileSync("test.txt");  
  // 일단 하기전에 test.txt를 만들어서 내용을 작성했음.
  // "test.txt"파일을 읽어서 file에 집어넣음.

console.log(file);            // Buffer에 해당 내용이 16진수로 출력.
console.log(file.toString()); // toString()메소드를 이용해서 문자열로 변환시켜서 출력. 

console.log(fs.readFileSync("test.txt").toString());  // 위의 코드들을 이렇게 한줄로 줄여서 사용가능.
*/

/* <파일 읽기-비동기식>
const fs = require("fs");  // 객체 생성

fs.readFile("test.txt", (error, file) => {
	console.log(file);
	console.log(file.toString());
});
  // "test.txt"는 파일 이름. (error 부터 } 는 콜백 함수
  // 첫번째 매개변수는 보통 오류인 error, 두번째는 원하는 변수를 넣음.
  // test.txt를 읽어들여서 매개변수인 file에 집어넣는 방식.
  // 출력 내용은 동기식과 똑같음.
*/

/* <여러 파일 읽기-동기식>
const fs = require("fs");   // 객체 생성

const a = readFileSync("a.txt");  // a.txt 읽어와서 a에 저장.
const b = readFileSync("b.txt");  // b.txt 읽어와서 b에 저장.
const c = readFileSync("c.txt");  // c.txt 읽어와서 c에 저장.

console.log(a, b, c);   // 출력.

 // a읽어오고, b읽어오고, c읽어오는거 다 따로 순차적으로 하기 때문에
 // 시간이 비동기적으로 읽어오는것보다 오래 걸림.
 */

/* <파일 쓰기-동기식>
const fs = require("fs");   // 객체 생성

fs.writeFileSync("test.txt", "안녕하세요!!"); // test.txt 파일에 안녕하세요!!가 쓰여짐.
console.log("쓰기 완료");   

// 쓰기도 읽기처럼 내용이 많으면 순차적으로 진행되기 때문에 오래걸림.
*/

/* <파일 쓰기-비동기식>
const fs = require("fs");  // 객체 생성

fs.writeFile("test.txt", "잘자!", (error) => {  // test.txt 파일에 잘자!가 쓰여짐.
	console.log("쓰기 완료!");
});
*/

/* <동기 코드 예외처리>
const fs = require("fs");           // 객체 생성

try{
	const file = fs.readFileSync("none.txt");
	console.log(file);             
	console.log(file.toString());  
} catch(exception) {               // 예외가 발생했을때
	console.log("문제 발생");
	console.log(exception);        // 오류메시지 출력
}
*/

/* <비동기 코드 예외처리>
const fs = require("fs");                 // 객체 생성

fs.readFile("none.txt", (error, file) => {
	if(error) {                           // 에러 발생했을때
			console.log("문제 발생!"); 
			console.log(error);           // 에러 출력
	} else {                              // 정상 실행될때
			console.log(file);            // 파일 내용을 16진수로 출력 
			console.log(file.toString()); // 문자열로 출력
	}
}
*/

/* <request 모듈>
const request = require("request");  // 객체 생성

const url = "https://naver.com";
request(url, (error, response, body) => {
	console.log(body);
});
    // request로 받은 값을 body에 저장해서 출력.
    // url에 있는 html내용들을 다 갖고와서 출력하는 것임.
*/    

/* <cheerio 모듈>
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
*/ 

/* -The End- */