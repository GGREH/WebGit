export class Animal {
    name: string;
    h: number;
    k: number;

    // Конструктор базового класу
    constructor(name: string, h: number, k: number) {
        // Перевірка на коректність введених даних
        if (name.trim() !== '' && h > 0 && k > 0) {
            this.name = name;
            this.h = h;
            this.k = k;
        } else {
            this.name = 'Тварина';
            this.h = 0.5;
            this.k = 10;
        }
    }

    // Метод розрахунку ваги тварини в кг: k * h^3
    weight(): number {
        return this.k * Math.pow(this.h, 3);
    }
}

