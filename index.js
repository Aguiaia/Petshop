const http = require('http');
const petshop = require ('./petshop');
const url = require('url');
const server = http.createServer(function(req, res){
    //quando faço requisição no navegador
  res.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"});
  let urlCompleta = url.parse(req.url, true);
  let queryString = urlCompleta.query; //parametros
  let rota = urlCompleta.pathname; //ex: pets/add

  switch (rota) {
      case '/pets':
      let conteudo = petshop.listarPets();
      if (conteudo.length > 0) {
          res.write(conteudo);
      } else {
          res.write('Nenhum pet cadastrado :(')
      }
      res.write('lista de pets');
      break;
      case '/pets/add':
      let novoPet = queryString;
      if (petshop.adicionarPet(novoPet)) {
          res.write(`${novoPet.nome} foi adicionado a nossa lista`);
      } else {
          res.write ('Ops, algo deu errado!');
      }
      break;
      case '/pets/buscar':
      let nomePet = queryString.nome;
      let nomes = petshop.buscarPet(nomePet);
      if (petshop.buscarPet(nomePet)) {
          res.write('Pet encontrado');
      } else {
          res.write ('Não encontramos esse pet!')
      }
      break;
      default:
      res.write('tô perdido');
    }
    res.end();
}).listen(3000, "localhost", () => {
    console.log('Servidor rodando :)')
});