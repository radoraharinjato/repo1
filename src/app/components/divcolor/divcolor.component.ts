import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-divcolor',
  templateUrl: './divcolor.component.html',
  styleUrls: ['./divcolor.component.css']
})
export class DivcolorComponent implements OnInit {

  defaultColor:string = 'red';
  bgColor:string = this.defaultColor;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bgColor = this.defaultColor;

    this.activatedRoute.params.subscribe(
      (params)=> {
        this.changeBgColor(params['couleur']);
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (queryParam) => {
        console.log(queryParam);
      }
    );
  }

  changeBgColor(colorTxt : string){
    this.bgColor = colorTxt;
  }
}
