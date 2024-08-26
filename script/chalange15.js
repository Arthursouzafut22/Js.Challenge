function chalangeQuin() {
  function recebiNumber(n) {
    const soma = somaN(n);
    return soma;
  }

  console.log(recebiNumber(10));

  function somaN(n) {
    return n + 10;
  }

  function newObj(obj) {
    return Object.entries(obj);
  }

  console.log(newObj({ a: 1, b: 2 }));

  function concatArray(...argu) {
    return [].concat(...argu);
  }

  console.log(concatArray([1], [2], [3], [4], [5], [6], [7]));

  function totalPrice(quantia, total) {
    const prices = Math.floor(quantia[0] / 0.25);
    const prices1 = Math.floor(quantia[1] / 0.1);
    const prices2 = Math.floor(quantia[2] / 0.05);
    const prices3 = Math.floor(quantia[3] / 0.01);

    let soma = prices + prices1 + (prices2 + prices3);

    if (soma > total) return true;
    else return false;
  }

  console.log(totalPrice([10, 0, 0, 50], 3.85));

  function quantyInteiro(a, b, c) {
    if (a === b && b === c && c === a) {
      return 3;
    } else if (a === b && c !== a && c !== b) {
      return 2;
    } else if (b === a && c !== a && c !== a) {
      return 2;
    } else if (c === a && b !== a && b !== c) {
      return 2;
    } else if (b === c && b !== a && c !== a) {
      return 2;
    } else if (a !== b && b !== c && c !== a) {
      return 0;
    }
  }

  console.log(quantyInteiro(0, 3, 3));

  function replaceString(string) {
    let dadoos = "";

    if (string.includes("a") || string.includes("e")) {
      const repla = [...string].map((item) =>
        item.replace("a", "4").replace("e", "3")
      );
      dadoos = repla.join("");
    } else if (string.includes("i") || string.includes("s")) {
      const repla2 = [...string].map((item) =>
        item.replace("i", "5").replace("s", "6")
      );
      dadoos = repla2.join("");
    }

    return dadoos;
  }

  console.log(replaceString("become a coder"));
}

export default chalangeQuin;
