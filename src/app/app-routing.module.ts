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

  {path:'zones' ,component:StatsComponent},
  {path:'news' ,component:GlobalComponent},
  {path:'safety',component:SafetyComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
