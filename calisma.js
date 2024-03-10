const bolme = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject("Bolen sifir 0 olamaz!");
      } else {
        resolve(a / b);
      }
    }, 2000);
  });
};

bolme(9, 3)
  .then((result) => {
    console.log(`islem basarili: ${result}`);
  })
  .catch((err) => {
    console.log(`islem basarisiz: ${err}`);
  });

const fact = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x > 0) {
        let carpim = 1;
        for (let index = 1; index <= x; index++) {
          carpim = carpim * index;
        }
        resolve(carpim);
      } else {
        reject(`Negatif sayilarla islem yapilmaz!`);
      }
    }, 2000);
  });
};

fact(6)
  .then((result) => {
    console.log(`islem basarili: ${result}`);
  })
  .catch((err) => {
    console.log(`islem basarisiz: ${err}`);
  });
