function Titulo({person}) {
  return (
    <div>
      <h2> Welcome {person.nome}</h2>
      <h4>
        <p>
          A pessoa {person.nome} de sobrenome {person.sobrenome} e idade{" "}
          {person.idade}
        </p>
      </h4>
    </div>
  );
}

export default Titulo;