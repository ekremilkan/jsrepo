// functions
// const deger = function (sayi1, sayi2) {
//   console.log(sayi1 ** sayi2);
// };
// deger(4, 2);

let bolme = function (x, y) {
  if (y === 0) {
    return "Bolen 0 olamaz!";
    // throw new Error("Bolen 0 olamaz!");
  } else {
    return x / y;
  }
};

console.log(bolme(8, 2));

let hesaplama = function (x, y, operator) {
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    if (y === 0) {
      return "Sayi 0'a bolunemez";
    } else {
      return x / y;
    }
  } else {
    return "Boyle bir islem YOK!";
  }
};

console.log(hesaplama(5, 6, "/"));
