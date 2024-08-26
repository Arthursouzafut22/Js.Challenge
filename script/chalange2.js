function chalangeTho() {
    function converteBoolean(flag) {
        return flag.toString();
      }
      
      console.log(converteBoolean(true));
      
      const value = (valor) => {
        return valor;
      };
      console.log(value(true));
      
      function quadrosFrames(minutos, fps) {
        return (minutos + fps) * 60;
      }
      
      console.log(quadrosFrames(1, 1));
      
      
      function greeting(name) {
        if (name === "Mubashir") return name + "My Love !!";
        return "Hello" + name + "!";
      }
      
      console.log(greeting("Mubashir"));
      
      function doisArgumentos(a, b) {
        let soma = a + b;
        if (soma === 10) return true;
      }
      
      console.log(doisArgumentos(5, 5));
      
      function peloMenosUm(a, b) {
        return a === 10 || b === 10 ? true : false;
      }
      console.log(peloMenosUm(10, 5));
      
      function calcularCombustivel(distancia) {
        let distanciaTotal = distancia * 10;
        if (distanciaTotal < 100) return 100;
        return distanciaTotal;
      }
      
      console.log(calcularCombustivel(23.5));
      
      function maxNum(n1, n2) {
        if (n1 > n2) return n1;
        else if (n2 > n1) return n2;
      }
      console.log(maxNum(3, 7));
      
      function dados(num1, num2) {
        return [num1, num2];
      }
      console.log(dados(51, 21));
      
      function strinTho(string1, string2) {
        return string1.length === string2.length ? true : false;
      }
      
      console.log(strinTho("ab", "cb"));
      
      function estaVazia(string) {
        return string === "" ? true : false;
      }
      console.log(estaVazia("nada"));
      
      function divisivelNumber(numero) {
        return numero % 5 === 0 ? true : false;
      }
      console.log(divisivelNumber(-55));
      
      function divisivelMil(inteiro) {
        return inteiro % 100 === 0 ? true : false;
      }
      console.log(divisivelMil(100));
      
      function lenfStrin(string) {
        return string.length;
      }
      console.log(lenfStrin("apple"));
      
      function doisIguais(a, b) {
        if (a % b === 0) return true;
        else return false;
      }
      console.log(doisIguais(85, 4));
      
      function receberString(string) {
        return string;
      }
      console.log(receberString("10"));
      
      function invaliDiTy(base, altura) {
        let area = base * altura;
        if (area <= 0) return -1;
        return area;
      }
      console.log(invaliDiTy(10, 11));
      
      function parOunao(numero) {
        return numero % 2 === 0;
      }
      console.log(parOunao(2));
      
      function nomeSobreNome(nome, sobrenome) {
        return nome + ", " + sobrenome;
      }
      console.log(nomeSobreNome("arthur", "Santos"));
      
      function has_bugs(buggy_code) {
        if (buggy_code) {
          return "sad days";
        } else if (buggy_code) {
          return "its a good day";
        }
      }
      
      console.log(has_bugs(true));
      
      function contagemVotos(votos) {
        return votos.negativos - votos.positivos;
      }
      
      console.log(contagemVotos({ negativos: 2, positivos: 33 }));
      
      function retornaNegativo(numero) {
        return -numero;
      }
      console.log(retornaNegativo(50));
      
      function reverse(array) {
        return array.reverse();
      }
      console.log(reverse([10, 20, 30]));
      
      function podeOunao(idade, permissao) {
        return idade > 15 || permissao;
      }
      
      console.log(podeOunao(16, false));
      
      function incrementItems(arr) {
        let soma = 1;
        for (let i = 0; i < arr.length; i++) {
          arr[i] += soma;
        }
        return arr;
      }
      console.log(incrementItems([1, 2, 3, 4, 5]));
}

export default chalangeTho;