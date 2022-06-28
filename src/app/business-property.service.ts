import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProperty } from './Models/Property';

@Injectable({
  providedIn: 'root'
})
export class BusinessPropertyService {

  constructor(private httpClient: HttpClient) { }

  updateBusinessPropertySubject = new Subject<IProperty>();

  properties: IProperty[] = [];

  getBusinessProperty(consumerId: number, businessId: number) {
    // let property = this.properties.find(property => property.businessId == businessId && property.consumerId == consumerId);

    // return property;
    return this.httpClient.get(environment.businessPropertyBaseURL + "/ViewConsumerProperty?" + `businessId=${businessId}&consumerId=${consumerId}`);
  }

  addBusinessProperty(businessProperty: IProperty) {
    this.properties.push(businessProperty);

    return this.httpClient.post(environment.businessPropertyBaseURL + "/CreateBusinessProperty", businessProperty);
  }
}
