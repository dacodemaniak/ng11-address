import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressInterface } from '../../interfaces/address-interface';
import { AddressModel } from '../../models/address-model';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  public addressForm!: FormGroup;
  public maxDate: Date = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService
  ) { }

  public get c(): any {
    return this.addressForm.controls;
  }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthDate: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  public doSubmit(): void {
    const newAddress: AddressInterface = new AddressModel().deserialize(this.addressForm.value);
    console.log(`New address : ${JSON.stringify(newAddress)}`);
    this.addressService
      .add(newAddress)
      .subscribe((address: any) => {
        console.log(`Ca y est, c'est bon !`)
      });
  }

}
