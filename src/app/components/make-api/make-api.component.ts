import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, of } from 'rxjs';

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
    this.handleData();
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

  handleData() {
    const api1$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    const api2$ = this.http.get('https://dummyjson.com/users');

    forkJoin([api1$, api2$]).subscribe(
        ([api1Response, api2Response]) => {
            // Process data from both APIs
            this.processData(api1Response, api2Response);
        },
        error => {
            console.error('Error fetching data', error);
        }
    );
}
  processData(api1Data: any, api2Data: any): void {
    // Example: Merge both responses or log for now
    console.log('API 1 Data:', api1Data);
    console.log('API 2 Data:', api2Data);

    // Let's say you want to combine data from both APIs:
    const combined = {
      fromApi1: api1Data,
      fromApi2: api2Data
    };

    // You can now store, display, or transform this data
    console.log('Combined Data:', combined);
  }


}
