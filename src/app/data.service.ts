import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataService {

  public subjectObs = new Subject<string>();
 // a: any;

  public messageSource = new BehaviorSubject('Im Behaviour Subject initial value');
 // currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  receiveMsg(data: any) {
    console.log('subject', data);
    this.subjectObs.next(data);
  }

}