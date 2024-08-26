function chalangeDizseis() {
  function letterCapitalize(string) {
    return string.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
  }

  console.log(letterCapitalize(["samuel", "MABELLE", "letitia", "meridith"]));

  const arrayTeste = [
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--",
  ];

  function filterType(type) {
    const filterTipoX = type.filter((item) => {
      return item.includes("--ox") || item.includes("--xx");
    }).length;

    const filterTipoO = type.filter((item) => {
      return (
        item.includes("--o") && item.includes("-o") && item.includes("--oo")
      );
    }).length;

    return [filterTipoX, filterTipoO];
  }

  console.log(filterType(arrayTeste));

  function guerraDeNumbers(numeros) {
    const filterPar = numeros
      .filter((item) => item % 2 === 0)
      .reduce((acc, it) => {
        return acc + it;
      });

    const filterImpar = numeros
      .filter((item) => item % 2 !== 0)
      .reduce((acc, it) => {
        return acc + it;
      });

    return `valor e de: ${Math.abs(filterPar - filterImpar)}`;
  }

  console.log(guerraDeNumbers([12, 90, 75]));

  function lastDig(a, b, c) {
    const multi = a * b;
    const ultimoNumber = Number(multi.toString().split("").splice(-1));
    const cFormat = Number(c.toString().split("").splice(-1));

    return ultimoNumber === cFormat ? true : false;
  }
  console.log(lastDig(55, 226, 5190));
}

export default chalangeDizseis;
