const user = {
    name: 'Priscila',
    lastName: 'de Oliveira Vaz Duque',
};

function getUserWithFullName (user){
    return{
    ...user, //spread operator(...) - é um recurso que permite acessar o conteúdo de um objeto iterável
    /**  A sintaxe do spread operador é simples e fácil de lembrar. Consiste em três pontos (...). 
    Esses três pontos são seguidos pelo iterável (... user), cujo conteúdo você deseja acessar.*/
    fullName: `${user.name} ${user. lastName}` // Já esse recurso são as "Templates Literals" - permite concatenar valores
    }
}

const userWithFullName = getUserWithFullName (user);

console.log(userWithFullName);