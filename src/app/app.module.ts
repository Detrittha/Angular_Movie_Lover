import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BlackadamComponent } from './page/blackadam/blackadam.component';
import { BlackpantherComponent } from './page/blackpanther/blackpanther.component';
import { SpidermanComponent } from './page/spiderman/spiderman.component';
import { MovieComponent } from './page/movie/movie.component';
import { Routes,RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import {MatCardModule} from '@angular/material/card';
import { DisplayComponent } from './component/display/display.component';


const appRoutes :Routes =[
  { path:'',component: MainComponent},
  { path: 'movie',component:MovieComponent,children:[
    { path: 'blackadam',component:BlackadamComponent,outlet :'movieoutlet'},
    { path: 'blackpanther',component:BlackpantherComponent,outlet :'movieoutlet'},
    { path: 'spiderman',component:SpidermanComponent,outlet :'movieoutlet'}
  ]},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlackadamComponent,
    BlackpantherComponent,
    SpidermanComponent,
    MovieComponent,
    MainComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
