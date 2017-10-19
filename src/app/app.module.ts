import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MapComponent } from './components/map/map.component';
import { SubmitComponent } from './components/submit/submit.component';

import { DataService } from './services/data.service';
import { MapService } from './services/map.service';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path:'map', component: MapComponent},
  {path:'about', component:AboutComponent},
  {path: 'submit', component: SubmitComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
