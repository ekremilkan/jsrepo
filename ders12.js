// Async

// const soz = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let randomNumber = Math.random();
//     if (randomNumber === 0.5) {
//       resolve("İşlem başarili");
//     } else {
//       reject("işlem başarisiz");
//     }
//   }, 1500);
// });

// soz
//   .then((res) => {
//     console.log("İşlem başarili", res);
//   })
//   .catch((err) => {
//     console.log("İşlem başarisiz", err);
//   })
//   .finally(() => {
//     console.log("Her durumda çalişan blok");
//   });

//////// async bolme islemi ////////
// const bolme = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (b === 0) {
//         reject("Bolen sayi sifir olamaz!");
//       } else {
//         resolve(a / b);
//       }
//     }, 2000);
//   });
// };

// bolme(9, 9)
//   .then((result) => {
//     console.log("Islem basarili", result);
//   })
//   .catch((error) => {
//     console.log("Islem basarisiz", error);
//   });
///////////////////////////////////////
