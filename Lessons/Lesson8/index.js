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

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 3000;

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

const server = http.createServer((http.request) => {
    console.log(`Запрос ${request.url} получен`);

    let url;

    if (request.url === "/") {
        url = path.join(__dirname, "public", "index.html");
    } else {
        url = path.join(__dirname, "public", request.url);
    }

    // Формируем путь к файлу
    const filePath = path.join(__dirname, "public", request.url);

    // Определяем расширение файла (.html, .css, .js)
    const extname = path.extname(filePath);

    console.log(extname);

    const contentType = MIME_TYPES[extname] || "text/plain";

    console.log(contentType);

    // Создаем поток чтения
    const stream = fs.createReadStream(filePath);

    // Сразу ставим правильный заголовок 
    response.setHeader("Content-Type", contentType);

    fileStream.pipe(response);

    fileStream.on('error', err => {
        console.log(err);
        response.statusCode = 404;
        response.end(err.message);
    });

    // нам не нужно писать response.end() вручную 
    // pipe() автоматически закрывает соединение
});

server.listen(PORT);
console.log(`Сервер запущен на http://localhost:${PORT}`);
