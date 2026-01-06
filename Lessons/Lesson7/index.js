// const path = require("node:path");
// const fullPath = path.resolve(__dirname, "index.html");

// console.log(fullPath);

const path = require("node:path");
const http require("node:http");

const PORT = 3000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    let filePath;

    if (request.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
    } else if (request.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
    } else {
        filePath = path.join(__dirname, "public", "404.html");

        response.statusCode = 404;
    }

    const fileContent = await fs.readFile(filePath, "utf-8");

    response.end(fileContent);
});

// request - объект запроса от клиента
// response - ответ сервера клиенту

server.listen(PORT);
console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
