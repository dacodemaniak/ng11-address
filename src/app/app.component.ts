import { Component, OnInit } from '@angular/core';
import { AddressInterface } from './shared/interfaces/address-interface';

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

  ngOnInit(): void {
    this._title = 'Carnet d\'adresses';
    this.isDetailHidden = true;

    this.addresses.push({
      lastName: 'Aubert',
      firstName: 'Jean-Luc',
      birthDate: new Date('1968-3-30'),
      phoneNumber: '0563214789'
    });
    this.addresses.push({
      lastName: 'Bond',
      firstName: 'James',
      birthDate: new Date('1943-4-26'),
      phoneNumber: '555-55-007'
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
}
