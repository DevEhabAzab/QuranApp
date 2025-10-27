// sheikh.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sheikh } from '../types/shikh.type';

@Injectable({
  providedIn: 'root'
})
export class SheikhService {
  private sheikhsUrl = 'assets/data/shikhs.json';

  constructor(private http: HttpClient) {}

  getSheikhs(): Observable<Sheikh[]> {
    return this.http.get<Sheikh[]>(this.sheikhsUrl);
  }
}


 