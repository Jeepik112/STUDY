// ЛЕКЦИЯ 3. 
// Git, массивы и циклы.

const numb = [1, 2, 3, 4, 5];
console.log(numb[0]); // 1
numb.push(6); // добавить в конец
console.log(numb.length); // длина массива


let fuel = 100;
while (fuel > 0) {
    console.log("машина едет" + ". топливо осталось: " + fuel);
    fuel -= 10; // fuel = fuel - 10
}
console.log("машина остановилась");
// while (пока условие верно) {
//      тело цикла
// }

for (let i = 1; i < 5; i++) {
    console.log("Отжимание " + i);
}
// for (начало; условие; шаг) {
//      тело цикла
// }

for (let i = 0; i < numb.length; i++) {
    console.log("Элемент массива: " + numb[i]);
}

for (const number of numb) {
    console.log("Элемент массива: " + number);
}
// for (переменная of массив) {
//      тело цикла
// }
// for...of - цикл по значениям массива. то же самое, что и выше, но короче. только для массивов.

console.log("=====================================");

const files = ["photo1.jpg", "video1.mp4", "document1.pdf", "virus.exe"];
for (const file of files) {
    if (file === "virus.exe") {
        console.log("опасный файл найден: " + file);
    } else {
        console.log("файл в безопасности: " + file);
    }
}

// break - прервать цикл
// continue - пропустить текущую итерацию и перейти к следующей

console.log("=====================================");
