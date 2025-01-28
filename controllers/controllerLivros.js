import {livrosModel} from "../models/livros.js"

const todosLivros = async(req, res) => {
  try{
    const livros = await livrosModel.find()
    res.json({
      erro: false,
      livros
    })
  }catch (error) {
    res.json({
      erro: true,
      error
    })
  }
}


  const addLivro = async(req,res) => {
 try{
    const {nome, qPaginas, autor} = req.body
    
    if (!nome || !qPaginas || !autor){
      return res.json({
        erro:true,
        mensagem: 'É necessário preencher todos os valores'
      })
    }

    const livro = new livrosModel({nome,qPaginas,autor})
    await livro.save()
    res.json(livro)
  } catch(error) {
    res.json({
      erro: true,
      mensagem: error
    })
  }
}
  
  const livroId = async(req, res) => {
    try{
        const {id} = req.params
        const livro = await livrosModel.findById(id)
        if(!livro){
          res.json({
            erro: true,
            mensagem: "Livro não encontrado"
          })
        }
        res.json({
          erro:false,
          livro
        })
    }catch (error) {
      res.json({
        erro: true,
        error
      })
    }
  };
  

const attLivro = async(req,res) => {
  try{
      const {id} = req.params
      const livro = await livrosModel.findByIdAndUpdate(id, req.body, {new: true})
      if(!livro){
        res.json({
        erro: true,
        mensagem: "Livro não encontrado"
        })
      }res.json({
        erro: false,
        livro
      })
  }catch (error) {
    res.json({
      erro: true,
      error
    })
  }
}

  const delLivro = async(req,res) => {
    try{
    const {id} = req.params
    const livro = await livrosModel.findByIdAndDelete(id)
      if(!livro){
        res.json({
          erro: true,
          mensagem: "Livro não encontrado"
        })
      }res.json({
        erro:false,
        mensagem: "Livro excluido"
      })
  }catch(error) {
    res.json({
      erro: true,
      error
    })
  }
}
export default {todosLivros,livroId,addLivro,attLivro,delLivro} 