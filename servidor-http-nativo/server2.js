const http = require("node:http");

const port = 3000;

const contatoObj = {
	data: {
		numero_telefone: "67 99999-9999",
		endereco_email: "alo@gmail.com",
	}
}

const produtosLista = [
	{
		data: [
			{id: 1, nome: "RTX 4090 ti"},
			{id: 2, nome: "Pastilhas"},
			{id: 3, nome: "Capacete de Moto"}
		]
	}
]

const server = http.createServer((req, res) => {
	
  console.log("Cabeçalhos da 'req' (Requisição)", req.headers);
  
  // Cabeçalho de resposta
  res.setHeader('Content-Type', 'application/json');
  
  if (req.url == "/" && req.method == "GET") {
	  // Informações da Requisição
	  console.log(`Método: ${req.method} e URL: ${req.url}`);
	  // Definiu o código de status
	  res.statusCode = 200;
	  res.end(JSON.stringify({data: "Página Inicial"}));
  } else if (req.url == "/contato" && req.method == "GET") {
	  // Informações da Requisição
	  console.log(`Método: ${req.method} e URL: ${req.url}`);
	  // Definiu o código de status
	  res.statusCode = 200;
	  // Mensagem enviada
	  res.end(JSON.stringify(contatoObj));
  } else if (req.url == "/produtos" && req.method == "GET") {
	  // Informações da Requisição
	  console.log(`Método: ${req.method} e URL: ${req.url}`);
	  // Definiu o código de status
	  res.statusCode = 200;
	  // Mensagem enviada
	  res.end(JSON.stringify(produtosLista));
  } else if (req.url == "/status" && req.method == "GET") {
	  // Informações da Requisição
	  console.log(`Método: ${req.method} e URL: ${req.url}`);
	  // Definiu o código de status
	  res.statusCode = 200;
	  // Mensagem enviada
	  res.end(JSON.stringify({data: {status: "ok"}}));
  } else {
	// Informações da Requisição
	console.log(`Método: ${req.method} e URL: ${req.url} Não existente.`);
	// Definiu o código de status
	res.statusCode = 404;  
	// Mensagem enviada
	res.end(JSON.stringify({"error": "Página não encontrada."}));
  }
});

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});