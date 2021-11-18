import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-addpersonne',
  templateUrl: './addpersonne.component.html',
  styleUrls: ['./addpersonne.component.css']
})
export class AddpersonneComponent implements OnInit {

  constructor(
    private cvservice: CvService,
    private router:Router,
    private toasterService:ToastrService
  ) { }

  ngOnInit(): void {
  }

  addCv(formumaire: NgForm) {

      this.cvservice.addCv(formumaire.value).subscribe({
          next: (cv:Cv) => {
            this.toasterService.success(`Cv ajouté avec succès :)`);
            this.router.navigate(['cv']);
          },
          error: () => {
            this.toasterService.error(`Problème au niveau du serveur`);
          }
        }
      );

    // this.cvservice.addCv(formumaire.value);
    // this.toasterService.success("CV ajouté avec succès");
    //this.router.navigate(['cv']);
  }
}
