import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  cvList: Cv[] = [];

  constructor() {}

  getAll():Cv[] {
    return this.cvList;
  }

  add(cvEmbauche: Cv) : boolean {
    const index: number = this.cvList.indexOf(cvEmbauche);
    if (index !== -1) {
      return false;
    }
    else {
      this.cvList.push(cvEmbauche);
      return true;
    }
  }
}
