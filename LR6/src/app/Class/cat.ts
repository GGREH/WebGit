import { Animal } from './animal';

export class Cat extends Animal {
    breed: string;

    constructor(name: string, h: number, breed: string) {
        // Викликаємо батьківський конструктор з фіксованим k = 15
        super(name, h, 20);
        this.breed = breed.trim() !== '' ? breed : 'Безпородна';
    }

    // Перевизначаємо батьківський метод: переводимо вагу тварини в грами (* 1000)
    override weight(): number {
        return super.weight() * 1000;
    }
}

