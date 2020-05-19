import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { GlobalComponent } from './global/global.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafetyComponent } from './safety/safety.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},

  {path:'india' ,component:StatsComponent},
  {path:'global' ,component:GlobalComponent},
  {path:'news',component:SafetyComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
