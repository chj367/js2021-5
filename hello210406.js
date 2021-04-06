/* <배열과 for in, for of 반복문 예제>
let foo = [10, 20, 30, 40, 50];

for(let i in foo){
    console.log(`${i}번째 요소는 ${foo[i]}이다.`) // 출력: 0번째 요소는 10이다.
}  

for(let item of foo){
   console.log(item)  // 출력: 10 20 30 40 50
}
*/

/* <중첩 반복문 - 별찍기 예제1(직각삼각형)> 
let output = "";                // 일단 화면에 출력할 변수 생성

for (let i=0; i<10; i++){       // i가 0~9일때까지 반복.
    for(let j=0; j<i+1; j++){   // j는 0~j일때까지 반복
        output = output + "*";  // output변수에 *를 1개씩 추가.
    }
    output = output + "\n";     // j끝나면 줄바꿈.
}
console.log(output);            // 출력
*/

/* <중첩 반복문 - 별찍기 예제2(직각삼각형)>
let output = "";

for (let i=0; i<10; i++){
    for(let j=0; j<10-i; j++){   // 별찍기 예제 1에다가
        output = output + " ";   // 이 3줄 부분만 
    }                            // 추가한 것임.(스페이스 추가부분) 
    for(let j=0; j<i+1; j++){   
        output = output + "*";  
    }
    output = output + "\n"; 
}
console.log(output);
*/

/* <중첩 반복문 - 별찍기 예제3(정삼각형)>
let output = "";

for (let i=0; i<10; i++){
    for(let j=0; j<10-i; j++){    
        output = output + " ";    
    }                             
    for(let j=0; j<i+1; j++){     
        output = output + "*";    
    }                             
    for(let j=1; j<i+1; j++){     // 별찍기 예제 2에다가
        output = output + "*";    // 이 3줄 부분만 추가한 것임.
    }                             // 꼭대기가 1개라 범위 1 감소.
    output = output + "\n"; 
}
console.log(output);
*/

/* <중첩 반복문 - 별찍기 예제4(마름모)>
let output = "";

for (let i=0; i<10; i++){
    for(let j=0; j<10-i; j++){    
        output = output + " ";    
    }                             
    for(let j=0; j<i+1; j++){     
        output = output + "*";    
    }                             
    for(let j=1; j<i+1; j++){     
        output = output + "*";    
    }                             
    output = output + "\n"; 
}

for (let i=0; i<10; i++){
    for(let j=0; j<i+1; j++){    
        output = output + " ";    
    }                             
    for(let j=0; j<10-i; j++){     
        output = output + "*";    
    }                             
    for(let j=0; j<9-i; j++){     
        output = output + "*";    
    }                             
    output = output + "\n"; 
}

console.log(output);
*/

/* <중첩 반복문- 별찍기 예제5(사다리꼴)>
let output = "";

for (let i=0; i<5; i++){
    for(let j=0; j<5-i; j++){    
        output = output + " ";    
    }                             
    for(let j=0; j<i+1; j++){     
        output = output + "*";    
    }                             
    for(let j=0; j<i+1; j++){     // 별찍기 예제3에서
        output = output + "*";    // 범위를 1 늘려주면 완성.
    }                             
    output = output + "\n"; 
}
console.log(output);
*/

/* <break 키워드>
let i = 0;
let foo = [2, 3, 5, 4, 10];
while(true){              
    if(foo[i]%2==0){      // 배열에 있는 값이 짝수일때
        bar = foo[i];     // 그 짝수 값을 bar 변수에 집어넣고
        break;            // break를 만나서 while문 밖으로 나갈수있음.
    }
    i = i+1;               // i++, i +=1 이랑 같음.
}
console.log(`처음 발견한 짝수는 ${bar}입니다.`);  // 출력: 처음 발견한 짝수는 2입니다.
*/

/* <continue 키워드>
for(let i=1; i<10 i++) {
	if(i%2==0){
		continue;
	}  
	console.log(i);  // 출력: 1 3 5 7 9
}
*/

/* </위의 예제에서 continue대신 break 쓸 경우>
for(let i=1; i<10 i++) {
	if(i%2==0){
		break;
	}  
	console.log(i);  // 출력: 1
}
*/