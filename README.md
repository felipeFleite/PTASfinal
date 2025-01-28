# PTASfinal

O projeto esta devidamente separado e é feito para registrar/alterar/buscar/deletar um livro na coleção do banco de dados.

para rodar a aplicação basta escrever "node --watch ./server.js" no terminal

As funções existentes estão todas na rota raiz,
Se for necessário ver toda a coleção basta ir no http://localhost:3000 no postman ou insomnia e fazer um GET,

Caso deseje ver um livro específico faça um GET em http://localhost:3000/"ID do livro" e se ele existir irá aparecer ex:"http://localhost:3000/"67995cfeccbb6e719950268c",

Se quiser adicionar um livro apenas apenas vá e faça um POST a http://localhost:3000 e escreva sua requisição como ex:"
    {
    "nome": "Sherlock Holmes",
    "qPaginas": 176,
    "autor" : "Arthur Conan Doyle"
  } /* Vale lembrar que se qualquer valor faltar ou o número de páginas for 0 ele não permitira o registro */

Caso deseja alterar algo faça um PUT em http://localhost:3000/"ID do livro" e coloque os dados que deseja alterar como ex:
    {
    "autor" : "Felipe Leite"
  }

Por fim caso deseje deletar um livro faça um DELETE em http://localhost:3000/"ID do livro" como ex: http://localhost:3000/679963001e2cf62e5ea8b281
e então aparecera a mensagem que o livro foi excluido