// Базовий клас для роботи з даними про факультети (Варіант 4)
class Faculty {
    constructor(name, type, dean, departments) {
        this.name = name;

        // Перевірка коректності типу факультету (загальний, технічний, гуманітарний)
        const allowedTypes = ["загальний", "технічний", "гуманітарний"];
        if (typeof type === "string" && allowedTypes.includes(type.toLowerCase())) {
            this.type = type.toLowerCase();
        } else {
            this.type = "загальний";
        }

        this.dean = dean ? dean : "Не вказано";
        this.departments = typeof departments === "number" ? departments : 0;
    }

    // Метод для отримання короткого опису факультету
    getInfo() {
        return `Декан: ${this.dean} | Кафедр: ${this.departments}`;
    }
}

