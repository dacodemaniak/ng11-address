import { Component, Input, OnInit } from '@angular/core';
import { AddressInterface } from '../../interfaces/address-interface';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit {

  @Input() public detail!: AddressInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
