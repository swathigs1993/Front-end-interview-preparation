import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  orderStatus: any;
  data: Observable<any>;

  test1 = of(1,2,3,4,5); // Creates observable
  case1: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.data = new Observable(observer => {
       setTimeout(() => {
        observer.next('In progress');
       }, 400);

       setTimeout(() => {
        observer.next('Processing');
       }, 5000);

      //  setTimeout(() => {
      //   observer.error();
      //  }, 8000);

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
//--------------------------------------------------------
   this.case1 = this.test1.pipe(  // Create new observable and alter it using operators
       filter(x => x % 2 == 0),
       reduce((acc, one) => acc + one, 0)
    );

   this.case1.subscribe(x => console.log(x)) // Subscribe to new observable
   //--------------------------------------------------------------
  }
}
