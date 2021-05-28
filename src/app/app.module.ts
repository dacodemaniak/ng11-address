import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddressDetailComponent } from './shared/components/address-detail/address-detail.component';
import { AddressDetailComponent as Detail} from './pages/address-detail/address-detail.component';
import { AgePipe } from './shared/pipes/age.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { fakeBackendProvider } from './shared/services/fake-backend.service';
import { RouterModule } from '@angular/router';
import { Page401Component } from './pages/page401/page401.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddressDetailComponent,
    Detail,
    AgePipe,
    Page401Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
