const http = require("http");

http.createServer((req,res) => {
    res.writeHead(200, {"content-Type": "text/html" }); //200는 포트 번호로 서버내의 프로세스를 구분하는 번호
    res.end("<p>Hello World~!!!</p>");
})
.listen(3000, ()=> { // 3000 로컬호스트, 현재 컴퓨터 내부주소이다. , localhost == 127.0.01 이는 IP를 뜻함
    console.log("3000번 포트 서버 접속 완료~!!!");
});