import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  public constructor(
    private httpClient: HttpClient
  ) {}

  transform(value: Date, ...args: unknown[]): Observable<number> {
    const clockApi = 'http://worldclockapi.com/api/json/utc/now';

    return this.httpClient.get(
      clockApi
    )
    .pipe(
      take(1),
      map(
        (utcNow: any) => new Date(utcNow.currentDateTime).getFullYear() - value.getFullYear()
      )
    );
  }
}

