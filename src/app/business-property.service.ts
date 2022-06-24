import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProperty } from './Models/Property';

@Injectable({
  providedIn: 'root'
})
export class BusinessPropertyService {

  constructor() { }

  updateBusinessPropertySubject = new Subject<IProperty>();

  properties: IProperty[] = [];

  getBusinessProperty(consumerId: number, businessId: number) {
    let property = this.properties.find(property => property.businessId == businessId && property.consumerId == consumerId);

    return property;
  }

  addBusinessProperty(businessProperty: IProperty) {
    this.properties.push(businessProperty);
  }
}
