import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NumberOfClicksModule } from '../number-of-clicks/number-of-clicks.module';

@NgModule({
  imports: [
    CommonModule,
    NumberOfClicksModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }