import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { FollowComponent } from './follow/follow.component';
import { HotComponent } from './hot/hot.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'home',
    component:HomeComponent
  },{
    path: 'hot',
    component: HotComponent
  },{
    path: 'follow',
    component: FollowComponent
  },{
    path: 'history',
    component: HistoryComponent
  },{
    path: 'search',
    component: SearchComponent
  },{
    path: 'girls',
    component: GirlsComponent
  },{
    path: 'boys',
    component : BoysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
