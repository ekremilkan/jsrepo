/*
// let isim = "Ekrem";
// let yas = 27;
// let sayilar = [1, 2, 3, 4, 5];
// let dogruMu = true;
// let adress = {
//   sokak: "Marti",
//   mahalle: "Dumlupinar",
//   il: "Bursa",
// };
// console.log("isim degiskeninin tipi:", typeof isim);
// console.log("yas degiskeninin tipi:", typeof yas);
// console.log("sayilar degiskeninin tipi:", typeof sayilar);
// console.log("dogruMu degiskeninin tipi:", typeof dogruMu);
// console.log("adress degiskeninin tipi:", typeof adress);
// console.log("adress degiskeninin tipi:", typeof adress.il);

// .toString() ifadesi degiskeni string tipine cevirir
// parseInt() ifadesi degiskeni integer tipine cevirir

// operatorler
// let sayi1 = 10;
// let sayi2 = 5;
// // toplam
// let toplam = sayi1 + sayi2;
// // cikartma
// let cikartma = sayi1 - sayi2;
// // carpma
// let carpma = sayi1 * sayi2;
// // bolme
// let bolme = sayi1 / sayi2;
// // mod
// let mod = sayi1 % sayi2;
// // kare
// let kare = sayi1 ** 2;
// // kok
// let kok = sayi1 ** (1 / 2);
// console.log(toplam, cikartma, carpma, bolme, mod, kare, kok);

// let x = true;
// let y = false;
// let z = true;
// // && operatoru ikisi de true olunca true deger dondurur
// console.log(x && x);
// console.log(x && y);
// console.log(x && z);
// // || operatoru ikisinden biri true olunca true deger dondurur
// console.log(x || y);
// console.log(y || y);
// console.log(x || z);

// let sayi1 = 9;
// let sayi2 = 8;
// console.log(sayi1 !== sayi2);

let user1 = {
  name: "Ekrem",
  surname: "Ilkan",
  age: 27,
  company: {
    name: "AcikAtolye",
    address: {
      city: "Bursa",
      reg: "Nilufer",
    },
  },
  address: {
    city: "Bursa",
    reg: "Gorukle",
  },
};

let user2 = {
  name: "John",
  surname: "Doe",
  age: 34,
  company: {
    name: "AcikAtolye",
    address: {
      city: "Bursa",
      reg: "Osmangazi",
    },
  },
  address: {
    city: "Izmir",
    reg: "Buca",
  },
};

let firmaSorgusu = user1.company.name === user2.company.name;
console.log("firma ismi sorgusu:", firmaSorgusu);
let firmaAdresSorgusu = user1.company.address === user2.company.address;
console.log("firma adres sorgusu:", firmaAdresSorgusu);
let ilSorgusu = user1.company.address.city === user2.company.address.city;
console.log("firma sehir sorgusu:", ilSorgusu);
*/
