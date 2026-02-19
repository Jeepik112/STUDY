// Lesson 3
// Инкапсуляция




// class User {
//     private name: string;
//     private age: number;

//     constructor(userName: string, userAge: number) {
//         this.name = userName; 
//         this.age = userAge;
//     }

//     publicgreet() {
//         console.log('Привет, я ${this.name}, мне ${this.age} лет.');
//     }
// }

// const alex = new User("Alex", 25);
// const vika = new User("Vika", 29);

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
//         return `Привет, меня зовут ${this.name}, мне ${this.age} лет.`
//     }
// }




class BankAccount {
    private _balance: number;
    private _owner: string;

    constructor(balanc: number, owner: string) {
        this._balance = balanc;
        this._owner = owner;
    }

    public get balance(): number {
        return this._balance;
    }



    public deposit(amount: number) {
        if (amount <= 0) {
            console.log("Ошибка: сумма должна быть больше 0.");
            return;
        }

        this._balance += amount;
        console.log(`${this._owner}, ваш баланс пополнен на ${amount}. Текущий баланс: ${this._balance}`);
    }

    public withdraw(amount: number) {
        if (amount > this._balance) {
            console.log("Ошибка: сумма должна быть меньше или равна текущему балансу.");
            return;
        }

        this._balance -= amount;
        console.log(`${this._owner}, ваш баланс снят на ${amount}. Текущий баланс: ${this._balance}`);
    }      
}

const myAccount = new BankAccount(0, "Alex");

myAccount.balance = 1001;










class BankAccount {
  private balance: number; // скрытое поле

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Метод для пополнения
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  // Метод для просмотра баланса
  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);

account.deposit(50);
console.log(account.getBalance()); // 150

// ❌ Ошибка!
// account.balance = 100000;