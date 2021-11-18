import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HostService} from "../cv/services/host.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean;

  constructor(
    private router:Router,
    private toasterService:ToastrService,
    public authservice:HostService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
      this.loggedIn = true;
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['authform']);
  }
}
