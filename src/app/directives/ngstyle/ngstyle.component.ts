import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  color:string = "red";
  fontSize:number = 12;
  fontFamily:string = "verdana";

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(value: string) {
    this.color=value;
  }

  changeSize(value: number) {
    this.fontSize=value;
  }

  changeFamily(value: string) {
    this.fontFamily=value;
  }
}
