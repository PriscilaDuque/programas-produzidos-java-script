/** Hoisting (içamento/elevação): Em uma função as variáveis podem ser usadas antes de serem inicializadas.
 * isso porque, no javascript, as declarações são colocadas na memória antes de executar qualquer segmento de código,
 * por isso, é possível utilizar uma função ou variável antes de fazer sua inicialização */ 

// É uma boa prática sempre declarar uma função ou variável antes de usá-la

function firstName(name) {
    console.log("O meu primeiro nome é: " + name);
}

firstName("Priscila");


lastName("Duque");

function lastName(name) {
    console.log("O meu último nome é: " + name);
}