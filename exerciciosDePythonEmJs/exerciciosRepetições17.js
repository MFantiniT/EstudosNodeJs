//Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

let num = 3
let fatorial = 1

for (i = num; num > 0; num--) {
    fatorial = num * fatorial
}
console.log(fatorial)