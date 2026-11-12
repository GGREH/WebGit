import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTwo } from '../Class/arrayTwo';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent {
  arrayTwo: ArrayTwo = new ArrayTwo();
  errorMessage: string = '';

  calculate(nStr: string, mStr: string): void {
    this.errorMessage = '';

    try {
      if (nStr.trim() === '' || mStr.trim() === '') {
        throw new Error('Будь ласка, введіть розміри матриці N та M.');
      }

      let n = Number(nStr);
      let m = Number(mStr);

      if (isNaN(n) || isNaN(m)) {
        throw new Error('Розміри N та M повинні бути числами.');
      }

      this.arrayTwo.genArray(n, m);
      this.arrayTwo.findEqual();
    } catch (error: any) {
      this.arrayTwo.a = [];
      this.arrayTwo.duplicateValue = null;
      this.arrayTwo.firstIndex = null;
      this.arrayTwo.secondIndex = null;
      this.errorMessage = error.message || 'Помилка введення даних.';
    }
  }

  isDuplicateCell(rowIndex: number, colIndex: number): boolean {
    let r = rowIndex + 1;
    let c = colIndex + 1;
    let first = this.arrayTwo.firstIndex;
    let second = this.arrayTwo.secondIndex;

    return (
      (first !== null && first.row === r && first.col === c) ||
      (second !== null && second.row === r && second.col === c)
    );
  }
}

