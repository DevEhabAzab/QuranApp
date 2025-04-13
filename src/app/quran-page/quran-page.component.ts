import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quran-page',
  standalone: false,
  templateUrl: './quran-page.component.html',
  styleUrl: './quran-page.component.css'
})
export class QuranPageComponent implements OnInit{
  ayahs: any[] = [];
  currentPage = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAyahs();
  }

  loadAyahs(): void {
    this.http.get<any>(`http://localhost:3000/ayahs?page=${this.currentPage}`)
      .subscribe(response => {
        this.ayahs = response.data;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadAyahs();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadAyahs();
    }
  }
  replaceDiacritic(text: string): string {
    return text.replace(/\u06DF/g, '\u0652');
  }
  
  getWords(ayahText: string): string[] {
    return ayahText.split(" ");
  }
}
