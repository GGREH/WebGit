export class randomInt {
    randomInteger(min: number, max: number): number {
        // Випадкове ціле число від min до max включно
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}

