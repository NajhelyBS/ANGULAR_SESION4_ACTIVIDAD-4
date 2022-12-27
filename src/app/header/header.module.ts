import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TittleComponent } from './tittle/tittle.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    TittleComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TittleComponent,
    NavComponent,
  ],
})
export class HeaderModule { }
