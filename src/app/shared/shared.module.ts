import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';

const materials = [
  MatToolbarModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ...materials
  ],
  exports: [
    ...materials,
    HeaderComponent
  ]
})
export class SharedModule { }
