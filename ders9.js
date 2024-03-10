// const mathModule = require("./math");

// try {
//   console.log(mathModule.bolme(9, 0));
// } catch (error) {
//   throw new Error(error);
// }

// // function declaration
// function faktoriyel1(x) {
//   let carpim = 1;
//   for (let index = 1; index <= x; index++) {
//     carpim = carpim * index;
//   }
// }

// //function expression (arrow)
// const faktoriyel2 = (x) => {
//   let carpim = 1;
//   for (let index = 1; index <= x; index++) {
//     carpim = carpim * index;
//   }
// };
// const faktoriyel3 = function (x) {
//   if (x < 0) {
//     throw new Error("sayi sifirdan kucuk olamaz");
//   } else {
//     let carpim = 1;
//     for (let index = 1; index <= x; index++) {
//       carpim = carpim * index;
//     }
//     return carpim;
//   }
// };

// try {
//   let sonuc = faktoriyel3(4);
//   console.log("Hata olusmadi", sonuc);
// } catch (error) {
//   console.log("Hata olustu", error.message);
// } finally {
//   console.log("Faktoriyel3 fonksiyonu calisti");
// }

// const toplama = (sayi1, sayi2) => {
//   if (typeof sayi1 === "number" && typeof sayi2 === "number") {
//     return sayi1 + sayi2;
//   } else {
//     throw new Error("Sadece sayilarla islem yapilabilir!");
//   }
// };
// const cikarma = (sayi1, sayi2) => {
//   if (typeof sayi1 === "number" && typeof sayi2 === "number") {
//     return sayi1 - sayi2;
//   } else {
//     throw new Error("Sadece sayilarla islem yapilabilir!");
//   }
// };

// const carpma = (sayi1, sayi2) => {
//   if (typeof sayi1 === "number" && typeof sayi2 === "number") {
//     return sayi1 * sayi2;
//   } else {
//     throw new Error("Sadece sayilarla islem yapilabilir!");
//   }
// };

// const bolme = (sayi1, sayi2) => {
//   if (typeof sayi1 === "number" && typeof sayi2 === "number") {
//     if (sayi2 === 0) {
//       throw new Error("Bolen 0(sifir) olamaz!");
//     } else {
//       return sayi1 / sayi2;
//     }
//   } else {
//     throw new Error("Sadece sayilarla islem yapilabilir!");
//   }
// };

// const faktoriyel = function (x) {
//   if (typeof x === "number" && x > 0) {
//     let carpim = 1;
//     for (let index = 1; index <= x; index++) {
//       carpim = carpim * index;
//     }
//     return carpim;
//   } else {
//     throw new Error("Sadece pozitif sayilarla islem yapilabilir!");
//   }
// };

const opModule = require("./funcModule");

let islemTuru = "";

let operators = ["toplama", "cikarma", "carpma", "bolme", "faktoriyel"];
let randomOp = () => {
  for (let index = 0; index < operators.length; index++) {
    let randomNum = Math.floor(Math.random() * 5);
    islemTuru = operators[randomNum];
  }
};
randomOp();

try {
  if (islemTuru === "toplama") {
    console.log(
      `${islemTuru} islemi calisti, sonuc ${opModule.toplama(50, 2)}`
    );
  } else if (islemTuru === "cikarma") {
    console.log(
      `${islemTuru} islemi calisti, sonuc ${opModule.cikarma(50, 2)}`
    );
  } else if (islemTuru === "carpma") {
    console.log(`${islemTuru} islemi calisti, sonuc ${opModule.carpma(50, 2)}`);
  } else if (islemTuru === "bolme") {
    console.log(`${islemTuru} islemi calisti, sonuc ${opModule.bolme(50, 2)}`);
  } else if (islemTuru === "faktoriyel") {
    console.log(`${islemTuru} islemi calisti, sonuc ${opModule.faktoriyel(5)}`);
  }
} catch (error) {
  console.log(error.message);
}
