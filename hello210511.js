/* <Date 객체-현재 시간> 
let foo = new Date(1600000000);   // Date 객체 생성해서 foo에다가 넣음.
console.log(foo);                 // 현재 시간 출력.
*/

/* <Date 객체-유닉스타임> 
let foo = new Date(1600000000);   // 괄호안에 유닉스타임 넣었더니
console.log(foo);                 // 넣은 유닉스타임에 맞는 시간 출력.
*/

/* <Date 객체-문자열> 
let foo = new Date("Dec 9, 2020 14:00:00");  // 괄호안에 시간을 문자열로 넣었더니
console.log(foo);                            // 넣은 값에 맞는 시간 출력.
*/

/* <Date 객체-시간요소> 
let foo = new Date(2021, 6-1, 11, 14, 30, 0); // 괄호안에 시간 요소를 넣었더니
console.log(foo);                             // 넣은 값에 맞는 시간 출력.
*/

/* <시간 더하기>
let foo = new Date();   
console.log(foo);     // 현재 시간 출력.   

foo.setFullYear(foo.getFullYear()+1);   // 현재시간에서 년+1
foo.setMonth(foo.getMonth()+1);         // 현재시간에서 월+1
foo.setDate(foo.getDate()+1);           // 현재시간에서 일+1

console.log(foo);    // 더한 시간 출력.
*/

/* <시간 간격 구하기> 
let now = new Date();                   // 현재 시간
let before = new Date('Dec 9, 2020');   // 괄호에 특정 날짜를 작성. 
                                        // December의 약어 Dec 사용 가능!

let interval = now.getTime() - before.getTime(); // now의 시간-before의 시간 차이를 interval에 저장.
interval = Math.floor(interval / (1000*60*60*24)); // 시간차이가 ms라서 계산을 해서 Day로 변환했음.

console.log(interval);     // 출력.
*/

/* <pop()과 push()메소드> 
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
console.log(popped);     // "바나나" 출력.
console.log(foo);        // 원본 출력했는데 원래 있었던 "바나나" 사라짐!
console.log();           // 이렇게 빈칸을 출력하면 한칸 띄워줌.

foo.push(popped);   // "바나나"를 popped에 다시 추가(스택의 push)
foo.push(           // "사과", "수박" 내용을 추가.
    {                  
        name: '사과',
        price: 2000
    },
    {
        name: "수박",
        price: 3000
    }
);
console.log(foo);   // '바나나', "사과", "수박"이 들어있는 상태 출력.
*/

/* <forEach(), map(), filter() 메소드> 
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
*/

/* <stringify() 메소드>
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
*/

// *************************[8장. 예외처리]******************************
/* <예외>
function callThreeTimes(callback) {
	for (let i=0; i<3; i++) {
		callback();
	} 
}

callThreeTimes(function() { console.log("안녕하세요"); });
      // 익명함수를 사용해서 callback()함수를 선언했기 때문에 내용 정상 출력.

callThreeTimes();
     // callback()함수를 호출하는데 함수를 선언했던 내용이 없기 때문에 예외 발생.
*/

/* <if문으로 예외처리>
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
*/

/* <try~catch~finally 구문으로 예외처리>
try {
		let foo = new Array(-2000);
} catch(exception) {  
		console.log(`${exception.name} 예외가 발생했습니다.`);
} finally {
		console.log("finally 구문이 실행되었습니다.");
}
*/

/* <finally 구문 사용 유무>
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
*/

/* <throw키워드를 이용한 예외 강제 발생>
const foo = new Error("메시지");
foo.name = "오류 제목입니다";          // 작성한 이 내용으로 오류 출력됨.
foo.message = "오류 메시지입니다.";    // 작성한 이 내용으로 오류 출력됨.

throw foo;      // throw 키워드 이용해서 강제로 예외 발생.

/* -The End- */