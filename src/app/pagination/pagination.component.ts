import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  template: `
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td class="user-id">{{user.id}}</td>
          <td class="user-fname">{{user.firstName}}</td>
          <td class="user-lname">{{user.lastName}}</td>
        </tr>
      </tbody>
    </table>
    <section class="pagination">
      <button class="first-page-btn" (click)=getFirstPage()>first</button>
      <button class="previous-page-btn" (click)=getPrevPage()>previous</button>
      <button class="next-page-btn" (click)=getNextPage()>next</button>
      <button class="last-page-btn" (click)=getLastPage()>last</button>
    </section>
  </div>
`
})
export class PaginationComponent implements OnInit{
  constructor(private http: HttpClient){}
  users:Array<any> = [];
  userCount:number = 0;
  lastPage:number = 0;
  currPage:number = 0;

 ngOnInit(){
   this.getUsers(1);
 }

  getUsers(pageNumber: number) {
    console.log('Page:',pageNumber);
    this.http.get<any>('https://example.com/api/users?page='+pageNumber).subscribe(userData => {
      console.log(userData);
      this.users = userData.results;
      this.userCount = userData.count;
      this.lastPage = Math.ceil(this.userCount/10)-1; // -1 because of Index
    });
  }
  getFirstPage(){
    this.currPage = 0;
    this.getUsers(this.currPage);
    // let users = this.getUsers(1);
    // this.users = users.results;
  }
  getPrevPage(){
    if(this.currPage>0)  this.currPage--;
    this.getUsers(this.currPage);
  }
  getNextPage(){
    if(this.currPage<this.lastPage)  this.currPage++;
    this.getUsers(this.currPage);
  }
  getLastPage(){
    this.currPage = this.lastPage;
    this.getUsers( this.currPage);
    // let users = this.getUsers(1);
    // this.users = users.results;
  }
}
