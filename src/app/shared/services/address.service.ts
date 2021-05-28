import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AddressInterface } from '../interfaces/address-interface';
import { AddressModel } from '../models/address-model';

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
      map((result: any) => {
        console.log(`Got : ${JSON.stringify(result)} from backend`);
        return result.map((element: any) => new AddressModel().deserialize(element));
      })
    );
  }

  public find(id: number): AddressInterface | undefined {
    return this.addressList
      .find((obj: AddressInterface) => obj.id === id);
  }

  public add(address: AddressInterface): Observable<AddressInterface | null> {
    return this.httpClient.post(
      'http://localhost:4200/api/v1/address',
      address,
      {
        observe: 'response'
      }
    ).pipe(
      take(1),
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          console.log(`Got ${JSON.stringify(response.body)} from backend`);
          return new AddressModel().deserialize(response.body);
        }
        return null;
      })
    );
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
