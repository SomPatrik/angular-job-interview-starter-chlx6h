import { NgModule } from '@angular/core';
import { RouterModule, RunGuardsAndResolvers } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }