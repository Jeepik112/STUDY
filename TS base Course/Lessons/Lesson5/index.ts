class User {
    constructor(public name: string) {}
}

class UserRepository {
    save(user: User) {
        console.log(`Сохраняем нашего пользователя с именем: ${user.name}`);
    }
}

class EmailService {
    sendWelcome(user: User) {
        console.log(`Отправлено на почту пользователю ${user.name} приветственное письмо`);
    }
}

const user = new User("Alex");
const emailService = new EmailService();
emailService.sendWelcome(user);

