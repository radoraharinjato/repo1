import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HostService} from "../cv/services/host.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentform',
  templateUrl: './authentform.component.html',
  styleUrls: ['./authentform.component.css']
})
export class AuthentformComponent implements OnInit {

  constructor(
    private authService:HostService,
    private toasterService:ToastrService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  login(authform: NgForm) {
    this.authService.login(authform.value).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.id);
        this.toasterService.success("Authentification avec succès");
        this.router.navigate(['cv']);
      },

      error: (err:Error) => {
        this.toasterService.warning("Identifiants incorrects");
      }
    })
  }
}
