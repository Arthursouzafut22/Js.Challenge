function chalangeDixOit() {
  function marathonDistance(perimetro) {
    const som = perimetro.reduce((acc, it) => Math.abs(acc) + it);

    return som === 25 ? true : false;
  }

  console.log(marathonDistance([1, 9, 5, 8, 2]));

  function numbersSum(matrix) {
    const fill = matrix
      .filter((item) => typeof item === "number")
      .reduce((acc, it) => {
        return acc + it;
      }, 0);

    return fill;
  }

  console.log(numbersSum([1, 2, 3, 4, 5, true]));

  function matchLastItem(matrix) {
    const fullLetter = matrix.splice(-1).join();

    return fullLetter === matrix.join("") ? true : false;
  }

  console.log(matchLastItem([1, 1, 1, "11"]));

  const carro = {
    marca: "Honda",
    modelo: 2020,
    placa: "ABC-12345",
  };

  function receberCarro({ marca, modelo, placa }) {
    return `marca: ${marca} modelo: ${modelo} placa: ${placa}`;
  }

  console.log(receberCarro({ ...carro }));

  function somaNumSpred(...numero) {
    return numero.reduce((acc, it) => acc + it);
  }

  console.log(somaNumSpred(1, 2, 3, 4, 5, 6, 7, 8, 9));

  function maskify(string) {
    const newArray = [...string];
    const newElement = newArray.splice(-4, 4).join("");
    const hastaG = newArray.splice(0, 12).map((item) => {
      return item.replace(item, "#");
    });

    string === "1" ? "1" : null;
    string === "" ? "" : null;

    return hastaG.join("") + newElement;
  }

  console.log(maskify("tBy>L/cMe+?<j:6n;C~H"));
}

export default chalangeDixOit;
