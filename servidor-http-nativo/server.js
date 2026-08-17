const http = require('node:http')

const porta = 3000

const server = http.createServer();

server.on('request', (req, res ) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    console.log( `new Date().toISOString()`)

    res.statusCode = 201
    res.setHeader('content-type', 'application/json; charset=utf-8');
   
});

server.listen(porta, ()=> {
    console.log("Seridor ouvindo na porta ${porta}")
});

//Questão 4) A página demorou muito para carregar e depois apareceu uma msg de que a pagina nao esta funcionando
