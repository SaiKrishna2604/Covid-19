import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { NewsComponent } from './news/news.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'' ,component:HomeComponent},

  {path:'zones' ,component:StatsComponent},
  {path:'news' ,component:NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
