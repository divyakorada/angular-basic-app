import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-make-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './make-api.component.html',
  styleUrls: ['./make-api.component.scss']
})
export class MakeAPIComponent implements OnInit {

  configUrl = 'https://dummyjson.com/users';
  showData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.http.get(this.configUrl).pipe(
      catchError(error => {
        console.error('Error fetching data', error);
        return of([])
      })
    )
    .subscribe(
    (res) => {
      console.log(res)
      this.showData = res;
    },
    (error) => {
      console.error('Error occurred:', error);
    }
  )
  }

}
