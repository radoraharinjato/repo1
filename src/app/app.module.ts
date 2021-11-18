import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { DivcolorComponent } from './components/divcolor/divcolor.component';
import { TwoComponent } from './components/two/two.component';
import {FormsModule} from "@angular/forms";
import { RotativecardComponent } from './components/rotativecard/rotativecard.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { MainCvComponent } from './components/cv/components/main-cv/main-cv.component';
import { CvitemComponent } from './components/cv/components/cvitem/cvitem.component';
import { ListcvsComponent } from './components/cv/components/listcvs/listcvs.component';
import { DetailComponent } from './components/cv/components/detail/detail.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { Usd2btcPipe } from './pipes/usd2btc.pipe';
import { DefaultImagePipe } from './components/cv/pipe/default-image.pipe';
import { TodoComponent } from './services/components/todo/todo.component';
import { CvembaucheComponent } from './components/cv/components/cvembauche/cvembauche.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { HeaderComponent } from './components/header/header.component';
import { RoutersimulatorComponent } from './components/routersimulator/routersimulator.component';
import { ItemcvComponent } from './components/cv/components/cvembauche/itemcv/itemcv.component';
import { Error404Component } from './components/error404/error404.component';
import { DetailcvComponent } from './components/cv/components/cvembauche/detailcv/detailcv.component';
import { TestformComponent } from './components/testform/testform.component';
import { AuthentformComponent } from './components/authentform/authentform.component';
import { AddpersonneComponent } from './components/cv/addpersonne/addpersonne.component';
import { TestobservableComponent } from './components/testobservable/testobservable.component';
import { ImageObservableComponent } from './components/observable/image-observable/image-observable.component';
import {HttpClientModule} from "@angular/common/http";
import { TestHttpComponent } from './components/test-http/test-http.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DivcolorComponent,
    TwoComponent,
    RotativecardComponent,
    PereComponent,
    FilsComponent,
    MainCvComponent,
    CvitemComponent,
    ListcvsComponent,
    DetailComponent,
    NgstyleComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    Usd2btcPipe,
    DefaultImagePipe,
    TodoComponent,
    CvembaucheComponent,
    HeaderComponent,
    RoutersimulatorComponent,
    ItemcvComponent,
    Error404Component,
    DetailcvComponent,
    TestformComponent,
    AuthentformComponent,
    AddpersonneComponent,
    TestobservableComponent,
    ImageObservableComponent,
    TestHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
