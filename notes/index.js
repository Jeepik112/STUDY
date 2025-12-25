// Имитация эффекта печатной машинки с задержками

async function typewriter(text, delay = 50) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    console.log();
}

// Начало с небольшой задержкой
setTimeout(async () => {
    await typewriter("Загрузка началась...");
}, 600);

// Проценты идут быстрее (каждую секунду)
setTimeout(async () => {
    await typewriter("21%");
}, 2000);  // Через 1.4 сек после первого

setTimeout(async () => {
    await typewriter("78%");
}, 3000);  // Через 1 сек после предыдущего

setTimeout(async () => {
    await typewriter("99%");
}, 4000);  // Через 1 сек после предыдущего

// Финальное сообщение с бóльшей паузой для драматизма
setTimeout(async () => {
    // Добавляем небольшую паузу перед финалом
    await new Promise(resolve => setTimeout(resolve, 800));
    await typewriter("Загрузка завершена. Приятного пользования!");
    await typewriter("=====================================");
}, 5500);  // Через 1.5 сек после 99%

