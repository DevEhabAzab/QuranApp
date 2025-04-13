import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EhfazComponent } from './ehfaz/ehfaz.component';

const routes: Routes = [
  { path: '', redirectTo: '/ehfaz', pathMatch: 'full' },
  { path: 'ehfaz', component: EhfazComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
