console.log("Atribuição de variáveis");

//const idade = 25;
const primeiroNome = "Valéria";
const sobrenome = "Garcia";

console.log(primeiroNome + sobrenome);
console.log(primeiroNome , sobrenome);
console.log(primeiroNome + " " + sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

// nome = nome + sobrenome; // erro: a variavel NOME deveria ser tipo let para isso funcionar!

const nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);

// usar let para as variáveis que variam 
let contador = 0;
contador = contador + 1;

let idade;
idade = 32;
idade = idade + 1;
console.log(idade);