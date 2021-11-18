import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {API} from "../../../constante/API";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  cvList: Cv[] = [];

  cvSelectSubject:Subject<Cv>;

  constructor(
    private httpClient: HttpClient,
    private toasterService: ToastrService
  ) {
    this.cvSelectSubject = new Subject<Cv>();

    this.cvList = [
      new Cv(1, 'ANIRAY', 'RAHARINJATO', 25, '123456', 'Dev', 'rotating_card_profile.png'),
      new Cv(2, 'Mike', 'GAG', 45, '589632', 'CEO', 'rotating_card_profile2.png'),
      new Cv(3, 'NOAH', 'RAHARINJATO', 36, '419633', 'Scrum', 'rotating_card_profile3.png'),
      new Cv(4, 'Dow', 'LAYT', 36, '419633', 'Scrum', ''),
      new Cv(5, 'Jane', 'GDEED', 36, '419633', 'Scrum', 'rotating_card_profile.png')
    ];
  }

  getAll(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>('https://immense-citadel-91115.herokuapp.com/api/personnes');
  }

  getFakeAll():Cv[]{
    return this.cvList;
  }

  getCv(idToFind:number): Observable<Cv> | undefined {
    return this.httpClient.get<Cv>('https://immense-citadel-91115.herokuapp.com/api/personnes/' + idToFind);
  }

  deleteCv(cvToDelete:Cv): Observable<any> {
    // const params = new HttpParams().set('access_token', localStorage.getItem('token')?? '');
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token')?? '')
    return this.httpClient.delete(API.cv + cvToDelete.id, {headers});
  }

  fakeDeleteCv(cvToDelete:Cv): boolean{
    const index: number = this.cvList.indexOf(cvToDelete);
    if (index !== -1) {
      this.cvList.splice(index, 1);
      return true;
    }
    else {
      return false;
    }
  }

  addCv(cvToAdd:Cv):Observable<any> {
    // const params = new HttpParams().set('access_token', localStorage.getItem('token')?? '');
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token')?? '');
    //const body = JSON.stringify(cvToAdd);
    return this.httpClient.post(API.cv, cvToAdd, {headers});
  }

  fakeAddCv(cvToAdd:Cv):void {
    cvToAdd.id = this.cvList[this.cvList.length-1].id + 1;
    this.cvList.push(cvToAdd);
  }

  selectCv(cv:Cv) {
    this.cvSelectSubject.next(cv);
  }



}
