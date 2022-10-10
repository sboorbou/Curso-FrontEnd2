/* 3 - Faça um programa que leia e valide as seguintes informações:
- Nome: maior que 3 caracteres;
- Idade: entre 0 e 150;
- Salário: maior que zero;
- Sexo: 'f' ou 'm';
- Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length */


function Enroll(){
    validador = true;
    while (validador == true) {
        nome = window.prompt("Digite seu Nome")
        if ( nome.length > 3 ) {
            validador = false;
        }else{
            alert('Nome precsa ter mais de 3 caracteres')
        }
    }
    validador = true;
    while (validador) {
        idade = window.prompt("Digite sua Idade")
        if ( idade > 0 || idade <= 150 ) {
            validador = false;
        }else{
            alert('Idade precisa estar entre 0 e 150')
        }
    }
    validador = true;
    while (validador) {
        salario = window.prompt("Digite seu Salario")
        if ( salario > 0 ) {
            validador = false;
        }else{
            alert('Salario precisa ser maior do que zero')
        }
    }
    validador = true;
    while (validador) {
        sexo = window.prompt('Digite Seu sexo: F para sexo Feminino M para sexo Masulino')
        if ( sexo.toLowerCase() == 'f' || sexo.toLowerCase() == 'm') {
            validador = false;
        }else{
            alert('Atente para preencher apenas f ou M para respectivamente feminino ou masculino')
        }
    }
    validador = true;
    while (validador) {
        ec = window.prompt("Digite Seu Estado Civil: 's', 'c', 'v', 'd'")
        if ( ec.toLowerCase() == 's' || ec.toLowerCase() == 'c' || ec.toLowerCase() == 'v' || ec.toLowerCase() == 'd') {
            validador = false;
        }else{
            alert('Preencha corretamente seu estado civil ')
        }
    }
}

Enroll()