const livros = [
  {
    nome: "Monstro do Lago Ness",
    qPaginas: 100,
    autor: "Felipe"
  }
]

const todosLivros = (req, res) => {
    res.send(livros);
  };


  const addLivro = (req,res) => {
    const {nome, qPaginas, autor} = req.body
    
    if (!nome || !qPaginas || !autor){
      return res.json({
        erro:true,
        mensagem: 'É necessário preencher todos os valores'
      })
    }

    const livro = {
      nome,
      qPaginas,
      autor
    }

    try{
      livros.push(livro)
      return res.json({
        erro: false,
        mensagem: 'Livro cadastrado'
      })
    } catch (error) {
      console.log(error)
      return res.json({
        erro:true,
        mensagem: error
      })
    }
  }
  
  const livroId = (req, res) => {
    const livroId = parseInt(req.params.id);
    const livro = livros.find(i => i.id === livroId);
  
    if (livro) {
      res.json(livro)
    } else {
      res.end({
        erro: true,
        mensagem: "Livro não encontrado"
      })
    }
  };
  

const attLivro = (req,res) => {
  const livroId = parseInt(req.params.id)
  const {nome, qPaginas, autor} = req.body

  const livro = livros.find((i) => i.id === livroId)

  if(!livro){
    return res.json({
      erro: true,
      mensagem: "Livro não encontrado"
    })
  }

  if (!nome || !qPaginas || !autor){
    return res.json({
      erro:true,
      mensagem: 'É necessário preencher todos os valores'
    })
  }
    livro.nome = nome
    livro.qPaginas = qPaginas
    livro.autor = autor

  res.json({
    erro:false,
    mensagem:"Livro alterado"
  })
}

  const delLivro = (req,res) => {
    const livroId = parseInt(req.params.id)
    const index = livros.findIndex((i) => i.id === livroId)

    if(index === -1){
      return res.json({
        erro:true,
        mensagem: "Livro não encontrado"
      })
    }

    alunos.splice(index,1)
    res.json({
      erro: false,
      mensagem: 'Livro excluido'
    })
  }

export default {todosLivros,livroId,addLivro,attLivro,delLivro} 