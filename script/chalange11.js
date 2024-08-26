function chalangeOnzi() {
  function somarNegativos(array) {
    return array.reduce((acc, it) => {
      return Math.abs(acc) + Math.abs(it);
    });
  }

  console.log(somarNegativos([2, -1, 4, 8, 10]));

  function ordemArrayCresceste(array) {
    return array.sort((a, b) => a - b);
  }

  console.log(ordemArrayCresceste([80, 29, 4, -95, -24, 85]));

  function encontreBomba(string) {
    if (string.includes("bomb")) return "Duck!!!";
    else return "There is no bomb, relax.";
  }
  console.log(encontreBomba("his goes boom!!!"));

  function comparaTion(element) {
    const el = element;
    return eval(el);
  }

  console.log(comparaTion("2===2"));

  function thauName(nome, num) {
    if (num === 1) return `Hello! ${nome.toUpperCase()}`;
    else return `Bye! ${nome.toUpperCase()}`;
  }

  console.log(thauName("arthur", 2));

  function formataNumber(array) {
    const subStrin = array.toString();
    const splitG = subStrin.split(",").join("");
    const formateSlice = splitG.slice(0, 3);
    const primeiroTeste = formateSlice
      .padStart(10, "(")
      .replace("((((((", "")
      .padEnd(10, ")")
      .replace(")))))", "");
    const segundoTeste = splitG
      .slice(3, 6)
      .padEnd(10, "-")
      .replace("------", "");
    const terceiroTeste = splitG.slice(-4);

    return `${primeiroTeste} ${segundoTeste}${terceiroTeste}`;
  }

  console.log(formataNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));

  function numberSimetrico(number) {
    const formateStr = number.toString();
    const splitReverse = formateStr.split("").reverse("");

    const mep = splitReverse.map((item) => Number(item));
    const numbSr = mep.join("");

    const check = Number(numbSr);

    return check === number;
  }

  console.log(numberSimetrico(1112111));
}

export default chalangeOnzi;
