import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Data, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
        {
          path: 'heroes',
          component: HeroesComponent
        },
        {
          path: 'detail/:id',
          component: HeroDetailComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        }
      ]) 
    ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})


export class AppModule {

  testfunction():void {

    var test;

    return test;

  }

}
