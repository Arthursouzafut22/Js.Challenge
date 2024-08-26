function chalangeNine() {
  const perimetroKm = (custo) => {
    let primeiroKm = custo / 3;
    let segundoKm = custo / 2;

    return Math.floor(primeiroKm + segundoKm - primeiroKm);
  };

  const res = perimetroKm(99);

  console.log(res);

  function quantyPalmas(string, sub) {
    const regex = new RegExp(sub, "gi");
    const match = string.match(regex);

    return match ? match.length : 0;
  }

  console.log(quantyPalmas("ClaClaClaClap!", "cla"));

  function passoPalits(passos) {
    let total = passos * 5;

    if (passos === 1) return 6;

    return total + 1;
  }

  console.log(passoPalits(4));

  function menorMaior(array) {
    const numMaior = Math.max(...array);
    const numMenor = Math.min(...array);

    return [numMaior, numMenor].sort((a, b) => a - b);
  }
  console.log(menorMaior([1]));

  function natalChegando(data) {
    const diaMes = data.getDate();
    const mes = data.getMonth();

    return diaMes === 24 && mes === 11 ? true : false;
  }

  console.log(natalChegando(new Date(3000, 11, 14)));

  function aninhaArray(array1, array2) {
    let valueMinimo = Math.min(...array1);
    let valueMinim2 = Math.min(...array2);

    let valorMaximo = Math.max(...array1);
    let valorMaximo2 = Math.max(...array2);

    if (valueMinimo > valueMinim2) return true;
    else if (valueMinimo === valueMinim2) return false;

    if (valorMaximo < valorMaximo2) return true;
    else if (valorMaximo === valorMaximo2) return false;
    else return false;
  }

  console.log(aninhaArray([9, 9, 8], [8, 9, 10]));

  function regexCofe(string) {
    const regex = /\b([01]\d|2[0-3]):([0-5]\d)\b/g;

    return string.match(regex);
  }

  console.log(regexCofe("Café da manhã às 09:00 no quarto 123:456"));

  let promis = new Promise((resolve) => {
    setTimeout(() => {
      resolve("edabit");
    }, 300);
  });

  console.log(promis);

  function somaResistencia(array) {
    return array.reduce((ac, it) => ac + it);
  }

  console.log(somaResistencia([16, 3.5, 6]));

  function maiorTroca(numero) {
    const strin = numero.toString();
    const primReplace = strin
      .slice(0, 1)
      .replace(strin[1], strin[0])
      .replace("", strin[1]);

    let numberFormat = Number(primReplace);

    if (numberFormat < numero || numberFormat === numero) return true;
    else if (numberFormat > numero) return false;
  }

  console.log(maiorTroca(18));
}

export default chalangeNine;
