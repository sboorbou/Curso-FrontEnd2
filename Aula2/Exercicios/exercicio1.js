/* 1 - Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.  */


function PedirNota() {
    nota = window.prompt("Digite uma nota entre 1 e 10 ")
    if (nota < 1  || nota >10 ) {
        PedirNota()
    }
}

PedirNota()