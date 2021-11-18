import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotativecard',
  templateUrl: './rotativecard.component.html',
  styleUrls: ['./rotativecard.component.css']
})
export class RotativecardComponent implements OnInit {

  name='Rado';
  firstname='RAHARINJATO';
  job='Scrum';
  path='rotating_card_profile3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
