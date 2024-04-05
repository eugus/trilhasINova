//Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.
let nota1 = 8
let nota2 = 9
let nota3 = 7

let media = (nota1 + nota2 + nota3)/3
console.log(`DESAFIO 1, R= ${media}`)

//Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.
let menor 
let maior
let lista = [15, 8, 90, 75, 102, 6, 2]
for (let i = 1; i < lista.length; i++) {
    if (lista[i] < lista.length) {
        menor = lista[i]
    }
    if (lista[i] > lista.length) {
        maior = lista[i]
    }
}
console.log(`DESAFIO 2, R= ${menor}`)
console.log(`DESAFIO 2, R= ${maior}`)

//Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19.
let listaFrascos = [12, 5, 23, 17, 8, 14, 3, 19]
listaFrascos.sort((a, b) => a - b)
console.log(`DESAFIO 3, R= ${listaFrascos}`)

//Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.
let numPrimos = [23, 16, 11, 8, 19, 14, 5, 21];

function primos(num) {
    for (let divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

for (let i = 0; i < numPrimos.length; i++) {
    if (primos(numPrimos[i])) {
        console.log(`DESAFIO 4, R= ${numPrimos[i]}  é primo.`);
    }
}

//Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"

let frase = "What is Lorem Ipsum?";

let contarEspacos = frase.split(" ").length - 1

let caracter = frase.length

let contarAsLetras = caracter - contarEspacos;

console.log(`DESAFIO 5, R= A frase "${frase}" tem ${contarAsLetras} caracteres contando sem espaçamentos.`);


//Escreva um programa para encontrar o fatorial do número 12.
function fatorialNumero(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }
    let fatorial = 1
    for(let i = 2; i <= numero; i++){
         fatorial *= i;
    }   
    return fatorial
}
let numero = 12
let calcularFatorial = fatorialNumero(numero);
console.log(`DESAFIO 6, R= fatorial de ${numero} é ${calcularFatorial}`)


//Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra. Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.

let produto1 = 2.50
let produto2 = 3.75
let produto3 = 1.99

const somaProdutos = produto1 + produto2 + produto3
console.log(`DESAFIO 7, R= O valor total da compra: ${somaProdutos}`)

//Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.

let multa = 0.50
let dias = 7
let valorDaMulta = multa * dias
console.log(`DESAFIO 8, R= Valor da multa: ${valorDaMulta}`)

//Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após três ataques?

let hp = 100;
let ataque = 20
let hpFinal = hp - (20 * 3)

console.log(`DESAFIO 9, R= ${hpFinal}`)

//Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY
function contarLetrasMaiusculas(frase){
    let count = 0;
    for(let i = 0; i <= frase.length; i++){
        if(frase[i] >= "A" && frase[i] <= "Z"){
            count++
        }  
    }
    return count;

}

frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

let contarAsLetrasDaFrase = contarLetrasMaiusculas(frase)

console.log(`DESAFIO 10, R= Está frase tem ${contarAsLetrasDaFrase} letras maiusculas.`)

//Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(data){
  let anoAtual = 2024;
  let mesAtual = 4;
  let diaAtual = 4;

  //let caractersDaData = data.split("-");
  let passarAnoParaInt = dataDeNacimento.slice(0, 10);
  let anoDoNacimento = parseInt(passarAnoParaInt)

  let passarMesParaInt = dataDeNacimento.slice(5, 10)
  let mesDeNascimento = parseInt(passarMesParaInt)

  let passarDiaParaInt = dataDeNacimento.slice(8, 10)
  let diaDoNascimento = parseInt(passarDiaParaInt)

  let idade = anoAtual - anoDoNacimento

  if(mesAtual < mesDeNascimento || (mesAtual === mesDeNascimento && diaAtual < diaDoNascimento)){
      idade--
  }

  return idade
}

let dataDeNacimento = "2005-02-27"
const idade = calcularIdade(dataDeNacimento)

console.log(`DESAFIO 11, R= A sua idade é de ${idade}`);
