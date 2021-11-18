import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../../model/cv";
import {EmbaucheService} from "../../services/embauche.service";

@Component({
  selector: 'app-cvembauche',
  templateUrl: './cvembauche.component.html',
  styleUrls: ['./cvembauche.component.css']
})
export class CvembaucheComponent implements OnInit {

  //@Input() cvEmbaucheToAdd: Cv;

  cvList: Cv[] = [];

  constructor(
    private embaucheService: EmbaucheService
  ) {}

  ngOnInit(): void {
    this.cvList = this.embaucheService.getAll();
    /*
    if( this.cvEmbaucheToAdd )
      this.embaucheService.add(this.cvEmbaucheToAdd);
      */
  }

}
