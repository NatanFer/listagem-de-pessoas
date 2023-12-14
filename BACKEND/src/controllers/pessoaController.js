const Pessoa = require("../models/pessoa");

exports.listarPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.inserirPessoa = async (req, res) => {
  try {
    const { nome, sobrenome, idade } = req.body;
    const novaPessoa = await Pessoa.create({ nome, sobrenome, idade });
    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
