/* 10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres. */


let idades = [20,21,22,23,24,25,26,27,28,29]
let pesos =  [50,51,52,53,53,60,60,61,61,61]
/// sexo
/// masculino = 1
/// feminino = 2
let sexo =   [1,2,2,1,1,1,1,2,2,1]

homens = 0
mulheres = 0

mediaIdadeHomens = 0
mediaPesoMuheres = 0

for (let i = 0; i <= sexo.length; i++) {
    if ( sexo[i] == 1 ) {
        homens++
        mediaIdadeHomens = mediaIdadeHomens + idades[i]
    }else {
        if ( !isNaN(pesos[i]) ) {
            mulheres++
            mediaPesoMuheres = mediaPesoMuheres + pesos[i]
        }
        alert(`${mediaPesoMuheres}`)
    }
}

mediaIdadeHomens = mediaIdadeHomens / homens
mediaPesoMuheres = mediaPesoMuheres / mulheres
alert(`O total de homens é ${homens} com idade media de ${mediaIdadeHomens} e o total de mulheres é ${mulheres} com peso medio de ${mediaPesoMuheres}`)