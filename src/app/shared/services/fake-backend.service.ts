import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
class FakeBackendService implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Destructuration de la requête
    const {url, method, headers, body} = request;


    console.log(`Intercept an HttpRequest on ${url}`);

    return handleRoute();

    function handleRoute(): Observable<HttpEvent<any>> {
      const addressRegex: RegExp = /\/api\/v1\/address+$/;

      switch (true) {
        case addressRegex.test(url):
          return of(new HttpResponse({status: 200, body: 'Hello address'}));
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
