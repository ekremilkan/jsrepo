// let randomSayi = null;

// for (let index = 0; index >= 0; index++) {
//   randomSayi = Math.floor(Math.random() * 11);
//   console.log(randomSayi);
//   if (randomSayi === 10) {
//     console.log(index + 1, ".ci dongude kirildi");
//     break;
//   }
// }

/////////****************/////////////

// let sayi = Math.floor(Math.random() * 11);
// const ciftSayi = () => {
//   console.log("bu bir cift sayidir", sayi);
// };
// const tekSayi = () => {
//   console.log("bu bir tek sayidir", sayi);
// };
// sayi % 2 === 0 ? ciftSayi(sayi) : tekSayi();

///////////***************/////////////

// Callback Functions

// const toplama = (sayi1, sayi2, cb) => {
//   //   console.log("Sonuc: ", sayi1 + sayi2);
//   cb(sayi1 + sayi2);
// };

// const ekranaYazdir = (x) => {
//   console.log(x);
// };

// toplama(7, 7, ekranaYazdir);

const displayErrors = (err) => {
  console.log("Hata olustu", err, "Tarih:", new Date());
};

const displayResponse = (res) => {
  console.log("Cevap olustu", res, "Tarih:", new Date());
};

function bolme(a, b) {
  if (b === 0) {
    throw new Error("Bolen sayi 0 olamaz");
  } else {
    return a / b;
  }
}

try {
  displayResponse(bolme(9, 0));
} catch (error) {
  displayErrors(error.message);
}
