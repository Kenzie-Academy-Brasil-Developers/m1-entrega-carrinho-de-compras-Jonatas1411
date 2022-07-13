
const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

let body = document.body;

let main = document.createElement("main");

let mercado = document.createElement("h1");
mercado.innerText = "Virtual Market";

let div = document.createElement("div");

let item = document.createElement("h2");
item.innerText = "Item";

let valor = document.createElement("p");
valor.innerText = "Valor";

let ul = document.createElement("ul");
let section = document.createElement("section");

let total = document.createElement("p");
total.innerText = "Total";

let valorTotal = document.createElement("p");

let button = document.createElement("button");
button.innerText = "Finalizar Compra";


body.appendChild(main);
div.append(item, valor)
section.append(total, valorTotal)
main.append(mercado, div, ul, section, button)


function listarProdutos(arr){
    
    for(let i = 0; i < arr.length; i++){
        let produto = arr[i];        
        Carrinho = compras(produto)
    }
}

listarProdutos(productsCart)

function compras(product) {
    let li = document.createElement("li");
    let name = document.createElement("p");
    let price= document.createElement("span");

    name.innerHTML = product.name;
    price.innerHTML = `R$ ${product.price}`;

    ul.appendChild(li);
    li.append(name, price);
}

function listarValorTotal(arrayProdutos){
    let resultado = 0;
    for(let i = 0; i < arrayProdutos.length; i++){
        let produto = arrayProdutos[i];        
        let valor = produto.price;
        resultado += valor;
        
    }
    return resultado
}

let valorCompra = listarValorTotal(productsCart)
valorTotal.innerText = `R$ ${valorCompra}`;
