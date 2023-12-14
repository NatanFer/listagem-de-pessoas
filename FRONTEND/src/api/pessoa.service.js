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

export {apiAddPessoa, apiGetPessoas};