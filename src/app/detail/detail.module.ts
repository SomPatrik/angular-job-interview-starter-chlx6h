import { NgModule } from '@angular/core';
import { RouterModule, RunGuardsAndResolvers } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [
    DetailComponent
  ]
})
export class DetailModule { }