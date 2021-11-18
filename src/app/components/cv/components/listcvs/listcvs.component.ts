import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../../model/cv";
import {CvService} from "../../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listcvs',
  templateUrl: './listcvs.component.html',
  styleUrls: ['./listcvs.component.css']
})
export class ListcvsComponent implements OnInit {

  cvs: Cv[] = [];

 // @Output() sendDataToMain = new EventEmitter<Cv>();

  constructor(
    private cvService:CvService,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getAll().subscribe({
        next: (response) => {
          this.cvs = response;
        },
        error: (err:Error) => {
          this.toasterService.warning('Données statiques renvoyées car erreur appel APi ');
          this.cvs = this.cvService.getFakeAll();
        }
      }
    );
  }


  // updateCardDetail(e:Cv) {
    //this.sendDataToMain.emit(e);
  //}

}
