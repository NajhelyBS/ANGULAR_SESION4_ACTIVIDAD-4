import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background/background.component';
import { Container1Component } from './container1/container1.component';



@NgModule({
  declarations: [
    BackgroundComponent,
    Container1Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundComponent,
    Container1Component,
  ],
})
export class BodyModule { }
