export class ArrayOne {
    a: number[] = [];
    g: number = 9.81;

    constructor() {
        this.a = [];
    }

    // Формування масиву відстаней при вільному падінні s = (g * t^2) / 2 за t = 1..n секунд
    genArray(n: number = 10, g: number = 9.81): void {
        if (!Number.isInteger(n) || n < 1 || n > 100) {
            throw new Error("Кількість секунд N повинна бути цілим числом від 1 до 100.");
        }
        if (isNaN(g) || g <= 0 || g > 100) {
            throw new Error("Прискорення вільного падіння g повинно бути в межах від 0.1 до 100.");
        }

        this.a = [];
        this.g = g;

        for (let t = 1; t <= n; t++) {
            let distance = (g * t * t) / 2;
            this.a.push(Number(distance.toFixed(2)));
        }
    }
}

