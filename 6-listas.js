console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
    "Salvador", 
    "São Paulo",
    "Curitiba",
);

console.log("Destinos possíveis:")
console.log(listaDeDestinos);

// adicionando elementos na lista 
listaDeDestinos.push("Rio de Janeiro");
console.log(listaDeDestinos);

// removendo elementos na lista 
listaDeDestinos.splice(2,1); // posição 2, 1 elemento
console.log(listaDeDestinos);

console.log(listaDeDestinos[0]);
