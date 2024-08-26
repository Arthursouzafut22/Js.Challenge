function chalangeDixVinte() {
  const removeSpecialCharacters = (str) => {
    const especiais = [
      ".",
      "|",
      "@",
      "#",
      "$",
      "%",
      "*",
      "&",
      "(",
      ")",
      "+",
      "=",
      "-",
    ];

    let storage = "";

    especiais.map((item) => {
      if (str.includes(item)) {
        storage = str = str.replace(item, "");
      }
    });

    return storage;
  };

  console.log(removeSpecialCharacters("D0n$c sed 0di*0 du1&"));

  const uniqueArr = (array) => {
    const filterArr = array.filter((item) => {
      let minNumber = 1;
      return item >= minNumber;
    });

    let arrNew = [];

    new Set(filterArr).forEach((item) => {
      arrNew.push(item);
    });
    return arrNew;
  };

  console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));

  const rpsJogo = (jogador1, jogador2) => {
    if (jogador1 === "pedra" && jogador2 === "tesoura") {
      return "Jogador 1 venceu";
    }
    if (jogador1 === "tesoura" && jogador2 === "papel") {
      return "Jogador 1 venceu";
    }
    if (jogador1 === "pedra" && jogador2 === "papel") {
      return "jogador 2 venceu";
    } else if (jogador2 === "pedra" && jogador1 === "tesoura") {
      return "jogador 2 venceu";
    } else if (jogador2 === "tesoura" && jogador1 === "papel") {
      return "jogador 2 venceu";
    } else if (jogador2 === "pedra" && jogador1 === "papel") {
      return "jogador 2 venceu";
    } else if (jogador1 === jogador2) {
      return "Jogo empatado";
    }
  };

  console.log(rpsJogo("tesoura", "papel"));

  function validatePIN(pin) {
    const validate = pin.length > 4 || pin.length < 4 || pin.length === 0;
    const letras = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "n",
      "m",
      "o",
      "p",
      "q",
      "s",
      "v",
      "x",
      "w",
      "y",
      "z",
    ];
    if (validate) return false;

    let caixa;
    for (const alfa of letras) {
      const valid = pin.includes(alfa) ? false : true;
      return (caixa = valid);
    }

    return caixa;
  }

  console.log(validatePIN("1234"));

  function letterAtPosition(posicão) {
    const alfaBeto = [
      "",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "x",
      "w",
      "y",
      "z",
    ];
    const index = alfaBeto[posicão];
    if (posicão === 0 || posicão > 26) return "Inválido";

    return `${index}`;
  }

  console.log(letterAtPosition(4));
}

export default chalangeDixVinte;
