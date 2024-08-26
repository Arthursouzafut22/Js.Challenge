function chalangeDozi() {
  function numberHashes(string) {
    const trasforMStr = [...string];
    const filterHash = trasforMStr.filter((n) => n === "#").length;
    const filterPlus = trasforMStr.filter((n) => n === "+").length;

    return [filterHash, filterPlus];
  }

  console.log(numberHashes("##++"));

  function firstLetter(array) {
    let str = "";

    for (const first of array) {
      str += first[0];
    }

    return str;
  }

  console.log(firstLetter(["Harry", "Newt", "Luna", "Cho"]));

  function reverseTheCase(string) {
    const strArr = [...string];
    let caixa = "";

    for (const str of strArr) {
      let value = str;

      if (value.includes(value.toUpperCase())) {
        caixa += value.replace(
          `${value.toUpperCase()}`,
          `${value.toLowerCase()}`
        );
      } else if (value.includes(value.toLowerCase())) {
        caixa += value.replace(
          `${value.toLowerCase()}`,
          `${value.toUpperCase()}`
        );
      }
    }

    return caixa;
  }

  console.log(reverseTheCase("MANY THANKS"));

  function validatyPostal(codigo) {
    const removeS = codigo.trim();

    if (codigo !== removeS) {
      alert("erro");
      return false;
    }
    if (codigo.length > 5) {
      console.log("Apenas 5 digitos permitidos");
      return false;
    }

    return codigo;
  }

  console.log(validatyPostal("63636"));
}

export default chalangeDozi;
