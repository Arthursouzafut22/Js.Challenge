function chalangeFor() {
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
}

export default chalangeFor;
