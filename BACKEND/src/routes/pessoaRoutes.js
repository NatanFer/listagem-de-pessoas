const express = require("express");
const router = express.Router();
const pessoaController = require("../controllers/pessoaController");

router.get('/',pessoaController.listarPessoas);
router.get('/:id',pessoaController.buscarPessoaById);
router.post('/add',pessoaController.inserirPessoa);
router.put('/atualizar/:id',pessoaController.atualizarPessoa);
router.delete('/deletar/:id',pessoaController.deletarPessoa);


module.exports = router;