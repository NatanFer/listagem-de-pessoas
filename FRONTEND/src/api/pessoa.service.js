const URL_API = "http://localhost:7000/api";

const apiGetPessoas = async () => {
  try {
    const resposta = await fetch(`${URL_API}/pessoa`);

    if (!resposta.ok) {
      throw new Error("Falha na requisição");
    }

    return await resposta.json();
  } catch (error) {
    throw new Error("Não foi possível carregar os dados");
  }
};

const apiAddPessoa = async (novaPessoa) => {
  try {
    const res = await fetch(`${URL_API}/pessoa/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaPessoa),
    });

    if (!res.ok) {
        throw new Error('Houve erro na adição do usuário')
    }

    const result = await res.json();
    return result;

  } catch (error) {
    throw new Error(error.message)
  }
};

const apiUpdatePessoa = async (id, pessoaEdit) => {
  try {
    const res = await fetch(`${URL_API}/pessoa/atualizar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pessoaEdit),
    });

    if (!res.ok) {
      throw new Error('Response not ok: ', res)
    }
    return await res.json();;

  } catch (error) {
    throw new Error(error.message)
  }
};

const apiDeletePessoa = async (id) => {
  try {
    const res = await fetch(`${URL_API}/pessoa/deletar/${id}`, {
      method: 'DELETE'
    });

    if (!res.ok) {
      throw new Error('Houve erro na atualização da pessoa')
    }

    const result = await res.json();
    return result;

  } catch (error) {
    throw new Error(error.message)
  }
};

const apiGetPessoaById = async (id) => {
  try {
    const res = await fetch(`${URL_API}/pessoa/${id}`);

    if (!res.ok) {
      throw new Error('Houve na busca da pessoa. Pessoa não identificada')
    }

    const result = await res.json();
    return result;

  } catch (error) {
    throw new Error(error.message)
  }
};

export { apiAddPessoa, apiGetPessoas, apiGetPessoaById, apiUpdatePessoa, apiDeletePessoa };