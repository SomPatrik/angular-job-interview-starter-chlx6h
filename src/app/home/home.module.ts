import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NumberOfClicksModule } from '../number-of-clicks/number-of-clicks.module';
import { LogoComponent } from '../logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    NumberOfClicksModule
  ],
  declarations: [
    HomeComponent,
    LogoComponent
  ]
})
export class HomeModule { }