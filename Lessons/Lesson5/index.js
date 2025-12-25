// ЛЕКЦИЯ 5. 
// Задержки и асинхронность в JavaScript

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const processFile = async () => {
    try {
        console.log("Upload...");
        await wait(2000);

        console.log("Connecting to database...");
        await wait(3000);

        console.log("Done!");

    } catch (error) {
        console.log(error);
    }
    
};
processFile();

