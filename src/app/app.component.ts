import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _title = 'address-book';

  ngOnInit(): void {

  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }
}
