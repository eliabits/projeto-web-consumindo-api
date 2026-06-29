// Seleciona os elementos da página
const botao = document.querySelector("#btn-carregar");
const areaProdutos = document.querySelector("#produtos");
const status = document.querySelector("#status");

// Função para carregar os produtos
async function carregarProdutos() {

    status.textContent = "Carregando produtos...";

    try {

        const resposta = await fetch("https://fakestoreapi.com/products?limit=6");

        const produtos = await resposta.json();

        areaProdutos.innerHTML = "";
        status.textContent = "";

        produtos.forEach(function (produto) {

            areaProdutos.innerHTML += `
                <div class="shadow p-4">
                    <img src="${produto.image}" alt="${produto.title}">

                    <h2 class="font-bold text-lg mt-2">
                        ${produto.title}
                    </h2>

                    <p class="preco">
                        R$ ${produto.price}
                    </p>

                    <p class="text-sm mt-2">
                        ${produto.description.substring(0, 80)}...
                    </p>

                    <button class="bg-blue-600 text-white px-4 py-2 rounded mt-4">
                        Comprar
                    </button>
                </div>
            `;

        });

    } catch (erro) {

        console.log(erro);
        status.textContent = "Erro ao carregar os produtos.";

    }

}

// Chama a função quando o botão for clicado
botao.addEventListener("click", carregarProdutos);