import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  orderStatus: any;
  data: Observable<any>;
  constructor() { }

  ngOnInit() {
    this.data = new Observable(observer => {
       setTimeout(() => {
        observer.next('In progress');
       }, 400);

       setTimeout(() => {
        observer.next('Processing');
       }, 5000);

       setTimeout(() => {
        observer.error();
       }, 8000);

       setTimeout(() => {
        observer.next('Completed');
       }, 9000);

       setTimeout(() => {
        observer.complete();  //It will no more listen or track for changes. 
       }, 10000);
    });
    this.data.subscribe(val => {
      this.orderStatus = val;
   });
   this.data.subscribe(val2 => {
    console.log("Second subscription"+val2);
 });
  }

}
