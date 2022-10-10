/* 6- Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:
let vetor = ["a", "b", "a", "a", "c", "b"]
Aqui, temos:
 vetor[0] = "a"; 
 vetor[1] = "b";
 vetor[2] = "a";
 vetor[3] = "a";
 vetor[4] = "c";
 vetor[5] = "b";
Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, crie uma função que retornar este elemento. */


function analisaVetor(vetor) {
    let aparece = 0
    let naoAparece = 0
    for (let i = 0; i < vetor.length; i++) {
        aparece = 0
        for (let j = 0; j < vetor.length; j++ ) {
            if (vetor[i] === vetor[j]) {
                aparece += 1
            }
        }
        if (aparece < 2 ) {
            naoAparece = vetor[i]
        }
    }
    return naoAparece
}
var1 = ["a", "b", "a", "a", "c", "b"]
alert(`O unico caractere que não repete é ${analisaVetor(var1)}`)