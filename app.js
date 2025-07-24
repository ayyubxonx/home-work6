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

// const telefon = { name: "Telefon", price: 1000 };
// console.log(addTax(telefon));

// function calculateWorkTime(worker) {
//   worker.hoursWorked = worker.end - worker.start;
//   return worker;
// }

// const worker = { name: "Ali", start: 9, end: 18 };
// console.log(calculateWorkTime(worker));

// {
//   name: `"Ali", start: 9, end: 18, hoursWorked: 9 `;
// }

// 5-masala

// const employees = [
//   { name: "Ali", salary: 10000 },
//   { name: "Vali", salary: 15000 },
//   { name: "Karim", salary: 20000 },
// ];

// function getTotalSalary(employees) {
//   return employees.reduce((total, employee) => total + employee.salary, 0);
// }

// console.log(getTotalSalary(employees));

// 7-masala

// const worker = {
//     name: "Ali",
//     start: 9,
//     end: 18
// };

// function calculateWorkTime(worker) {
//     const hours = worker.end - worker.start;
//     console.log(`${worker.name} ${hours} soat ishladi`);
// }

// calculateWorkTime(worker);

// // 8-masala

// const cube = {
//     side: 4
// }
// function calculateVolume(cube) {
//     cube.Volume = cube.side ** 3;
//     console.log(cube);

// }
// calculateVolume(cube);

// 9-masala

// const user1 = {
//   username: "test",
//   password: "12345678",
// };

// function isPasswordStrong(user) {
//   return user.password.length >= 8;
// }

// console.log(isPasswordStrong(user1));

// 10-masala

// const person = {
//   name: "Ali",
//   age: 20,
// };

// function calculateBirthYear(person, currentYear) {
//   person.birthYear = currentYear - person.age;
//   return person;
// }

// console.log(calculateBirthYear(person, 2025));

// 11-masala

// const user = Object.freeze({
//   name: "MirzoUlug'bek",
//   age: 20,
// });

// function updateUser(user) {
//   user.hobby = "football"; // Bu qo‘shilmaydi, chunki object muzlatilgan (freeze)

//   if (Object.isFrozen(user)) {
//     console.log("Object is frozen"); // Bu chiqadi
//   } else {
//     console.log("Not frozen");
//   }

//   console.log(user); // hobby qo‘shilmagan bo‘ladi
// }

// updateUser(user);

// 12-masala

// const user0 = {
//   name: "Ulug'bek",
//   age: 20,
// };

// function updateUser(user) {
//   Object.freeze(user);

//   console.log(Object.isFrozen(user) ? "Frozen" : "Not frozen");
// }

// updateUser(user0);

// 13-masala

// const person1 = {
//   name: "Ali",
// };
// Object.seal(person1);

// function addProperty(obj, key, value) {
//   if (Object.isSealed(obj)) {
//     return "Cannot add new property";
//   } else {
//     obj[key] = value;
//     return obj;
//   }
// }

// console.log(addProperty(person1, "age", 25));

// 14-masala

// const phone = {
//     brand: "iPhone"
// }

// function isItSealed(phone) {
//     if (Object.isSealed(phone)) {
//         return "Sealed"
//     } else {
//         return "Not sealed"
//     }
// }

// console.log(isItSealed(phone));

// 15-masala

// const book = {
//   title: "JS Fundamentals",
//   author: "MirzoUlug'bek",
// };

// function checkProperty(obj, key) {
//   return key in obj;
// }

// console.log(checkProperty(book, "title")); true
// console.log(checkProperty(book, "color")); false

// 16-masala

// const parent2 = { name: "Parent" };
// const child = Object.create(parent2);
// child.age = 10;

// function isOwnKey(obj, key) {
//   return obj.hasOwnProperty(key);
// }

// console.log(isOwnKey(child, "age")); // true
// console.log(isOwnKey(child, "name")); // false
