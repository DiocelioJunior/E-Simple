/**
 * Carrega um arquivo JSON a partir de um caminho fornecido.
 *
 * @async
 * @function carregarJSON
 * @param {string} caminho - O caminho para o arquivo JSON a ser carregado.
 * @returns {Promise<Object>} Uma Promise que resolve para os dados do arquivo JSON.
 * @throws {Error} Lança um erro se a requisição falhar ou se a resposta não for um JSON válido.
 */

export async function carregarJSON(caminho) {
  const resposta = await fetch(caminho);
  const dados = await resposta.json();
  return dados;
}
