function chalanGesOne() {
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
}

export default chalanGesOne;
