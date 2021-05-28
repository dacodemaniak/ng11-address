import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AddressInterface } from '../interfaces/address-interface';
import { AddressModel } from '../models/address-model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private addressList: AddressInterface[] = [];
  private addressSubject$: BehaviorSubject<AddressInterface[] | any> = new BehaviorSubject([]);

  constructor(
    private httpClient: HttpClient
  ) {
    this.populate();
  }

  public get addressSubject(): BehaviorSubject<AddressInterface[] | any> {
    return this.addressSubject$;
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
          const oneMoreAddress: AddressInterface[] = [...this.addressSubject$.getValue()];
          oneMoreAddress.push(response.body);
          this.addressSubject$.next(
            oneMoreAddress
          );
          return new AddressModel().deserialize(response.body);
        }
        return null;
      })
    );
  }

  private populate(): void {
    this.httpClient.get(
      'http://localhost:4200/api/v1/address'
    ).pipe(
      take(1),
      map((result: any) => {
        return result.map((element: any) => new AddressModel().deserialize(element));
      })
    ).subscribe((addresses: AddressInterface[]) => {
      this.addressSubject$.next(addresses);
    });
  }
}
