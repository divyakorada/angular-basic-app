import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

//private messageSource = new Subject<string>();
private messageSource = new BehaviorSubject<number>(0);
message$ = this.messageSource.asObservable();

sendMessage(message: any) {
  this.messageSource.next(message);
}

}
