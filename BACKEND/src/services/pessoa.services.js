const Pessoa = require("../models/pessoa");
const novaPessoa = require("../controllers/pessoaController");

const pessoaService = {
  getPessoa: async () => {
    return await Pessoa.findAll();
  },
  getById: async () => {
    return await Pessoa.findByPk();
  },
  insertPessoa: async ({nome, sobrenome, idade}) => {
    const novaPessoa = await Pessoa.create ({nome, sobrenome, idade})
    return novaPessoa;
  },
  updatePessoa: async ({id, nome, sobrenome, idade})=>{
    return await Pessoa.update(
        {nome, sobrenome, idade},
        {
            where: {id: id},
        }
    );
  },
  delete: async (id)=>{
    return await Pessoa.destroy({
        where: {id: id},
    });
  },
};

module.exports= pessoaService;