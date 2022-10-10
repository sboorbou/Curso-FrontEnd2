/* 2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.  */

function NomeSenha() {
    nome = window.prompt("Digite seu nome");
    senha = window.prompt("Digite sua senha");
    if ( nome == senha ) {
        alert('A senha não pode contar o nome de usuário')
    }
}

NomeSenha()