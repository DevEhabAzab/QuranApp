import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuranPageComponent } from './quran-page/quran-page.component';
import { EhfazComponent } from './ehfaz/ehfaz.component';
//import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    QuranPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EhfazComponent,
    RouterModule.forRoot([
      { path: '', redirectTo: '/ehfaz', pathMatch: 'full' },
      { path: 'ehfaz', component: EhfazComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
