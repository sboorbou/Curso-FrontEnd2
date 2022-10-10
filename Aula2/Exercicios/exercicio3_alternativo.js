/* 3 - Faça um programa que leia e valide as seguintes informações:
- Nome: maior que 3 caracteres;
- Idade: entre 0 e 150;
- Salário: maior que zero;
- Sexo: 'f' ou 'm';
- Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length */

// criar funções separadas para cada solicitação e validar direto nessa função

function VerificaNone() {
    nome = window.prompt('Digite um nome:')
    if ( nome.length > 3 ) {
        alert('O nome precisa ter mais de 3 caracteres')
        VerificaNone
    }
}

function VerificaIdade() {
    idade = window.prompt('Digite uma idade:')
    if ( idade > 0 || idade < 150 ) {
        alert('Idade precisa ser maior do que zero e menor do que 150')
        VerificaIdade
    }
}

