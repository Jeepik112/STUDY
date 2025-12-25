// ЛЕКЦИЯ 2. 
// Переменные, типы данных и сравнение.

const test = "ой. кстати const нельзя менять, а let можно. " + 123; 
console.log(test);

if (test >= 100) {
        console.log("нихуя себе");
} else {
    console.log("ну такое");
}

// if (в скобках условие) {
//      тело если условие верно
// } else {
//      тело если условие неверно
// }

console.log("=====================================");


let num = 50;
num = num + 10;
console.log(num);

if (num > 50) {
    console.log("больше 50");
} else if (num === 50) {
    console.log("равно 50");
}

//== - не строгое равенство
//=== - строгое равенство
//!= - не строгое неравенство

console.log("=====================================");


const isAdmin = false;
let fileSize = 1024;
console.log(fileSize);

if (isAdmin && fileSize > 1000) {
    console.log("доступ разрешен");
}
if (isAdmin || fileSize < 1000) {
    console.log("доступ разрешен");
}
if (!isAdmin) {
    console.log("доступ запрещен");
}

// && - и
// || - или
// ! - не

console.log("=====================================");