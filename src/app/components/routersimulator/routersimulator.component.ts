import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-routersimulator',
  templateUrl: './routersimulator.component.html',
  styleUrls: ['./routersimulator.component.css']
})
export class RoutersimulatorComponent {

  selectedMenu:string ='';

  constructor(
    private router:Router
  ) { }

  onSelectMenu(){
    this.router.navigate([this.selectedMenu]);
  }
}
