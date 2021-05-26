import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _title!: string;

  ngOnInit(): void {
    this._title = 'Carnet d\'adresses';
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }
}
