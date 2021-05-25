/* <express 모듈을 사용한 서버 생성과 실행> 
const express = require('express');  // express 모듈 객체 생성.	
const app = express(); // 서버 생성. 

app.use((request, response) => {   // request 이벤트 리스너 설정.
    response.send('<h1>Hello express</h1>'); 
});

app.listen(52273, () => {  // 서버 실행. 
	console.log('Server running at http://127.0.0.1:52273');
});
*/

/* <토큰을 이용해서 페이지 라우팅>
const express = require('express'); // express 모듈 객체 생성.
const app = express(); // 서버 생성.

app.get('/page/:id', (request, response) => { // request 이벤트 리스너 설정.
	const id = request.params.id;   // 토큰 생성.
	response.send(`<h1>${id} Page</h1>`);  // 응답하기.
});

app.listen(52273, () => {  // 서버 실행.
  console.log('Server running at http://127.0.0.1:52273');
}); 
*/

/* <response 객체>
const express = require('express'); // express 모듈 객체 생성.
const app = express(); // 서버 생성.

app.get('*', (request, response) => {  
	response.status(404);  
    response.set('methodA', 'ABCD');  
	response.set({        
		methodB1: 'FGHI';
		methodB2: 'JKLM';
	});
	response.send('본문을 입력합니다.'); // 응답할 메세지.
});

app.listen(52273, () => {  // 서버 실행.
  console.log('Server running at http://127.0.0.1:52273');
}); 
*/

/* <Content-Type 지정>
const express = require('express');  // express 모듈 객체 생성.
const fs = require('fs');            // fs모듈 객체 생성.

const app = express();   // 서버 생성.

app.get('/image', (request, response) => {    
	fs.readFile('image.png', (error, data) => {  
		response.type('image/png');  // MIME 형식은 image/png로 설정.
		resonse.send(data);          // data에 있는 image.png를 응답(=화면에 보여줌)
	});
});

app.listen(52273, () => {  // 서버 실행.
  console.log('Server running at http://127.0.0.1:52273');
}); 
*/

/* <상태 코드>
const express = require('express');  // express 모듈 객체 생성.
const app = express(); // 서버 생성. 

app.use('*', (request, response) => {   // request 이벤트 리스너 설정.
    response.status(404);   // 상태코드 지정.
	response.send('해당 경로에 아무것도 없습니다.');  // 응답하기.
});

app.listen(52273, () => {  // 서버 실행. 
	console.log('Server running at http://127.0.0.1:52273');
});
*/

/* <리다이렉트>
const express = require('express');  // express 모듈 객체 생성.
const app = express();  // 서버 생성. 

app.get('*', (request, response) => {
	response.redirect('http://naver.com');  // 리다이렉트.
});

app.listen(52273, () => {  // 서버 실행. 
	console.log('Server running at http://127.0.0.1:52273');
});
*/

/* <request 객체>
const express = require('express');  // express 모듈 객체 생성.
const app = express();   // 서버 생성. 

app.get('*', (request, response) => {
	console.log(request.query);  // Console창 출력내용은 query 부분.
	reponse.send(request.query); // 응답할 내용은 query 부분(=웹브라우저 화면에서도 볼수있음)
});

app.listen(52273, () => {  // 서버 실행. 
	console.log('Server running at http://127.0.0.1:52273');
});
*/

/* <미들웨어>
const express = require('express');  // express 모듈 객체 생성.
const app = express(); // 서버 생성. 

app.use(express.static('public')); 
app.use('*', (request, response) => {   
    response.status(404);  // 상태코드 설정.
	response.send('파일이 없습니다.');  // 응답하기.
});

app.listen(52273, () => {  // 서버 실행. 
	console.log('Server running at http://127.0.0.1:52273');
});
*/

/* <morgan 미들웨어>
const express = require('express');  // express 모듈 객체 생성.
const morgan = require('morgan');   // morgan 모듈 객체 생성.

const app = express();  // 서버 생성. 
app.use(express.static('public')); // static 미들웨어. 디렉터리 이름은 public
app.use(morgan('combined'));  // 매개변수는 combined.

app.get('*', (request, response) => {
	response.send("명령 프롬포트를 확인해주세요."); // 응답
});

app.listen(52273, () => {  // 서버 실행. 
	console.log('Server running at http://127.0.0.1:52273');
});
*/

/* <body-parser 미들웨어>
const express = require('express');  // express 모듈 객체 생성.
const bodyParser = require('body-parser'); // body-parser 모듈 객체 생성.

const app = express();  // 서버 생성. 
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (request, response) => {   
	// HTML 형식의 문자열 생성.
	let output = '';
	output += '<form method="post">';   // post 형식
	output += '<input type="text" name="a" />'; 
    output += '<input type="text" name="b" />'; 
    output += '<input type="submit">'; 
    output += '</form>';
	
	response.send(output);  // 응답.
});

app.post('/', (request, response) => {
	response.send(request.body);  // 응답.
});

app.listen(52273, () => {    // 서버 실행. 
	console.log('Server running at http://127.0.0.1:52273');
});
*/

/* -THE END- */