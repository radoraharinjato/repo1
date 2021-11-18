import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cv} from "../cv/model/cv";

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<Cv>('https://immense-citadel-91115.herokuapp.com/api/personnes').subscribe(
      (cvList) => {
        console.log(cvList)
      }
    )

  }

}
