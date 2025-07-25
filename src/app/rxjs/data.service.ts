import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // Replace this URL with your actual API
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
