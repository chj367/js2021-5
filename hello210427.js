/* <표준내장함수-타이머함수> 
let foo = setInterval( () => {                             
    console.log("Interval 1초 경과!!!");     
}, 1000)                       // 1초에 한번씩 실행됨. 계속 반복.

setTimeout( () => {               
    clearInterval(foo);      // clearInterval()를 써서 반복을 멈출수있음.
}, 6000)                     // 6초전인 5초까지 총 5번 출력됨.
*/

/* <변수 덮어씌우기>
let foo;
foo = 10;
foo = 20;
foo = "세번째";
console.log(foo);   // 맨 마지막에 나온 세번째가 출력됨.
*/

/* <함수 덮어씌우기>
let foo;
foo = () => { console.log("lst"); }    
foo = () => { console.log("2nd"); }
foo = () => { console.log("3rd"); }

foo();     // 변수처럼 함수도 맨 마지막에 있는 3rd가 출력됨.
*/

/* <익명함수와 선언적함수 덮어씌우기> 
foo = () => { console.log("lst"); }  
function foo() { console.log("2nd"); };

foo();    // 익명함수인 1st가 출력됨.
*/

/* <배열>
let foo = ["사과", "배", "바나나", "딸기"];

console.log(foo[0]);  // "사과"가 출력됨. 0은 인덱스번호.
*/

/* <배열-JSON 사용 예시>  
let foo = {                    // JSON으로 넣은 값들을 foo에 집어넣음.
	제품명: "건조 망고",        // 키: 키값 
    유형: "당절임",
    원산지: "필리핀",
    price: 1200                // 숫자도 집어넣을 수 있다.
};

console.log(foo);              // foo에 집어넣은 키: 키값 모두 출력.
console.log(foo.유형);         // 유형의 값인 '당절임'이 출력.
console.log(foo.price);        // price의 값인 1200이 출력.

   // <반복문 사용해서 배열있는 내용 출력>  
for(let key in foo){
    console.log(`${key}: ${foo[key]}`);
}
*/

/* <속성과 메소드 예시> 
let foo = {                   
	name: "건조 망고", 
    price: 1200,
    print: function () {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
};

foo.print();      // "건조 망고의 가격은 1200원 입니다."가 출력.
*/

/* <배열을 이용해서 JSON 여러개 집어넣기> 
let product = [                    // product에다가 JSON으로 여러개 집어 넣음.
    {name: '사과', price: 1200},
    {name: '배', price: 1500},
    {name: '자두', price: 1000},
    {name: '딸기', price: 2000},
    {name: '바나나', price: 1500}
];

function printProduct(bar){     // product의 값을 집어넣은 foo를 받아온 것을 다시 bar 집어넣었음.
    console.log(`${bar.name}은 ${bar.price}원 입니다.`);
}

for (let foo of product) {      // 앞에는 아무거나. 뒤에는 위의 product객체 작성.
    printProduct(foo);          // foo를 1개씩 집어넣어서 출력하는 함수 반복 호출.
}
*/

/* <생성자 함수 사용> 
function Product(foo, bar){   // 생성자 함수 사용. 인자 이름은 아무거나 사용 가능.
    this.foo1 = foo;          // foo1와 bar1은 그냥 키 이름. 아무거나 사용 가능. 
    this.bar1 = bar;          // foo와 bar는 밑에서 받은 값을 각각 집어넣음.  
}

let product = new Product("바나나", 1200);  // new키워드를 이용해서 객체 생성.
                            // "바나나"는 foo로 들어가고, 1200은 bar로 들어감.

console.log(product);  // Product{name: '바나나', price: 1200} 으로 출력됨.
*/

/* -The END- */