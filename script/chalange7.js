function chalangeEigth() {
  const umTrue = (a, b) => {
    if (a || b) return true;
    else if (a) return true;
    else if (b) return true;
    else {
      return "not found";
    }
  };

  console.log(umTrue(5, 0));

  const climaAtual = (clima) => {
    if (clima) return `Today, I am feeling ${clima}`;
    else if (!clima) return "Today, I am feeling neutral";
  };

  console.log(climaAtual(""));

  const destructArray = (array) => {
    let [um, _, , , ,] = array;
    return um;
  };

  console.log(destructArray(["bola", "amor", "dinheiro", "love"]));

  const contarSilabas = (silaba) => {
    var regexVocales = /[aeiouáéíóú]/gi;
    var vocales = silaba.match(regexVocales);
    return vocales ? vocales.length : 0;
  };

  console.log(contarSilabas("nanana"));

  function temString(string) {
    if (string) return " Do not " + string;
    else return string;
  }

  console.log(temString(""));

  function regexCaps(string1, string2) {
    let regexCaps = new RegExp("^" + string1 + "$");

    return regexCaps.test(string2);
  }

  console.log(regexCaps("hello", "hello"));

  const user = {
    name: "John",
    email: "john@example.com",
    city: "Phoenix",
    state: "AZ",
    country: "USA",
  };

  const { name, email, rest } = user;

  function strinVezes(string, numero) {
    if (typeof arguments[0] !== "string") return "Not A String !!";
    else return string.repeat(numero);
  }

  console.log(strinVezes("java ", 3));

  function tamanhoString(string) {
    let cont;
    for (let i = 0; i < string.length; i++) {
      cont = i;
    }

    return cont + 1;
  }

  console.log(tamanhoString("Amor"));

  function metadeNumber(numero) {
    let div = numero / 2;
    let umQuarto = numero / 4;
    let umOitavo = numero / 8;

    return [div, umQuarto, umOitavo];
  }

  console.log(metadeNumber(22));

  function quantosLados(numero) {
    let matrix = [
      "círculo",
      "semicírculo",
      "triângulo",
      "quadrado",
      "Pentágono",
      "hexágono",
      "heptágono",
      "octógono",
      "nonágono",
      "decágono",
    ];

    return matrix[numero - 1];
  }

  console.log(quantosLados(3));

  function multiplicadoPorDois(matrix) {
    return matrix.map((element) => element * 2);
  }

  console.log(multiplicadoPorDois([2, 5, 3]));
}

export default chalangeEigth;
