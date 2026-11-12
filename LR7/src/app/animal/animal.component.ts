import { Component } from '@angular/core';
import { Animal } from '../Class/animal';
import { Cat } from '../Class/cat';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animal_show: string = '';
  cat_show: string = '';
  error_msg: string = '';

  calcAnimal(
    name1: string,
    h1: string,
    k1: string,
    name2: string,
    h2: string,
    breed2: string
  ) {
    try {
      this.error_msg = '';

      let h1Val = parseFloat(h1);
      let k1Val = parseFloat(k1);
      let h2Val = parseFloat(h2);

      // Валідація значень, введених користувачем у поля форми
      if (
        name1.trim() === '' ||
        name2.trim() === '' ||
        breed2.trim() === '' ||
        isNaN(h1Val) ||
        h1Val <= 0 ||
        isNaN(k1Val) ||
        k1Val <= 0 ||
        isNaN(h2Val) ||
        h2Val <= 0
      ) {
        throw new Error(
          'Помилка у вхідних даних! Усі текстові поля мають бути заповнені, а числові значення росту h та коефіцієнта k повинні бути більшими за 0.'
        );
      }

      let animal = new Animal(name1.trim(), h1Val, k1Val);
      let cat = new Cat(name2.trim(), h2Val, breed2.trim());

      this.animal_show =
        'Кличка = ' +
        animal.name +
        ' | Ріст h = ' +
        animal.h +
        ' м | Коефіцієнт k = ' +
        animal.k +
        ' | Вага = ' +
        animal.weight().toFixed(3) +
        ' кг';

      this.cat_show =
        'Кличка = ' +
        cat.name +
        ' | Порода = ' +
        cat.breed +
        ' | Ріст h = ' +
        cat.h +
        ' м (k = 15) | Вага = ' +
        cat.weight().toFixed(1) +
        ' г';
    } catch (e: any) {
      this.animal_show = '';
      this.cat_show = '';
      this.error_msg = e.message;
    }
  }
}

