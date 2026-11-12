import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayOne } from '../Class/arrayOne';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent {
  arrayOne: ArrayOne = new ArrayOne();
  errorMessage: string = '';

  calculate(nStr: string, gStr: string): void {
    this.errorMessage = '';

    try {
      if (nStr.trim() === '' || gStr.trim() === '') {
        throw new Error('Будь ласка, заповніть усі поля форми.');
      }

      let n = Number(nStr);
      let g = Number(gStr);

      if (isNaN(n) || isNaN(g)) {
        throw new Error('Введені значення повинні бути числами.');
      }

      this.arrayOne.genArray(n, g);
    } catch (error: any) {
      this.arrayOne.a = [];
      this.errorMessage = error.message || 'Помилка введення даних.';
    }
  }
}

