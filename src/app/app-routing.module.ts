import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./services/components/todo/todo.component";
import {MainCvComponent} from "./components/cv/components/main-cv/main-cv.component";
import {FirstComponent} from "./components/first/first.component";
import {TwoComponent} from "./components/two/two.component";
import {DivcolorComponent} from "./components/divcolor/divcolor.component";
import {Error404Component} from "./components/error404/error404.component";
import {DetailcvComponent} from "./components/cv/components/cvembauche/detailcv/detailcv.component";
import {TestformComponent} from "./components/testform/testform.component";
import {AuthentformComponent} from "./components/authentform/authentform.component";
import {AddpersonneComponent} from "./components/cv/addpersonne/addpersonne.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [

  { path: 'todo', component: TodoComponent },
  { path: 'authform', component: AuthentformComponent },
  { path: 'addpersonne', component: AddpersonneComponent, canActivate: [AuthGuard] },
  { path: 'cv', children : [
      { path: 'detailcv/:id', component: DetailcvComponent },
      { path: 'deletecv/:id', component: DetailcvComponent },
      { path: '', component: MainCvComponent }
    ]
  },
  { path: '', component: FirstComponent },
  { path: 'home', redirectTo:'', pathMatch:'full' },
  { path: 'two', component: TwoComponent },
  { path: 'color/:couleur', component: DivcolorComponent },
  { path: '**', component: Error404Component },
  { path: 'logout', component: TwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
