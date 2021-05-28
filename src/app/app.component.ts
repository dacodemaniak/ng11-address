import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AddressInterface } from './shared/interfaces/address-interface';
import { AddressService } from './shared/services/address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _title!: string;
  public addresses: AddressInterface[] = [];

  public isDetailHidden!: boolean;
  public displayedAddress!: AddressInterface;

  public static yearFilter = 1900;

  public constructor(
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this._title = 'Carnet d\'adresses';
    this.isDetailHidden = true;

    this.addressService
      .findAll()
      .pipe(
        take(1)
      )
      .subscribe((results: AddressInterface[]) => {
        this.addresses = results;
      });

  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public getYear(): number {
    return AppComponent.yearFilter;
  }

  public showDetail(address: AddressInterface): void {
    console.log(`Showing ${address.lastName}`);
    this.isDetailHidden = false;
    this.displayedAddress = address;
  }

  public hideDetail(hide: boolean): void {
    this.isDetailHidden = hide;
  }

  public filteredItems(): number {
    return this.addresses
      .filter(
        this.birthDateFilter
      ).length;
  }

  public birthDateFilter(address: AddressInterface): boolean {
    return address.birthDate.getFullYear() > AppComponent.yearFilter;
  }

  public add(): void {
    const newAddress: AddressInterface = {
      lastName: 'Bauer',
      firstName: 'Jack',
      birthDate: new Date(1999, 6, 30),
      phoneNumber: '555 88 999 520'
    };
    this.addressService.add(newAddress);

    console.log(`Brand new address is : ${JSON.stringify(newAddress)}`);
  }
}
