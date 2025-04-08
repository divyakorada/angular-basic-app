import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Subject, Subscription, debounceTime, interval, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {

  notifier = new Subject();
  obs = interval(1000).pipe(takeUntil(this.notifier));

  mform: FormGroup = new FormGroup({
    name: new FormControl()
  });
 
  debounceObs: Subscription;
  url: string = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    /* takeUntil */
       this.obs.subscribe(val => console.log(val));
    /* takeUntil */

    /* Debounce time */
    /*  this.debounceObs=this.mform.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => console.log('data', data)); */
    /* Debounce time */

    /* Debounce time wtih Sending HTTP GET Request 
    https://www.tektutorialshub.com/angular/debouncetime-debounce-in-angular/*/
  
      this.debounceObs=this.mform.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(id => {
 
          console.log('id', id)
          return this.http.get(this.url)
        })
      )
      .subscribe(data => console.log(data));
        /* Debounce time wtih Sending HTTP GET Request */
  }
  

  stopObs() {
    this.notifier.next('xxx');
    this.notifier.complete();
  }
}