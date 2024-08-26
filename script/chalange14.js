function chalangeTorze() {
  function quantyDigitos(number) {
    let strNumber = number.toString();

    return strNumber.length;
  }

  console.log(quantyDigitos(1305955581031));

  function quatyDigitoTho(number) {
    let caixa1 = "";

    for (let i = 0; i < number; i++) {
      const valor = i.toFixed();

      caixa1 += valor;
    }

    return caixa1.length;
  }

  console.log(quatyDigitoTho(10));

  function montyObjeto(obj, nome, value) {
    return (obj = { nome: nome, value: value });
  }

  console.log(montyObjeto({}, "Brutus", 300));

  function generationFamily(x, y) {
    let femea = ["meu!", "filha", "neta", "bisneta", "mãe", "avó", "bisavó"];
    let macho = ["meu!", "filho", "Neto", "Bisneto	", "pai", "	avô", "bisavô"];

    if (y === "m") {
      return macho[x];
    } else if (y === "f") {
      return femea[x];
    }
  }

  console.log(generationFamily(2, "m"));

  function removeFalse(array) {
    return array.filter((item) => {
      return (
        item >= 1 ||
        item === true ||
        (typeof item === "string" && item !== "" && item !== false)
      );
    });
  }

  console.log(removeFalse([0, 1, false, 2, "", 3]));
}

export default chalangeTorze;
