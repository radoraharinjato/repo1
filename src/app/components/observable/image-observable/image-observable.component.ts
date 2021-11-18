import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-image-observable',
  templateUrl: './image-observable.component.html',
  styleUrls: ['./image-observable.component.css']
})
export class ImageObservableComponent implements OnInit, OnDestroy {

  srcImage:string= 'rotating_card_profile.png';
  timer:number=1000;
  sliderObservable: Observable<string>;

  images:string[] = [];

  slideSubscription:Subscription;
  constructor() {

    this.images = [
      'cv.png',
      'rotating_card_profile.png',
      'rotating_card_profile2.png',
      'tim_logo.png',
      'rotating_card_profile3.png'
    ];

    this.sliderObservable = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {

         observer.next(this.images[i]);
         i = Math.floor(Math.random() * 4);
      }, this.timer);
    });

    this.slideSubscription = this.sliderObservable.subscribe({
        next: (monParam) => {
          this.srcImage = monParam;
        },
        complete: () => {
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.slideSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
