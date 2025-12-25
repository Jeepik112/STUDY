let totalPrice = 5000;
let accountBalance = 4507;
let isVip = true;

if (isVip === true) {
    console.log("Скидка для ВИП клиента");
    totalPrice = totalPrice * 0.9;
}

if (accountBalance >= totalPrice) {
    accountBalance = accountBalance - totalPrice;
    console.log("Вы купили товар! Остаток на счете: " + accountBalance + " теперь идитьте домой.");
} else {
    console.log("фуу, нищеброд, иди работай");
}