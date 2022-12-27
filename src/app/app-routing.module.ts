import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './header/nav/nav.component';
import { TittleComponent } from './header/tittle/tittle.component';

const routes: Routes = [
  {path:"tittle", component:TittleComponent},
  {path:"nav",component:NavComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
