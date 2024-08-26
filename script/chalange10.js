function chalangeDiz() {
  function repeatStrinTho(string) {
    let strin = "";

    for (let str of string) {
      let repet = str.repeat(2);
      strin += repet;
    }

    return strin;
  }

  console.log(repeatStrinTho("Hello World!"));

  function orderArray(array) {
    let reverse = array.sort();

    return reverse;
  }

  console.log(orderArray(["may", "april", "september", "august"]));

  function facamimRir(str) {
    if (str === "Make me smile") return str.replace("smile", ":D");
    else if (str === "Make me grin") return str.replace("grin", ":)");
    else if (str === "Make me sad") return str.replace("sad", ":(");

    return str;
  }

  console.log(facamimRir("Make me grin"));

  function digitoMaisAlto(numero) {
    const newString = numero.toString();
    const splitNew = newString.split("");

    const loop = splitNew.map((item) => Number(item));

    return Math.max(...loop);
  }

  console.log(digitoMaisAlto(77899));

  function apenasPares(array) {
    return array.filter((item, index) => {
      return (item % 2 === 0) & (index % 2 === 0);
    });
  }

  console.log(apenasPares([0, 1, 2, 3, 4]));

  function repetStin(string, numero) {
    return string.repeat(numero);
  }

  console.log(repetStin("ab", 3));

  function calcularDiferenca(objeto, limite) {
    const { skate, painting, shoes } = objeto;

    return skate + painting + shoes - limite;
  }

  console.log(calcularDiferenca({ skate: 200, painting: 200, shoes: 1 }, 400));

  function mediaArray(array) {
    const media = array.reduce((acc, it) => {
      return (acc + it) / array.length;
    });

    return media;
  }

  console.log(mediaArray([1, 5, 6]));
}

export default chalangeDiz;
