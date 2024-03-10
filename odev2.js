let vizeNotlari = [];
let finalNotlari = [];
let notlar = [];
let toplam = 0;
let harfNotlari = [];

for (let i = 0; i < 30; i++) {
  vizeNotlari.push(Math.floor(Math.random() * 101));
  finalNotlari.push(Math.floor(Math.random() * 101));
  notlar.push((vizeNotlari[i] * 40) / 100 + (finalNotlari[i] * 60) / 100);
  toplam += notlar[i];
}

let ortalama = toplam / 30;

for (let index = 0; index < 30; index++) {
  if (finalNotlari[index] < 35) {
    harfNotlari.push("FF");
    console.log(
      "Final sinavindan 35'ten dusuk bir puan aldiginiz icin dogrudan kaldiniz"
    );
  } else if (notlar[index] > ortalama) {
    harfNotlari.push("AA");
    console.log("Tebrikler dersten gectiniz");
  } else if (notlar[index] === ortalama) {
    harfNotlari.push("CC");
    console.log("Tebrikler dersten gectiniz");
  } else {
    harfNotlari.push("FF");
    console.log("Maalesef dersten kaldiniz");
  }
}

// console.log(vizeNotlari, finalNotlari, notlar, harfNotlari);

console.log(notlar, harfNotlari);
