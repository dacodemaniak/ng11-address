import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';

import { HeaderComponent } from './components/header/header.component';
import { AddressService } from './services/address.service';


const primes = [
  CardModule,
  ToolbarModule,
  ButtonModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ...primes
  ],
  exports: [
    HeaderComponent,
    ...primes
  ],
  providers: []
})
export class SharedModule { }
