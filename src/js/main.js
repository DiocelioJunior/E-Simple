// Importa a função carregarJSON do arquivo fetchJSON.js
import { carregarJSON } from './utils/fetchJSON.js';

// Chama a função carregarJSON para carregar o arquivo JSON de produtos
carregarJSON('../../data/products.json')
    .then(produtos => {
        // Exibe os produtos carregados no console para depuração
        console.log(produtos);

        // Obtém o elemento HTML onde os produtos serão exibidos
        const productsContainer = document.getElementById('products');

        // Itera sobre cada produto no array de produtos
        produtos.forEach(produto => {
            // Cria um elemento div para representar o produto
            const productElement = document.createElement('div');
            productElement.className = 'product'; // Adiciona a classe CSS 'product'

            // Define o conteúdo HTML do elemento com os dados do produto
            productElement.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}"> <!-- Imagem do produto -->
                <h3>${produto.nome}</h3> <!-- Nome do produto -->
                <p>Preço: R$ ${produto.preco}</p> <!-- Preço do produto -->
                <p>${produto.descricao}</p> <!-- Descrição do produto -->
            `;

            // Adiciona o elemento do produto ao container de produtos
            productsContainer.appendChild(productElement);
        });
    })
    .catch(erro => {
        // Exibe uma mensagem de erro no console caso ocorra um problema ao carregar os produtos
        console.error('Erro ao carregar produtos:', erro);
    });
