const pessoaService = require("../services/pessoa.services");

const pessoaController = {
  listarPessoas:async (req, res)=>{
  try{
    const pessoas = await pessoaService.getPessoa();
    res.json(pessoas);
  }catch(error){
    return res.status(500).json({message: error.message});
  }
  },

  buscarPessoaById: async (req, res) => {
    try {
      const pessoa = await pessoaService.getById(req.params.id);
      if (!pessoa) {
        return res
          .status(404)
          .json({ statusCode: 404, error: "Essa pessoa não existe!" });
      }
      return res.json(pessoa);
    } catch (error) {
      return res
        .statusCode(500)
        .json({ statusCode: 500, error: "Erro busca pelo registro com Id específicado no banco" });
    }
  },

  inserirPessoa: async (req, res) => {
    try {
      const novaPessoa = await pessoaService.insertPessoa(req.body);
      res.status(201).json(novaPessoa);
    } catch (error) {
      console.log(error);
      res.status(500).json({ statusCode: 500, error: "Erro na tentativa de inserir no registro no banco" });
    }
  },

  atualizarPessoa:async (req, res) => {
    try {
      const pessoaExistente = await pessoaService.getById(req.params.id);
      console.log(pessoaExistente);
      if (!pessoaExistente) {
        return res
          .status(404)
          .json({ statusCode: 404, error: "Pessoa não encontrada" });
      }
      const pessoaAtualizada = await pessoaService.updatePessoa(req.body);
      return res.json(pessoaAtualizada);
    } catch (error) {
      return res
        .statusCode(500)
        .json({ statusCode: 500, error: "Error na tentativa de atualização do registro" });
    }
  },

  deletarPessoa: async (req, res) => {
    try {
      const pessoaExistente = await pessoaService.getById(req.params.id);
      if (!pessoaExistente) {
        return res
          .status(404)
          .json({ statusCode: 404, error: "Pessoa não encontrada" });
      }
  
      await pessoaService.deletePessoa(req.params.id);
      return res.json({
        statusCode: 200,
        message: `A pessoa com id: ${req.params.id} foi deletada com sucesso!`,
      });
    } catch (error) {
      return res
        .statusCode(500)
        .json({ statusCode: 500, error: "Erro ao tentar deletar o registro" });
    }
  }
}

module.exports = pessoaController;