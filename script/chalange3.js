function chalangeThee() {
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
}

export default chalangeThee;
