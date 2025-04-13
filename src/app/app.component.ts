import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Hafazny';

  constructor() {
    console.log("AppComponent constructor called");
  }

  ngOnInit() {
    console.log("AppComponent ngOnInit called");
  }
}
