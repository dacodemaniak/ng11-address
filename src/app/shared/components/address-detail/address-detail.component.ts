import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressInterface } from '../../interfaces/address-interface';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit {

  @Input() public detail!: AddressInterface;
  @Output() public closeMe: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.closeMe.emit(true);
  }

}
