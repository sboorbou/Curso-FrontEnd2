/* 
2- Crie uma função que receba um array de números (crie uma segunda função para validar os dados dentro do array) e depois calcule a soma de  todos os valores dentro do array. Execute a função mostrando na tela o seguinte texto: 'A soma dos valores do array é ${(resultado)}'.
 */

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
    for (let i = 0; i < numeros.length; i++) {
        if (validaNumeros(numeros[i])) {
            total = total + numeros[i]
        }
        
    }
    return total;
}

alert(`o total é ${somaArrayNumeros([3,'A',6,7,3,4,4,5,6,7])}`)