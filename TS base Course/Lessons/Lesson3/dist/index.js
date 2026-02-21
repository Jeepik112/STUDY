"use strict";
// class User {
//     private name: string;
//     public age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     public constructor(userName: string, userAge: number) {
//         this.name = userName;
//         this.age = userAge;
//     }
//     public greet() {
//         console.log(`Привет, я ${this.name}, мне ${this.age} лет.`);
//     }
// }
// const alex = new User("Alex", 25);
// const vika = new User("Vika", 19);
// alex.greet();
// vika.greet();
// interface IUser {
//     name: string;
//     age: number;
//     sayHello(): string;
// }
// class User implements IUser {
//     public name: string;
//     public age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(): string {
//         return `Привет, меня зовут ${this.name}`;
//     }
// }
class BankAccount {
    _owner;
    _balance;
    constructor(_owner, _balance) {
        this._owner = _owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value > 1000 || value < 0) {
            console.log("Ошибка установки баланса!");
            return;
        }
        this._balance = value;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Ошибка: Сумма должна быть больше нуля!");
            return;
        }
        this._balance += amount;
        console.log(`${this._owner}, ваш счет пополнен на ${amount}. Текущий баланс: ${this._balance}`);
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Ошибка: Недостаточно средств!");
            return;
        }
        this._balance -= amount;
        console.log(`Выдано: ${amount}. Остаток: ${this._balance}`);
    }
}
const myAccount = new BankAccount("Alex", 0);
myAccount.balance;