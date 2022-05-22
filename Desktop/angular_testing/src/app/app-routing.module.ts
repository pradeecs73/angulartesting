import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { VoteComponent } from './vote/vote.component';
import { ServicetestComponent } from './servicetest/servicetest.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'servicetest', component: ServicetestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
