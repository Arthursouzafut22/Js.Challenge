function chalangeTen() {
  function perdidaoMultidao(string) {
    const regx = /(?<=[A-Z])[a-z](?=[A-Z])/g;
    const methString = string.match(regx);

    return methString.toString().split(",").join("");
  }

  console.log(perdidaoMultidao("bEEFGBuFBRrHgUHlNFYaYr"));

  function doisArray(array1, array2) {
    return [...array1, ...array2].sort((a, b) => a - b);
  }

  console.log(doisArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

  function quemEmaior(array1, array2) {
    if (array1 > array2) return true;
    else return false;
  }

  console.log(quemEmaior([true, 10, "zebra"], [true, 10, "zebra"]));

  function negacaoZero(num) {
    const zero = num--;
    const um = num++;

    return zero, Math.abs(um);
  }

  console.log(negacaoZero(1));

  function divisaoNumerica(numero) {
    const div1 = numero / 2;
    const div2 = numero / 2;

    if (numero % 2 !== 0) return [Math.floor(div1), Math.ceil(div2)];

    return [div1, div2];
  }

  console.log(divisaoNumerica(1));

  function filterPares(array) {
    return array.filter((n) => n % 2 === 0);
  }

  console.log(filterPares([1, 3, 2, 6, 4, 8]));

  function filterString(array) {
    return array.filter((item) => typeof item === "number");
  }

  console.log(filterString([1, 2, "aasf", "1", "123", 123]));

  function erro(numero) {
    const erros = [
      "Check the fan: e1",
      "Emergency stop: e2",
      "Pump Error: e3",
      "c: e4",
      "Temperature Sensor Error: e5",
    ];

    let value = [];

    for (let err of erros) {
      value.push(err);
    }

    return value[numero - 1];
  }

  console.log(erro(4));
}

export default chalangeTen;
