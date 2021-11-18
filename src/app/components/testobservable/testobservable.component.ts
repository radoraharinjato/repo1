import { Component, OnInit } from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-testobservable',
  templateUrl: './testobservable.component.html',
  styleUrls: ['./testobservable.component.css']
})
export class TestobservableComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });

    observable.pipe(
      map( data => data * 3)
    ).pipe(
      filter(myval => myval % 2 == 0)
    )
      .subscribe({
        next: (monParam) => {
          this.toastr.info("" + monParam);
        },
        complete: () => {this.toastr.warning('Fin du flux')}
      }
    )
  }

  ngOnInit(): void {
  }

}
