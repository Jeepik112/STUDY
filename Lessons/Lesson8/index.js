// const path = require("node:path");
// const fs = require("node:fs");

// // создаем читающий поток
// const stream = fs.createReadStream(
//     path.join(__dirname, 'big.txt'),
//     {
//         highWaterMark: 1024
//     }
// );

// let counter = 0;

// stream.on('data', chunk => {
//     counter++; // увеличиваем счётчик
//     console.log('получен кусок №${counter}');
//     console.log(chunk);
//     console.log('Размер ${chunk.length} байт');
// });

// stream.on('end', () => {
//     console.log('Чтение данных завершено. Всего получено ${counter} кусков.');
// });



// Подключаем модуль http — нужен для создания сервера
const http = require("node:http");

// Подключаем fs — нужен для чтения файлов (html, видео и т.д.)
const fs = require("node:fs");

// Подключаем path — чтобы корректно работать с путями
const path = require("node:path");

// Порт сервера
const PORT = 3000;

// Объект с MIME-типами
// MIME-Type говорит браузеру, ЧТО именно мы ему отправляем
const MIME_TYPES = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    json: "application/json",
    jpg: "image/jpeg",
    png: "image/png",
    mp3: "audio/mpeg",
    mp4: "video/mp4",
};

// ИСПРАВЛЕНО: createServer принимает (request, response)
const server = http.createServer((request, response) => {

    // Логируем каждый входящий запрос
    console.log(`Запрос ${request.url} получен`);

    let url;

    // Если пользователь зашёл на главную страницу
    if (request.url === "/") {
        // Формируем путь к index.html
        url = path.join(__dirname, "public", "index.html");
    } else {
        // Если запрос на любой другой файл
        url = path.join(__dirname, "public", request.url);
    }

    // Формируем путь к файлу
    // (у тебя это было отдельно — мы оставляем как есть)
    const filePath = url;

    // Получаем расширение файла (.html, .css, .mp4 и т.д.)
    const extname = path.extname(filePath).slice(1);

    console.log("Расширение файла:", extname);

    // Определяем Content-Type
    const contentType = MIME_TYPES[extname] || "text/plain";

    console.log("Content-Type:", contentType);

    // Создаём поток чтения файла
    const fileStream = fs.createReadStream(filePath); // ❗ ИСПРАВЛЕНО: одно имя

    // Устанавливаем HTTP-заголовок
    response.setHeader("Content-Type", contentType);

    // Передаём файл клиенту частями (stream → response)
    fileStream.pipe(response);

    // Обработка ошибки (например, файл не найден)
    fileStream.on("error", err => {
        console.log(err);
        response.statusCode = 404;
        response.end("404 Not Found");
    });

    // response.end() писать не нужно —
    // pipe() сам закрывает соединение
});

// Запускаем сервер
server.listen(PORT);

// Сообщение в консоль
console.log(`Сервер запущен на http://localhost:${PORT}`);
