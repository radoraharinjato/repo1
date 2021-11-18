import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";
import {Cv} from "../model/cv";

import {Credentials} from "../model/Credentials";
import {AuthResponse} from "../model/AuthResponse";

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(
    private httpClient: HttpClient
  ) { }


  login(credentials:Credentials): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>('https://immense-citadel-91115.herokuapp.com/api/Users/login', credentials);
  }

  isAuthenticated(): Boolean {
    return !! localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

}
