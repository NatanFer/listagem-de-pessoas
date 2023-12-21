//Imports de Componentes
// import Titulo from "./titulo/titulo";
import FormPessoa from "./form-entrada-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/table-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Outros imports
import { useEffect, useState } from "react";
import { apiGetPessoas, apiAddPessoa } from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [current, setCurrent] = useState({
    nome: null,
    sobrenome: null,
    idade: null,
  });
  useEffect(() => {
    fetchPessoas();
  }, []);

  const fetchPessoas = async () => {
    const resultado = await apiGetPessoas();
    setDados(resultado);
  };

  const handleAddPessoa = async (novoDado) => {
    await apiAddPessoa(novoDado);
  };

  const handleClick = (e, pessoa) => {
    console.log(e, pessoa);
    if (e.type === "click") {
      const confirmarUpdate = window.confirm(
        `voce quer atualizar os dados de ${pessoa.nome}`
      );

      if (confirmarUpdate) {
        setCurrent(pessoa);
      }

    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (e.button === 2) {
        console.log(`${pessoa.nome} será deletado`);
      }
    }
  };

  return (
    <div className="App">
      <FormPessoa pessoa={current} insertPessoa={handleAddPessoa} />
      <TablePessoa pessoas={dados} handleClick={handleClick} />
    </div>
  );
}
export default App;
