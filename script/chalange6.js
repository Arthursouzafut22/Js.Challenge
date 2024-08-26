function chalangeSeven() {
  function alavancaClass(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].includes("e", "f", "l")) return "first class lever";
      else if (matrix[i].includes("e", "l", "f")) return "second class lever";
      else if (matrix[i].includes("f", "e", "l")) return "third class lever";
    }
  }
  console.log(alavancaClass(["f", "e", "l"]));

  function intOuString(element) {
    if (typeof element === "number") return 'int"';
    else if (typeof element === "string") return '"str"';
  }
  console.log(intOuString("ola"));

  function eneDecimoNumber(num) {
    if (num === 1) return 0 + " is first even number";
    else if (num === 2) return 2 + " is second even number";
    else if (num === 3) return 4 + " is quarto even number";
    else if (num === 6) return 6 + " is sexto even number";
    else if (num === 8) return 8 + " is oitavo even number";
    else if (num === 10) return 10 + " is decimo even number";
    else if (num > 10) return "Perdi as conta ja";
  }

  console.log(eneDecimoNumber(20));

  function olaMundo(numero) {
    const mutiplos3 = [3, 6, 9, 12, 18, 21, 24, 27];
    const multiplos5 = [5, 10, 20, 25, 35, 40];
    const multiplos35 = [0, 15, 30, 45];

    const achei3 = mutiplos3.find((n) => n === numero);
    const achei5 = multiplos5.find((n) => n === numero);
    const achei35 = multiplos35.find((n) => n === numero);

    if (numero === achei3) return "multiplo por 3";
    else if (numero === achei5) return "multiplo por 5";
    else if (numero === achei35) return "multiplo por 3 é 5";
  }

  console.log(olaMundo(9));

  function toInt(string) {
    return Number(string);
  }

  console.log(toInt("7"));

  function toStr(number) {
    return number.toString();
  }

  console.log(toStr(6));

  function buuRrrr(num) {
    let strin = "Burp";
    let slic = strin.charAt(2);
    let rep = slic.repeat(num);

    return strin.replace("r", rep);
  }

  console.log(buuRrrr(3));

  function espacoStrin(string) {
    return string.replace(/(.)/g, "$1 ");
  }

  console.log(espacoStrin("Futebol"));

  function quintoArguments() {
    if (arguments.length === 0 && arguments.length < 5)
      return "Not enough arguments";

    return typeof arguments[5];
  }

  console.log(quintoArguments(1, 2, 3, 4, 5));

  const totalXicaras = (xicara) => {
    let total = Math.floor(xicara / 6);
    return total + xicara;
  };

  console.log(totalXicaras(213));

  const incrivelEdabit = (string) => {
    if (string.includes("edabit")) return string.replace("is", "is");
    else return string.replace("is", "is not");
  };

  console.log(incrivelEdabit("edabit is amazing"));

  const repetLast = (string, numero) => {
    const letra = "o";
    return string.replace(/([A-Za-z])\s*$/, letra.repeat(numero));
  };

  console.log(repetLast("Hello", 3));
}

export default chalangeSeven;
