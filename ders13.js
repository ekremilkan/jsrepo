let sayi = 18;
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (sayi % 2 === 0) {
      resolve("Sayi cift");
    } else {
      reject("Sayi tek");
    }
  }, 2000);
});

myPromise
  .then((sonuc) => {
    console.log(sonuc);
  })
  .catch((hata) => {
    console.log(hata);
  });
