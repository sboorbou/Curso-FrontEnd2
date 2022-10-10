/// 9. Faça um programa que receba 10 números, calcule e imprima a soma dos números pares e a soma dos números primos.


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares = [];
impares = [];
let numeroPares = 0;
let numeroImpares = 0;

for ( i = 0; i < numeros.length; i++ ) {
    if ( (numeros[i] % 2) == 0 ) {
        pares.push(numeros[i]);
    }else {
        impares.push(numeros[i]);
    }
}

/// alert(`Pares ${pares} Impar ${impares}`);

for ( i = 0; i < pares.length; i++ ) {
    numeroPares = numeroPares + pares[i];
}

for ( i = 0; i < impares.length; i++ ) {
    numeroImpares = numeroImpares + impares[i];
}

alert(`A soma dos numeros pares é ${numeroPares} e a soma dos numeros impares é ${numeroImpares}`)