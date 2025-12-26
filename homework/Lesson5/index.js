// Задание 1 
const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};


// Задание 2
const cookDinner = async () => {
  console.log("Включаю плиту...");
  await sleep(1000);

  console.log("Режу овощи...");
  await sleep(2000);

  console.log("Варю суп...");
  await sleep(3000);

  console.log("Ужин готов!");
};


// Задание 3
const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

const cookDinner1 = async () => {
  try {
    const isGasOn = true; // можно сделать на true / false

    if (!isGasOn) {
      throw new Error("Нет газа!");
    }

    console.log("Включаю плиту...");
    await sleep(1000);

    console.log("Режу овощи...");
    await sleep(2000);

    console.log("Варю суп...");
    await sleep(3000);

    console.log("Ужин готов!");
  } catch (err) {
    console.log("Ошибка на кухне:", err.message);
  }
};

cookDinner1();
