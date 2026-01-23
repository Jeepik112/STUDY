const http = require("http");

const PORT = 3000;

const server = http.createServer(async (request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.statusCode = 200;

        response.end(`
            <form action="/save" method="POST">
                <input name="username" placeholder="Ваше имя" />
                <button type="submit">Отправить</button>
            </form>
        `);
    } else if (request.method === 'POST' && request.url === '/save') {
        const body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
            // console.log(`Прилетел кусочек данных: ${chunk}`);
        });

        request.on('end', () => {
            // chunk1 + chunk2 ... [chunk1 (Buffer { 4e, 5t }), chunk2]
            const parsedBody = Buffer.concat(body).toString('utf-8');
            const decodedString = decodeURIComponent(parsedBody);

            console.log(`Полное тело запроса: ${decodedString}`);

            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.statusCode = 200;

            response.end(`Данные получены! Вы прислали: ${decodedString}`);
        });
    } else if (request.method === 'GET' && 
        (request.url === '/servers' || request.url === '/users')) {
        const data = await fetch('https://gusic.xyz/stats');
        const jsonData = await data.json(); // { servers: 123213, users: 12314214 }

        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.statusCode = 200;

        if (request.url === '/servers') {
            response.end(
                `<h1>Количество серверов на даннный момент: ${jsonData.servers}</h1>`
            );
        } else if (request.url === '/users') {
            response.end(
                `<h1>Количество пользователей на даннный момент: ${jsonData.users}</h1>`
            );
        }
    }
});

server.listen(PORT);
console.log(`Сервер был запущен по адресу: http://localhost:${PORT}`);




// Повторить всё, что было на уроке