import { Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';

export const routes: Routes = [
  { path: '', redirectTo: 'classes', pathMatch: 'full' },
  { path: 'classes', component: AnimalComponent },
  { path: 'array-one', component: ArrayOneComponent },
  { path: 'array-two', component: ArrayTwoComponent }
];
