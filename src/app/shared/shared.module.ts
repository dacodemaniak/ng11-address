import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

import { HeaderComponent } from './components/header/header.component';
import { AddressService } from './services/address.service';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { ReactiveFormsModule } from '@angular/forms';


const primes = [
  CardModule,
  ToolbarModule,
  ButtonModule,
  InputTextModule,
  CalendarModule
];

@NgModule({
  declarations: [HeaderComponent, AddAddressComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...primes
  ],
  exports: [
    HeaderComponent,
    AddAddressComponent,
    ...primes
  ],
  providers: []
})
export class SharedModule { }
