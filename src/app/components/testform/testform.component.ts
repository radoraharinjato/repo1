import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  processForm(formulaire: NgForm) {
    console.log(formulaire);
  }
}
