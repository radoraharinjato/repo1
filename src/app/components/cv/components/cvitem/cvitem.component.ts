import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Cv} from "../../model/cv";
import {CvService} from "../../services/cv.service";

@Component({
  selector: 'app-cvitem',
  templateUrl: './cvitem.component.html',
  styleUrls: ['./cvitem.component.css']
})
export class CvitemComponent implements OnInit {

  @Input() cv : Cv = null;

  //@Output() selectCvEvent = new EventEmitter<Cv>();

  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
  }

  selectCv() {
    if (this.cv) {
      this.cvService.selectCv(this.cv);
    }
    //this.selectCvEvent.emit(this.cv)
  }
}
