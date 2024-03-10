let sayilar = [];
let asalSayilar = [];
let randomSayi = 0;

for (let index = 0; index < 100; index++) {
  randomSayi = Math.floor(Math.random() * 100) + 1;
  sayilar.push(randomSayi);
}

function asalKontrol(number) {
  if (number <= 1) return false;
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

const asalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    for (let index = 0; index < sayilar.length; index++) {
      if (asalKontrol(sayilar[index])) {
        asalSayilar.push(sayilar[index]);
      }
    }
    resolve(asalSayilar);
  }, 3000);
});

asalPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/*
let sayilar = [];
let asalSayilar = [];
let randomSayi = 0;
 
for (let index = 0; index < 100; index++) {
  randomSayi = Math.floor(Math.random() * 200) + 1;
  sayilar.push(randomSayi);
}
 
function asalKontrol(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
const asalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    for (let index = 0; index < sayilar.length; index++) {
      if (
        asalKontrol(sayilar[index]) &&
        !asalSayilar.includes(sayilar[index])
      ) {
        asalSayilar.push(sayilar[index]);
      }
    }
    resolve(asalSayilar);
  }, 3000);
});
 
asalPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
*/
