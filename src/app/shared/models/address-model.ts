import { AddressInterface } from "../interfaces/address-interface";

export class AddressModel implements AddressInterface {
  public id?: number;
  public lastName: string = '';
  public firstName: string = '';
  public birthDate!: Date;
  public phoneNumber: string = '';

  public deserialize(datas: any): AddressModel {
    for (const property in datas) {
      if (this.hasOwnProperty(property)) {
        this[property] = datas[property];
      }
    }
    this.birthDate = new Date(datas.birthDate);

    if (datas.hasOwnProperty('id')) {
      this.id = datas.id;
    }
    return this;
  }
}
