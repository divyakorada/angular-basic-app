import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, switchMap, takeUntil } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements  OnDestroy {

    showComponent = true;
    

 pollingData: any;
  private stopPolling$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  startPolling(): void {
    interval(2000) // every 3 seconds
      .pipe(
        takeUntil(this.stopPolling$),
        switchMap(() => this.dataService.getData())
      )
      .subscribe(data => {
        this.pollingData = data;
        console.log('Polled data:', data);
      });
  }

  stopPolling(): void {
    this.stopPolling$.next();
    this.stopPolling$.complete(); // optional: complete to clean up
    this.stopPolling$ = new Subject(); // recreate for future polling
  }

  ngOnDestroy(): void {
    this.stopPolling$.next();
    this.stopPolling$.complete();
  }
}
