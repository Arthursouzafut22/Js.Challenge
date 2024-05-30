function cubes(a) {
  return a ** a / a;
}
console.log(cubes(5));

function lessThan100(a, b) {
  let soma = a + b;
  if (soma < 100) return true;
  else return false;
}

console.log(lessThan100(50, 30));

function lessThanOrEqualToZero(num) {
  if (num <= 0) return true;
  else if (num > 0) return false;
  return num;
}

console.log(lessThanOrEqualToZero(0));

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

console.log(animals(2, 3, 5));

function rr(a) {
  return `something ${a}`;
}

console.log(rr("Bob Jane"));

function hours(horas) {
  return horas * (60 * 60);
}
console.log(hours(10));

function concat(nome) {
  let result;
  let concat = nome + "Edabit";
  return (result = concat);
}
console.log(concat("Mubashir"));

function printArray(number) {
  var newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
console.log(printArray(6));

function swap(a, b) {
  b = b;
  a = a;
  return [a, b].reverse();
}
console.log(swap(100, 200));

function saoIguais(num1, num2) {
  if (num1 === num2) return "True";
  else return "False";
}

console.log(saoIguais(4, 10));

function ladoTriangulo(lado1, lado2) {
  let intervalo = -1;
  return lado1 + lado2 + intervalo;
}

console.log(ladoTriangulo(5, 7));

function cubes(a) {
  return a ** a;
}
console.log(cubes(5));

function jogoDeBasquete(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

console.log(jogoDeBasquete(5, 0, 2));

function converteSegundos(horas, minutos) {
  return horas * 3600 + minutos * 60;
}
console.log(converteSegundos(2, 0));

// 1 hora tem 60 minutos
// 60 minutos tem
// 1 minuto tem 60 segundos
// 60s x 60 = 120

function isSeven(x) {
  return x == "7" ? true : false;
}
console.log(isSeven(7));

function somarigualdade(a, b) {
  return a === b ? true : false;
}
console.log(somarigualdade(1, 2));

function jogoAposta(prob, prize, pay) {
  let maior = prob * prize;

  return maior > pay ? true : false;
}

console.log(jogoAposta(0.9, 1, 2));

function converteBoolean(flag) {
  return flag.toString();
}

console.log(converteBoolean(true));

const value = (valor) => {
  return valor;
};
console.log(value(true));

function quadrosFrames(minutos, fps) {
  return (minutos + fps) * 60;
}

console.log(quadrosFrames(1, 1));

// 1 minuto tem 60s

function greeting(name) {
  if (name === "Mubashir") return name + "My Love !!";
  return "Hello" + name + "!";
}

console.log(greeting("Mubashir"));

function doisArgumentos(a, b) {
  let soma = a + b;
  if (soma === 10) return true;
}

console.log(doisArgumentos(5, 5));

function peloMenosUm(a, b) {
  return a === 10 || b === 10 ? true : false;
}
console.log(peloMenosUm(10, 5));

function calcularCombustivel(distancia) {
  let distanciaTotal = distancia * 10;
  if (distanciaTotal < 100) return 100;
  return distanciaTotal;
}

console.log(calcularCombustivel(23.5));

function maxNum(n1, n2) {
  if (n1 > n2) return n1;
  else if (n2 > n1) return n2;
}
console.log(maxNum(3, 7));

function dados(num1, num2) {
  return [num1, num2];
}
console.log(dados(51, 21));

function strinTho(string1, string2) {
  return string1.length === string2.length ? true : false;
}

console.log(strinTho("ab", "cb"));

function estaVazia(string) {
  return string === "" ? true : false;
}
console.log(estaVazia("nada"));

function divisivelNumber(numero) {
  return numero % 5 === 0 ? true : false;
}
console.log(divisivelNumber(-55));

function divisivelMil(inteiro) {
  return inteiro % 100 === 0 ? true : false;
}
console.log(divisivelMil(100));

function lenfStrin(string) {
  return string.length;
}
console.log(lenfStrin("apple"));

function doisIguais(a, b) {
  if (a % b === 0) return true;
  else return false;
}
console.log(doisIguais(85, 4));

function receberString(string) {
  return string;
}
console.log(receberString("10"));

function invaliDiTy(base, altura) {
  let area = base * altura;
  if (area <= 0) return -1;
  return area;
}
console.log(invaliDiTy(10, 11));

function parOunao(numero) {
  return numero % 2 === 0;
}
console.log(parOunao(2));

function nomeSobreNome(nome, sobrenome) {
  return nome + ", " + sobrenome;
}
console.log(nomeSobreNome("arthur", "Santos"));

function has_bugs(buggy_code) {
  if (buggy_code) {
    return "sad days";
  } else if (buggy_code) {
    return "its a good day";
  }
}

console.log(has_bugs(true));

function contagemVotos(votos) {
  return votos.negativos - votos.positivos;
}

console.log(contagemVotos({ negativos: 2, positivos: 33 }));

function retornaNegativo(numero) {
  return -numero;
}
console.log(retornaNegativo(50));

function reverse(array) {
  return array.reverse();
}
console.log(reverse([10, 20, 30]));

function podeOunao(idade, permissao) {
  return idade > 15 || permissao;
}

console.log(podeOunao(16, false));

function incrementItems(arr) {
  let soma = 1;
  for (let i = 0; i < arr.length; i++) {
    arr[i] += soma;
  }
  return arr;
}
console.log(incrementItems([1, 2, 3, 4, 5]));

function podeBeber(idade, intervalo) {
  return idade >= 18 && intervalo;
}

console.log(podeBeber(19, false));

function futuroPessoa(populacao, numero) {
  let trintaDecada = numero * 360;
  return trintaDecada + populacao;
}

console.log(futuroPessoa(3248, 6));

const a = "Arthur";
const b = "Santos";
const c = "Souza";
const templete = `Muito Prazer meu Nome chama ${a} ${b} ${c} muito bom te conhecer`;
console.log(templete);

const add2 = (x) => x + 2;
console.log(add2(10));

function nice(nice) {
  return nice ? "yeah" : "nope";
}

console.log(nice(true));

function truOunao(numero) {
  if (numero === 0) return true;
  else if (numero < 0) return false;
  else return true;
}
console.log(truOunao(10));

function comprimentoString(string) {
  let comprimeto = string.length;
  return comprimeto % 2 === 0 ? true : false;
}

console.log(comprimentoString("futebol"));

function pintarParede(quadrados, altura, largaura) {
  return Math.floor(quadrados / (altura * largaura));
}

console.log(pintarParede(10, 15, 12));

function calcularExpoente(base, expoente) {
  return base ** expoente;
}

console.log(calcularExpoente(3, 3));

function ultimoElement(array) {
  return array.pop();
}

console.log(ultimoElement([1, 2, 3, 4, 5]));

function jogadoresImpostores(jogadores, impostores) {
  let verificando = 100 * (jogadores / impostores);
  return parseInt(verificando) + "%";
}

console.log(jogadoresImpostores(1, 10));

function anoBissexto(ano) {
  return ano % 4 === 0 ? true : false;
}

console.log(anoBissexto(1968));

function anoSexto(ano) {
  return ano % 4 === 0 ? true : false;
}

console.log(anoSexto(2021));

function removerCaracter(letra) {
  return letra.slice(1);
}

console.log(removerCaracter("apple"));

function booleanNumbers(bollean) {
  return !bollean ? 1 : 0;
}

console.log(booleanNumbers(0));

const namee = (nome) => `Hello meu nome e ${nome}`;
console.log(namee("Arthur"));

const parOuImpar = (numero) => (numero % 2 === 0 ? "even" : "odd");

console.log(parOuImpar(3));

const imparOuNao = (impar) => (impar % 2 !== 0 ? "impar" : false);

console.log(imparOuNao(2));

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(0));

function starBook(cubo) {
  let soma = 2;
  if (cubo > 1) return (cubo *= soma);
  else if (cubo === 1) return 1;

  return cubo;
}

console.log(starBook(2));

function retornaArray(array) {
  return array.join("");
}

console.log(retornaArray([1, 2, 3, "a", "s", "dAAAA"]));

function cocon(array1, array2) {
  return array1.concat(array2);
}
console.log(cocon(["bom"], [1, 2, 3, 4, 5]));

function pegarIndice(array, index) {
  return array.indexOf(index);
}

console.log(pegarIndice(["Uva", "Banana", "Cereja"], "Banana"));

function oneNumber(number) {
  if (number === "um") return 1;
  else if (number === "dois") return 2;
  else if (number === "tres") return 3;
  else if (number === "quatro") return 4;
  else if (number === "cinco") return 5;
  else if (number === "seis") return 6;
  else if (number === "sete") return 7;
  else if (number === "oito") return 8;
  else if (number === "oito") return 8;
  else if (number === "dez") return 10;
  else if (number === "zero") return 0;
}

console.log(oneNumber("oito"));

function inclu(array, element) {
  return array.includes(element);
}

console.log(inclu([1, 2, 3, 4, 5], 4));

function boollee(n) {
  return n % 2 === 0 ? "evan" : "old";
}

console.log(boollee(2));

function rubikCubo(comprimento) {
  return comprimento * comprimento * 6;
}

console.log(rubikCubo(3));

function quantosPassageiros(passageiros) {
  let carro = 5;
  return Math.ceil(passageiros / carro);
}

console.log(quantosPassageiros(15));

function temEspaco(string) {
  return string.indexOf(" ") >= 0;
}

console.log(temEspaco(""));

function tamanhosObj(sizes) {
  let { width, length, height } = sizes;
  return width * length * height;
}

console.log(tamanhosObj({ width: 2, length: 5, height: 1 }));

function numPositivo(numero) {
  return -1 * numero;
}

console.log(numPositivo(-44));

function terminaComN(frase) {
  let termina = frase.endsWith("n");
  return termina;
}
console.log(terminaComN("nan"));

function saoTrue(a, b) {
  if (a === b) return "both";
  if (a && b) return "first";
  else if (a || b) return "second";
  else return "neither";
}

console.log(saoTrue(0, 880));

function menorQueMaior(num1, num2, array) {
  let maior = array.filter((numero) => numero > num1);
  let menor = array.filter((n) => n < num2);

  return [maior, menor];
}
console.log(menorQueMaior(4, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function numeroArgumentos() {
  return arguments.length;
}

console.log(numeroArgumentos("e"));

function operadorNum(num1, num2, operador) {

  if(operador === '+') return num1 + num2;
  else if(operador === '-') return num1 - num2;
  else if(operador === '*') return num1 * num2;
  else if(operador === '/') return num1 / num2;
  
}

console.log(operadorNum(1, 2, "-"));


function saoDevdd(array1,array2) {
  let arr1 = array1.includes('pal de sal');
  let arr2 = array2.includes('pal de sal');

  return arr1 === arr2
}

console.log(saoDevdd(['','carne','hhhh'],['pal de sal','carne', 'pao doce']))



function lengthParans() {
  return arguments.length
}
console.log(lengthParans('v','s','s',2))

function saoMigos(nome) {

  if(nome === 'Gilvan') return 'Arthur eu so seu pai';
  else if(nome === 'irma') return 'Arthur eu so sua irma';
  else if(nome === 'cunhado') return 'Arthur eu so seu cunhadinho';
  else if(nome === 'primo') return 'Arthur eu so seu primo';

}

console.log(saoMigos('Gilvan'));

function arrayStrinng(array) {

  let conversao = array.toString().split(',')
  return conversao.length === 0 ? [] : conversao;
}

console.log(arrayStrinng(["abc", 123, "def", 456]))


function receberNome(string) {
  const frente = 'fut'
   return string.length < frente.length ? frente.repeat(3) : false
}

console.log(receberNome('fu'));

function tiposDeDados(array) {
  return array.map((element) => typeof element);
}

console.log(tiposDeDados([1,2, 'bola', true]));


function ePlural(string) {
  return string.endsWith('s')
}

console.log(ePlural('magic'));


function concatenandoString(string) {
  return string[0] + string[string.length - 1];

}

console.log(concatenandoString('durga'));



function fatiasPizzas(total, pessoas, cada) {
  let divisao = Math.floor(( total /= pessoas ));

  return divisao % 5 === cada;
}

console.log(fatiasPizzas(24,12,2));



function repetString(string) {
  let init = string.substring(0,2) + '...';

  return init.repeat(2) + string + '?';
}

console.log(repetString('incredible'));



function recebiArray(array) {
  return array.map(Number)
}

console.log(recebiArray(['12','13','14','15']))


const cabeca = [1,2]
const cuada = [3,4]

const str = [...cabeca, ...cuada];


const umTrue  = (a,b) => {
  if( a || b) return true
  else if(a) return true
  else if(b) return true
  else {
    return "not found"
  }
}

console.log(umTrue(5,0));

const climaAtual = (clima) => {

  if(clima) return `Today, I am feeling ${clima}`;
  else if(!clima) return "Today, I am feeling neutral";

}

console.log(climaAtual(''));


const destructArray = (array) => {

  let tho = [um,dois,tres,quatro] = array;
  return tho[0];
}

console.log(destructArray(['bola','amor','dinheiro','love']));



const contarSilabas = (silaba) => {

  var regexVocales = /[aeiouáéíóú]/ig;
  var vocales = silaba.match(regexVocales)
  return vocales ? vocales.length : 0;

};

console.log(contarSilabas('nanana'));



function temString(string) { 

  if(string) return " Do not " + string;
  else return string
}

console.log(temString(''));


function regexCaps(string1, string2) {

  let regexCaps = new RegExp("^" + string1 + "$");

  return regexCaps.test(string2);
}

console.log(regexCaps("hello", "hello"));

const user = { name: "John", 
email: "john@example.com",
city: "Phoenix", 
state: "AZ",
country: "USA"}

const  { name, email, rest } = user ;



function strinVezes(string,numero) {

  if(typeof arguments[0] !== 'string') return 'Not A String !!';
  else return string.repeat(numero);
}

console.log(strinVezes('java ', 3));



function tamanhoString(string) {

  let cont;
  for(let i = 0; i < string.length; i++) {
    cont = i
  }

  return cont + 1;
}

console.log(tamanhoString('Amor'));


function metadeNumber(numero) {

  let div = (numero / 2);
  let umQuarto = (numero / 4);
  let umOitavo = (numero / 8);

  return [div, umQuarto, umOitavo];


}

console.log(metadeNumber(22));



function quantosLados(numero) {

  let matrix = ["círculo","semicírculo","triângulo","quadrado","Pentágono","hexágono","heptágono","octógono","nonágono","decágono"];

  return matrix[numero - 1];

}

console.log(quantosLados(3));


function multiplicadoPorDois(matrix) {
  return matrix.map((element) => element * 2)
}

console.log(multiplicadoPorDois([2,5,3]));




function alavancaClass(matrix) {

  
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i].includes("e", "f", "l")) return "first class lever";
    else if(matrix[i].includes("e", "l", "f")) return 'second class lever';
    else if(matrix[i].includes("f", "e", "l")) return "third class lever"

  }
}
console.log(alavancaClass(["f", "e", "l"]));



function intOuString(element) {

  if(typeof element === 'number') return 'int"';
  else if(typeof element === 'string') return '"str"'

}
console.log(intOuString('ola'));



function eneDecimoNumber(num) {
  
  if(num === 1) return 0 + ' is first even number';
  else if(num === 2) return 2 + ' is second even number';
  else if(num === 3) return 4 + ' is quarto even number';
  else if(num === 6) return 6 + ' is sexto even number';
  else if(num === 8) return 8 + ' is oitavo even number';
  else if(num === 10) return 10 + ' is decimo even number';
  else if(num > 10) return 'Perdi as conta ja'

}


console.log(eneDecimoNumber(20));



function olaMundo(numero) {

  const mutiplos3 = [3,6,9,12,18,21,24,27];
  const multiplos5 = [5,10,20,25,35,40];
  const multiplos35 = [0,15,30,45];

  const achei3 = mutiplos3.find((n) => n === numero);
  const achei5 = multiplos5.find((n) => n === numero);
  const achei35 = multiplos35.find((n) => n === numero);

  if(numero === achei3) return 'multiplo por 3';
  else if(numero === achei5) return 'multiplo por 5';
  else if(numero === achei35) return 'multiplo por 3 é 5';

}

console.log(olaMundo(9));



function toInt(string) {
  // coverte string em inteiro
  return Number(string);
}

console.log(toInt('7'));


function toStr(number) {
    // coverte number em string
    return number.toString();
}

console.log(toStr(6));



function buuRrrr(num) {
  
  let strin = 'Burp';
  let slic = strin.charAt(2);
  let rep =  slic.repeat(num);

  return strin.replace("r", rep);

}

console.log(buuRrrr(3));



function espacoStrin(string) {
  return string.replace(/(.)/g, '$1 ');
}

console.log(espacoStrin('Futebol'));



function quintoArguments() {

  if(arguments.length === 0 && arguments.length < 5) return "Not enough arguments";

  return typeof arguments[5];


}


console.log(quintoArguments(1,2,3,4,5))



const totalXicaras = (xicara) => {

  let total = Math.floor(xicara / 6);
  return total + xicara;

}

console.log(totalXicaras(213));




const incrivelEdabit = (string) => {

  if(string.includes('edabit')) return string.replace('is','is');
  else  return string.replace("is",'is not'); 

}

console.log(incrivelEdabit("edabit is amazing"));



const repetLast = (string,numero) => {

  const letra = 'o'
  return string.replace(/([A-Za-z])\s*$/,letra.repeat(numero));
}

console.log(repetLast('Hello',3));




const perimetroKm = (custo) => {

  let primeiroKm = custo / 3;
  let segundoKm = custo / 2;

  return Math.floor(primeiroKm + segundoKm - primeiroKm);

};

 const res = perimetroKm(99);

 console.log(res);





 function quantyPalmas(string,sub) {

  const regex = new RegExp(sub,'gi');
  const match = string.match(regex);

  return match ? match.length : 0;


 }

 console.log(quantyPalmas('ClaClaClaClap!','cla'));



 
 function passoPalits(passos) {
  let total = passos * 5

  if(passos === 1) return 6

  return total + 1;

}

console.log(passoPalits(4));




function menorMaior(array) {

  const numMaior = Math.max(...array);
  const numMenor = Math.min(...array);

  return [numMaior,numMenor].sort((a,b) => a - b);

}
console.log(menorMaior([1]));






function natalChegando(data) {

  const diaMes = data.getDate();
  const mes = data.getMonth();

  return diaMes === 24 && mes === 11 ? true : false;

}

console.log(natalChegando(new Date(3000, 11, 14)));




function aninhaArray(array1,array2) {

  let valueMinimo = Math.min(...array1);
  let valueMinim2 = Math.min(...array2);

  let valorMaximo = Math.max(...array1);
  let valorMaximo2 = Math.max(...array2);

  if(valueMinimo > valueMinim2) return true;
  else if(valueMinimo === valueMinim2) return false;

   if(valorMaximo < valorMaximo2) return true;
   else if(valorMaximo === valorMaximo2) return false;
   else return false;

}


console.log(aninhaArray([9, 9, 8], [8, 9, 10]));




function regexCofe(string) {

  const regex = /\b([01]\d|2[0-3]):([0-5]\d)\b/g

  return string.match(regex);

}

console.log(regexCofe('Café da manhã às 09:00 no quarto 123:456'))




let promis = new Promise((resolve) => {

  setTimeout(() => {
    resolve('edabit')
  },300)

})

console.log(promis)








