const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    );
};


```
액트에서 프록시 서버를 사용하는 이유는, 개발 시에 백엔드 서버와 리액트 서버를 같은 컴퓨터에서 켤 때
CORS 정책을 위반하여 문제가 생기는 것을 방지하기 위함이다.

리액트에서 백엔드 서버를 프록시 서버로 설정해주면,
리액트 서버로 들어온 api 요청을 백엔드 서버에서 처리하게 됩니다.

( ( 추후 백엔드와의 연동에서 필요함 ) )```