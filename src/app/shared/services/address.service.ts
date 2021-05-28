import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AddressInterface } from '../interfaces/address-interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private addressList: AddressInterface[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.populate();
  }

  public findAll(): Observable<AddressInterface[]> {
    return this.httpClient.get(
      'http://localhost:4200/api/v1/address'
    ).pipe(
      take(1),
      map((result) => {
        console.log(`Got : ${JSON.stringify(result)} from backend`);
        return this.addressList;
      })
    );
  }

  public find(id: number): AddressInterface | undefined {
    return this.addressList
      .find((obj: AddressInterface) => obj.id === id);
  }

  public add(address: AddressInterface): AddressInterface {
    const nextId: number = this.addressList
      .sort((a1: AddressInterface, a2: AddressInterface) => a2.id! - a1.id!)[0].id! + 1;

    address.id = !isNaN(nextId) ? nextId : 1;

    this.addressList.push(address);

    return address;

  }

  private populate(): void {
    this.addressList.push({
      lastName: 'Aubert',
      firstName: 'Jean-Luc',
      birthDate: new Date('1968-3-30'),
      phoneNumber: '0563214789'
    });
    this.addressList.push({
      lastName: 'Bond',
      firstName: 'James',
      birthDate: new Date('1943-4-26'),
      phoneNumber: '555-55-007'
    });
  }
}
