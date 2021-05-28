import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ) {
    console.log(`Had to load : ${JSON.stringify(this.activeRoute.snapshot.params.id)}`);
  }

  ngOnInit(): void {
    this.activeRoute.params
      .subscribe((params) => {
        console.log(`Route params : ${JSON.stringify(params)}`)
      });
  }

}
