import { Routes } from '@angular/router';
import { EhfazComponent } from './ehfaz/ehfaz.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ehfaz', pathMatch: 'full' },
  { path: 'ehfaz', component: EhfazComponent }
]; 