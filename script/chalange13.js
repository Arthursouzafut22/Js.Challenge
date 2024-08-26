function chalangeTrizi() {
  function quantyTrues(array) {
    return array.filter((item) => item === true).length;
  }

  console.log(quantyTrues([true, false, true, false, true]));

  function recebiStr(string) {
    return retornoStr(string);
  }

  console.log(recebiStr("ola"));

  function retornoStr(str) {
    return str;
  }

  function jogoTabuleiro(posicao, alcance) {
    let totalDado = 6;
    let valor = posicao > alcance ? true : false;
    let igual = posicao === alcance ? true : false;

    if (valor) {
      return false;
    }
    if (igual) {
      return false;
    } else if (
      posicao + totalDado > alcance ||
      posicao + totalDado === alcance
    ) {
      return true;
    } else {
      return false;
    }
  }

  console.log(jogoTabuleiro(7, 6));

  function divisorStrin(string, divisor) {
    if (string === "s") {
      return divisor * 4;
    }
    if (string === "c") {
      return divisor * 6.28;
    }
  }

  console.log(divisorStrin("c", 4));
}

export default chalangeTrizi;
