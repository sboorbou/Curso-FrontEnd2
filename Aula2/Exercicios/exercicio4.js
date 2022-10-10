/* 4 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação. */



let popu_A = 80000
let grow_A = 1.03
let grow_B = 1.015
let popu_B = 200000
let anos = 0

while (popu_A < popu_B) {
    popu_A = popu_A * grow_A
    popu_B = popu_B * grow_B 
    anos++
}

alert(`Levou ${anos} anos para pais A passar pais B`)