function chalangeDizSeven() {
  function zipIt(homens, mulheres) {
    return homens.length === mulheres.length
      ? [
          [mulheres[0], homens[0]],
          [mulheres[1], homens[1]],
        ]
      : "sizes don't match";
  }

  console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));

  function removeABC(string) {
    return string.includes("a") || string.includes("b") || string.includes("c")
      ? string.replace("a", "").replace("b", "").replace("c", "")
      : null;
  }

  console.log(removeABC("This might be a bit hard"));

  const freeShipping = (pedido) => {
    const setValue = Object.values(pedido).reduce((acc, it) => acc + it);

    return setValue > 50 ? "Frete gratis" : "Vai pagar frete";
  };

  console.log(
    freeShipping({
      Monopoly: 11.99,
      "Secret Hitler": 35.99,
      Bananagrams: 13.99,
    })
  );

  function checkEquals(array1, array2) {
    const mep = array1.every((item1, index) => {
      const tt = item1 === array2[index];
      return tt;
    });

    return mep;
  }

  console.log(checkEquals([1, 2], [1, 2]));

  function objecTrueOfFalse(value) {
    return typeof value === "object" ? true : false;
  }

  console.log(objecTrueOfFalse({ nome: "arthur" }));
}

export default chalangeDizSeven;
