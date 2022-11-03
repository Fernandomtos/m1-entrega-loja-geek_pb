// Criando os elementos através do Javascript DOM.

// criei o elemento
// let h2SecaoFrames = document.createElement('h2');

// // inseri o conteúdo do elemento criado
// h2SecaoFrames.innerText = "Paintings";

// // E por fim determinar a hierarquia
// main.appendChild(h2SecaoFrames);

// // inserir depois a tag como filho do body

// A loja está dividida entre a seção de quadros decorativos(Decorative frames) e bonecos de ação(Action figure).

// const listaItens = {
//     image: "",
//     name: "",
//     price: 0,
//     type: "" // "Q" para quadros decorativos e "F" para boneco de ação.
// }

const itens = [
    {
        image: "./assets/img/painting/clock.jpg",
        name: "Relógio",
        price: "R$ 50,00",
        type: "Q"
    },
    {
        image: "./assets/img/painting/gamepad.jpg",
        name: "Controle Remoto",
        price: "R$ 80,00",
        type: "Q"
    },
    {
        image: "./assets/img/painting/personagem.jpg",
        name: "Personagem Starwars",
        price: "R$ 100,00",
        type: "Q"
    },
    {
        image: "./assets/img/actions/animewoman.jpg",
        name: "Mulher dançando",
        price: "R$ 30,00",
        type: "F"
    },
    {
        image: "./assets/img/actions/dragonballpersonagem.jpg",
        name: "Dragonball",
        price: "R$ 60,00",
        type: "F"
    },
    {
        image: "./assets/img/actions/starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: "R$ 100,00",
        type: "F"
    },
];

//  console.log(itens);

const listaFigures = [];
const listFrames = [];

function separateItens(itens) {
    for(let i=0; itens.length > i; i++) {
        if(itens[i].type == "Q") {
            listFrames.push(itens[i]);
        } else {
            listaFigures.push(itens[i]);
        }
    }
    return listaFigures, listFrames;
}

separateItens(itens);

// renderizando para tela a lista com Quadros.

let secaoFrames = document.querySelector('.secao-list-Frames');
let ul = document.querySelector('.cards');

for(let i=0; listFrames.length > i; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let spanNome = document.createElement('span');
    let spanValor = document.createElement('span');

    img.src = listFrames[i].image;
    console.log(img);
    spanNome.innerHTML = listFrames[i].name;
    spanValor.innerHTML = listFrames[i].price;

    div.setAttribute('class','carditem');
    spanNome.setAttribute('class','titulocard');
    spanValor.setAttribute('class','valorproduto')

    secaoFrames.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(a);
    a.appendChild(div);
    div.appendChild(img);
    div.appendChild(spanNome);
    div.appendChild(spanValor);
}
// console.log(listFrames);
// console.log(listaFigures);

let secaoFigure = document.querySelector('.secao-list-Figure');
let ulFigure = document.querySelector('.cards.cardsFigure');

for(let i=0; listaFigures.length > i; i++) {
    let lifi = document.createElement('li');
    let afi = document.createElement('a');
    let divfi = document.createElement('div');
    let imgfi = document.createElement('img');
    let spanNomefi = document.createElement('span');
    let spanValorfi = document.createElement('span');

    imgfi.src = listaFigures[i].image;
    spanNomefi.innerHTML = listaFigures[i].name;
    spanValorfi.innerHTML = listaFigures[i].price;

    divfi.setAttribute('class','cardfigure');
    spanNomefi.setAttribute('class','titulocard');
    spanValorfi.setAttribute('class','valorproduto')

    secaoFigure.appendChild(ulFigure);
    ulFigure.appendChild(lifi);
    lifi.appendChild(afi);
    afi.appendChild(divfi);
    divfi.appendChild(imgfi);
    divfi.appendChild(spanNomefi);
    divfi.appendChild(spanValorfi);
}