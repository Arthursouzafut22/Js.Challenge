
function twentyOne() {

    function century(seculo) {
        let caixa = "";
      
        const sec = [
          { tempo: [1001, 1100], mensagem: "século 11" },
          { tempo: [1101, 1200], mensagem: "século 12" },
          { tempo: [1201, 1300], mensagem: "século 13" },
          { tempo: [1301, 1400], mensagem: "século 14" },
          { tempo: [1401, 1500], mensagem: "século 15" },
          { tempo: [1501, 1600], mensagem: "século 16" },
          { tempo: [1601, 1700], mensagem: "século 17" },
          { tempo: [1701, 1800], mensagem: "século 18" },
          { tempo: [1801, 1900], mensagem: "século 19" },
          { tempo: [1901, 2000], mensagem: "século 20" },
          { tempo: [2001, 2100], mensagem: "século 21" },
        ];
      
        sec.map(({ tempo, mensagem }) => {
          if (seculo >= tempo[0] && seculo <= tempo[1]) {
            return (caixa = mensagem);
          }
        });
      
        return caixa;
      }
      
      console.log(century(1450));
      
      
      function replaceVowel(string) {
        const num = ["1", "2", "3", "4", "5"];
      
        const mep = [...string].map((item) => {
          return item
            .replace("a", num[0])
            .replace("e", num[1])
            .replace("i", num[2])
            .replace("o", num[3])
            .replace("u", num[4]);
        });
      
        return mep.join("");
      }
      
      console.log(replaceVowel("karachi"));
      

      const genereteID = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let random;
        let id = "";
      
        for (let i = 0; i < 1000; i++) {
          const mat = Math.floor(1000 + Math.random() * i);
          random = mat;
        }
      
        const splitLetters = [...letters];
        for (let i = 0; i < splitLetters.length; i++) {
          const mm = Math.floor(Math.random() * i);
          const randoLetter = splitLetters[mm];
      
          id += randoLetter;
        }
      
        return `${id.at(Math.random() * 20) + id.at(Math.random() * 15)}${random}`;
      };
      
      console.log(genereteID());
}

export default twentyOne;