console.log("\n Trabalhando com loops");

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Curitiba",
);

const idadeComprador = 19;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "Salvador";

console.log(" \n Destinos possíveis:")
console.log(listaDeDestinos);

const podeCompar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

// Usando o WHILE
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: " + destinoExiste);

if (podeCompar && destinoExiste) {
    console.log("Boa viagem!!!");
} else {
    console.log("Erro");
}

// Usando o FOR
for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}