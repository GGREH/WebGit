import { randomInt } from './randomInt';

export interface MatrixIndex {
    row: number;
    col: number;
}

export class ArrayTwo {
    a: number[][] = [];
    duplicateValue: number | null = null;
    firstIndex: MatrixIndex | null = null;
    secondIndex: MatrixIndex | null = null;

    constructor() {
        this.a = [];
    }

    // Генерація масиву n x m, у якому рівно два елементи рівні між собою
    genArray(n: number = 3, m: number = 15): void {
        if (!Number.isInteger(n) || n < 1 || n > 20) {
            throw new Error("Кількість рядків N повинна бути цілим числом від 1 до 20.");
        }
        if (!Number.isInteger(m) || m < 1 || m > 20) {
            throw new Error("Кількість стовпців M повинна бути цілим числом від 1 до 20.");
        }
        if (n * m < 2) {
            throw new Error("Масив повинен містити щонайменше 2 елементи (N * M >= 2).");
        }

        let total = n * m;
        let rnd = new randomInt();
        let uniqueValues = new Set<number>();

        while (uniqueValues.size < total - 1) {
            uniqueValues.add(rnd.randomInteger(-500, 500));
        }

        let flat = Array.from(uniqueValues);
        let dupValue = flat[rnd.randomInteger(0, flat.length - 1)];
        flat.push(dupValue);

        // Перемішування елементів (алгоритм Фішера — Єйтса)
        for (let i = flat.length - 1; i > 0; i--) {
            let j = rnd.randomInteger(0, i);
            let temp = flat[i];
            flat[i] = flat[j];
            flat[j] = temp;
        }

        this.a = [];
        let k = 0;
        for (let i = 0; i < n; i++) {
            this.a[i] = [];
            for (let j = 0; j < m; j++) {
                this.a[i][j] = flat[k++];
            }
        }
    }

    // Пошук індексів двох однакових елементів (нумерація рядків і стовпців з 1)
    findEqual(): void {
        this.duplicateValue = null;
        this.firstIndex = null;
        this.secondIndex = null;

        let seen = new Map<number, MatrixIndex>();

        for (let i = 0; i < this.a.length; i++) {
            for (let j = 0; j < this.a[i].length; j++) {
                let value = this.a[i][j];
                if (seen.has(value)) {
                    this.duplicateValue = value;
                    this.firstIndex = seen.get(value)!;
                    this.secondIndex = { row: i + 1, col: j + 1 };
                    return;
                }
                seen.set(value, { row: i + 1, col: j + 1 });
            }
        }
    }
}

