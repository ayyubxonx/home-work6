// function getUserInfo(user) {
//   return `Foydalanuvchi ismi: ${user.name}, yoshi: ${user.age}`;
// }

// const foydalanuvchi = { name: "Ali", age: 25 };
// console.log(getUserInfo(foydalanuvchi)); // Foydalanuvchi ismi: Ali, yoshi: 25

// function addTax(product) {
//   return `${product.name} narxi $${product.price}, solig'i 12% bilan narxi $${
//     product.price * 1.12
//   }`;
// }

const telefon = { name: "Telefon", price: 1000 };
console.log(addTax(telefon));

function calculateWorkTime(worker) {
  worker.hoursWorked = worker.end - worker.start;
  return worker;
}

const worker = { name: "Ali", start: 9, end: 18 };
console.log(calculateWorkTime(worker));

{
  name: `"Ali", start: 9, end: 18, hoursWorked: 9 `;
}
