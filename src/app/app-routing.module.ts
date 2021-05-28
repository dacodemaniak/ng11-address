import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddressDetailComponent } from './pages/address-detail/address-detail.component';
import { Page401Component } from './pages/page401/page401.component';
import { DetailGuard } from './shared/guards/detail.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: AddressDetailComponent,
    canActivate: [DetailGuard]
  },
  {
    path: 'unauthorized',
    component: Page401Component
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
