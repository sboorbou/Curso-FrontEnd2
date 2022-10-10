/* 
5- Crie uma função que receba um array de números (Valide os dados dentro do array, reaproveite a função criada no exercício 1) e depois calcule a média de todos os valores dentro do array. Execute a função mostrando na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'. */


function validaNumeros(numero) {
    if (!isNaN(numero)) {
        /// alert(`O numero ${numeros[i]} é um numero`)
        return numero
    }else{
        /// alert(`O numero ${numeros[i]} não é um numero`)
    }
}

function somaArrayNumeros(numeros) {
let total = 0;
let divisa = 0
for (let i = 0; i < numeros.length; i++) {
    if (validaNumeros(numeros[i])) {
        total = total + numeros[i]
        divisa++
    }
    total = total / divisa
}
return total;
}

alert(`A média dos valores do array é ${somaArrayNumeros([3,'A',6,7,3,4,4,5,6,7])}`)