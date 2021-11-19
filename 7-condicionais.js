console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Curitiba",
);

const idadeComprador = 15;
const estaAcompanhada = true;
const passagemComprada = true;

console.log("Destinos possíveis:")
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(0, 1); // removendo item da lista
// }
// else if (estaAcompanhada) {
//     console.log("O comprador está acompanhado")
//     listaDeDestinos.splice(0, 1); // removendo item da lista
// }
// else {
//     console.log("Comprador é menor de idade e não posso vender! ")
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade ou está acompanhado")
    listaDeDestinos.splice(0, 1); // removendo item da lista
}
else {
    console.log("Comprador é menor de idade e não posso vender!")
}

console.log(listaDeDestinos + "\n");

console.log("Embarque:");
if(idadeComprador >= 18 && passagemComprada) {
    console.log("Boa viagem");
}
else {
    console.log("Não pode embarcar")
}

