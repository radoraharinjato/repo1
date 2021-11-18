import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../../model/cv";
import {EmbaucheService} from "../../services/embauche.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-cv',
  templateUrl: './main-cv.component.html',
  styleUrls: ['./main-cv.component.css']
})
export class MainCvComponent implements OnInit {

  cvToShow:Cv;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  processUpdateCardDetail(cvDetail: Cv) {
    this.cvToShow = cvDetail;
  }

}
