import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddressInterface } from '../interfaces/address-interface';

const rawAddresses: any = localStorage.getItem('address-book');
let addresses: any[];
if (rawAddresses) {
  addresses = JSON.parse(rawAddresses);
} else {
  addresses = [];
}

@Injectable()
class FakeBackendService implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Destructuration de la requête
    const {url, method, headers, body} = request;


    console.log(`Intercept an HttpRequest on ${url} ${method}`);

    return handleRoute();

    function handleRoute(): Observable<HttpEvent<any>> {
      const addressRegex: RegExp = /\/api\/v1\/address+$/;

      switch (true) {
        case addressRegex.test(url) && method === 'GET':
          return of(new HttpResponse({status: 200, body: addresses}));
        case addressRegex.test(url) && method === 'POST':
          console.log(`Have to add an entry`);
          const nextId: number = addresses.length ?
            addresses.sort((a1: any, a2: any) => a2.id - a1.id)[0].id + 1
            : 1;
          body.id = nextId;
          addresses.push(body);
          localStorage.setItem('address-book', JSON.stringify(addresses));
          return of(new HttpResponse({status: 201, body}));
        default:
          return next.handle(request);
      }

    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
}
