let kelimeler = [
  "YAPAY",
  "KAZAK",
  "BARDAK",
  "NEDEN",
  "NICIN",
  "KUCUK",
  "KEK",
  "KUTU",
  "MEYVE",
  "MASA",
  "KITAP",
  "ADA",
  "MUM",
  "LIMON",
];
let sayilar = [101, 205, 18, 66, 93, 404, 342, 186, 515, 27, 24, 22, 336, 262];

for (let i = 0; i < kelimeler.length; i++) {
  if (kelimeler[i].split("").reverse().join("") === kelimeler[i]) {
    console.log(`${kelimeler[i]}: palindrom kelimedir`);
  } else {
    console.log(`${kelimeler[i]}: palindrom kelime degildir`);
  }
}

for (let i = 0; i < sayilar.length; i++) {
  if (
    sayilar[i].toString().split("").reverse().join("") === sayilar[i].toString()
  ) {
    console.log(`${sayilar[i]}: palindrom sayidir`);
  } else {
    console.log(`${sayilar[i]}: palindrom sayi degildir`);
  }
}
