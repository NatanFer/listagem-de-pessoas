const mySQLcon = require("../../connection");

const Pessoa = mySQLcon.config.define(
  "Pessoa",
  {
    id: {
      type: mySQLcon.dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: mySQLcon.dataTypes.STRING,
    },
    sobrenome: {
      type: mySQLcon.dataTypes.STRING,
    },
    idade: {
      type: mySQLcon.dataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "pessoa",
  }
);

module.exports = Pessoa;
