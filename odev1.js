let havaDurumu = ["Yagmurlu", "Gunesli", "Karli"];
let min = 0;
let max = 2;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

switch (havaDurumu[randomNumber]) {
  case "Yagmurlu":
    console.log("Bugun hava yagmurlu olacak gibi semsiyeni unutma");
    break;
  case "Gunesli":
    console.log("Bugun gokyuzu acik ve hava sicak sahilin tadini cikar");
    break;
  case "Karli":
    console.log("Bugun kar yagisi bekleniyor atki ve bereni mutlaka yanina al");
    break;
}
