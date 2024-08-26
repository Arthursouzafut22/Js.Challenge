function chalangeSix() {
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
    if (operador === "+") return num1 + num2;
    else if (operador === "-") return num1 - num2;
    else if (operador === "*") return num1 * num2;
    else if (operador === "/") return num1 / num2;
  }

  console.log(operadorNum(1, 2, "-"));

  function saoDevdd(array1, array2) {
    let arr1 = array1.includes("pal de sal");
    let arr2 = array2.includes("pal de sal");

    return arr1 === arr2;
  }

  console.log(
    saoDevdd(["", "carne", "hhhh"], ["pal de sal", "carne", "pao doce"])
  );

  function lengthParans() {
    return arguments.length;
  }
  console.log(lengthParans("v", "s", "s", 2));

  function saoMigos(nome) {
    if (nome === "Gilvan") return "Arthur eu so seu pai";
    else if (nome === "irma") return "Arthur eu so sua irma";
    else if (nome === "cunhado") return "Arthur eu so seu cunhadinho";
    else if (nome === "primo") return "Arthur eu so seu primo";
  }

  console.log(saoMigos("Gilvan"));

  function arrayStrinng(array) {
    let conversao = array.toString().split(",");
    return conversao.length === 0 ? [] : conversao;
  }

  console.log(arrayStrinng(["abc", 123, "def", 456]));

  function receberNome(string) {
    const frente = "fut";
    return string.length < frente.length ? frente.repeat(3) : false;
  }

  console.log(receberNome("fu"));

  function tiposDeDados(array) {
    return array.map((element) => typeof element);
  }

  console.log(tiposDeDados([1, 2, "bola", true]));

  function ePlural(string) {
    return string.endsWith("s");
  }

  console.log(ePlural("magic"));

  function concatenandoString(string) {
    return string[0] + string[string.length - 1];
  }

  console.log(concatenandoString("durga"));

  function fatiasPizzas(total, pessoas, cada) {
    let divisao = Math.floor((total /= pessoas));

    return divisao % 5 === cada;
  }

  console.log(fatiasPizzas(24, 12, 2));

  function repetString(string) {
    let init = string.substring(0, 2) + "...";

    return init.repeat(2) + string + "?";
  }

  console.log(repetString("incredible"));

  function recebiArray(array) {
    return array.map(Number);
  }
  console.log(recebiArray(["12", "13", "14", "15"]));
}

export default chalangeSix;
