import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../../model/cv";
import {EmbaucheService} from "../../services/embauche.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../../services/cv.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() cvSelected: Cv;

  //@Output() sendCvEmbaucheToMain = new EventEmitter<Cv>();

  constructor(
    private toastr: ToastrService,
    private embaucheService: EmbaucheService,
    private cvService : CvService

  ) { }

  ngOnInit(): void {
    this.cvService.cvSelectSubject.subscribe(
      (cv) => this.cvSelected = cv
    )

  }

  embaucheCv():void {
    const index: number = this.embaucheService.cvList.indexOf(this.cvSelected);
    if (index !== -1) {
      this.toastr.warning(`${this.cvSelected?.name} + ${this.cvSelected?.firstname} + " est déjà embauché"`);
    }
    else {
      this.embaucheService.add(this.cvSelected);
      this.toastr.success(`${this.cvSelected?.name} + ${this.cvSelected?.firstname} + " embauché avec succès"`);
    }
  }
}
