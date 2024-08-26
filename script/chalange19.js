function chalangeDizNov() {
  const doubleLetters = (string) => {
    let caixa = "";
    let caixa2 = "";
    [...string].filter((item) => {
      return (caixa += item);
    });

    const copia = [...string];
    new Set(copia).forEach((letter) => {
      return (caixa2 += letter);
    });

    return caixa2 !== caixa;
  };

  console.log(doubleLetters("munchki"));

  const firstPlace = (string) => {
    const newCarros = [...string].filter((item) => item !== "=").join("");
    const newStrada = [...string].filter((item) => item === "=").join("");

    if (newStrada === string) return "No car available";
    if (newCarros === string) return "No road available";
    else return newCarros[newCarros.length - 1];
  };

  console.log(firstPlace("====b===O===e===U=A=="));

  const validateEmail = (email) => {
    const splic = [...email];
    const termina = splic.splice(-4).join("").includes(".com");
    const simbolos = [
      "#",
      ",",
      ">",
      "<",
      ";",
      ">",
      "/",
      "?",
      "%",
      "*",
      "(",
      ")",
      "$",
      "+",
      "-",
      "=",
      "|",
      "&",
    ];
    for (const simbol of simbolos) {
      if (email.includes(simbol)) return false;
    }

    if (email === "@gmail.com" || email === "gmail") return false;
    if (!splic.includes("@")) return false;
    if (termina) return true;
    if (!termina) return false;
  };
  console.log(validateEmail("hello@edbit.com"));
}

export default chalangeDizNov;
