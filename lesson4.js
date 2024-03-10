/*
let havaDurumlari = ["gunesli", "yagmurlu", "karli"];
let yas = 8;
let anlikHava = "gunesli";

if (anlikHava === "gunesli") {
  console.log("gunes gozlugu tak ve disari cik");
} else if (anlikHava === "yagmurlu") {
  console.log("semsiyeni almayi unutma");
} else if (anlikHava === "karli" && yas < 10) {
  console.log("Kar topu savasina gidebilirsin");
} else if (anlikHava === "karli" && yas > 10) {
  console.log("Kar topu savasina gidemezsin");
}

switch (anlikHava) {
  case "gunesli":
    console.log("gunes gozlugu tak ve disari cik");
    break;
  case "yagmurlu":
    console.log("semsiyeni almayi unutma");
    break;
  case "karli":
    if (yas < 10) {
      console.log("Kar topu savasina gidebilirsin");
    } else {
      console.log("Kar topu savasina gidemezsin");
    }
    break;
}
*/

/*********** Donguler ***********/

/*
for (let index = 0; index < 5; index++) {
  console.log(index);
}
let sayac = 0;
while (sayac < 10) {
  console.log(sayac);
  sayac++;
}
*/

// let toplam = 0;
// /*
// for (let index = 0; index <= 10; index++) {
//   toplam = toplam + index;
// }
// console.log(toplam);
// */
// let i = 0;
// while (i <= 10) {
//   toplam = toplam + i;
//   i++;
// }
// console.log(toplam);

/*
let fruits = ["apple", "banana", "watermelon", "pear", "strawberry"];

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}
for (let index = fruits.length - 1; index >= 0; index--) {
  console.log(fruits[index]);
}
*/

/*
let users = [
  {
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
  },
  {
    name: "Angel",
    surname: "Doe",
    age: 30,
    company: {
      name: "AcikAtolye",
      address: {
        city: "Bursa",
        reg: "Osmangazi",
      },
    },
    address: {
      city: "Bursa",
      reg: "Nilufer",
    },
  },
];

for (let index = 0; index < users.length; index++) {
  let element = users[index];
  console.log(element.name);
}
*/

/*
let sayi = 5;
let faktoriyel = 1;

for (let index = 1; index <= sayi; index++) {
  faktoriyel = faktoriyel * index;
}
console.log(faktoriyel);
*/

/*
let bolunenler = [];
let bolunemeyenler = [];
for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0) {
    bolunenler.push(index);
  } else {
    bolunemeyenler.push(index);
  }
}

console.log("Bolunenler:", bolunenler);
console.log("Bolunemeyenler:", bolunemeyenler);
*/

/*
let index = 1;
do {
  console.log(index);
  index++;
} while (index < 5);
*/

/*
let sayilar = [];
let kareler = [];

let sayac = 1;
while (sayac <= 10) {
  sayilar.push(sayac);
  sayac++;
}

for (let index = 0; index < sayilar.length; index++) {
  kareler.push(sayilar[index] * sayilar[index]);
}

console.log(sayilar);
console.log(kareler);
*/
