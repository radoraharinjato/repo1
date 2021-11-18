import { Component, OnInit } from '@angular/core';
import {Cv} from "../../../model/cv";
import {CvService} from "../../../services/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HostService} from "../../../services/host.service";

@Component({
  selector: 'app-detailcv',
  templateUrl: './detailcv.component.html',
  styleUrls: ['./detailcv.component.css']
})
export class DetailcvComponent implements OnInit {

  cvSelected:Cv;

  constructor(
    private cvService:CvService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private toasterService:ToastrService,
    public authService:HostService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      {
        next: (params) => {
          this.cvService.getCv(+params['id']).subscribe(
            {
              next: (cv) => {
                this.cvSelected = cv;
              },
              error: (err: Error) => {
                this.toasterService.error('Personne inexistante');
                this.router.navigate(['cv']);
              }
            }
          );
        },
        error: (err: Error) => {
          this.toasterService.error('No params ??');
          this.router.navigate(['cv']);
        }
      }
    );
  }

  deleteCv() {

    if (this.cvSelected) {
      this.cvService.deleteCv(this.cvSelected).subscribe({
          next: () => {
            this.toasterService.success(`Cv supprimé avec succès :)`);
            this.router.navigate(['cv']);
          },
          error: () => {
            this.toasterService.error(`Problème au niveau du serveur veuillez l'admin :)`);
          }
        }
      );
    }
  }
}
