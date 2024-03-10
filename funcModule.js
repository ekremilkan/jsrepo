const toplama = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    return sayi1 + sayi2;
  } else {
    throw new Error("Sadece sayilarla islem yapilabilir!");
  }
};
const cikarma = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    return sayi1 - sayi2;
  } else {
    throw new Error("Sadece sayilarla islem yapilabilir!");
  }
};

const carpma = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    return sayi1 * sayi2;
  } else {
    throw new Error("Sadece sayilarla islem yapilabilir!");
  }
};

const bolme = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    if (sayi2 === 0) {
      throw new Error("Bolen 0(sifir) olamaz!");
    } else {
      return sayi1 / sayi2;
    }
  } else {
    throw new Error("Sadece sayilarla islem yapilabilir!");
  }
};

const faktoriyel = function (x) {
  if (typeof x === "number" && x > 0) {
    let carpim = 1;
    for (let index = 1; index <= x; index++) {
      carpim = carpim * index;
    }
    return carpim;
  } else {
    throw new Error("Sadece pozitif sayilarla islem yapilabilir!");
  }
};

module.exports = {
  toplama,
  cikarma,
  carpma,
  bolme,
  faktoriyel,
};
