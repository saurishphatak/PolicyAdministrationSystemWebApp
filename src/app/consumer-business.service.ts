import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Business } from './Models/Business';
import { Consumer, IConsumer } from './Models/Consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerBusinessService {

  public updateConsumerBusinessSubject = new Subject<IConsumer>();

  consumerBusinesses: IConsumer[] = [
    new Consumer(
      {
        name: "XYZ",
        dob: new Date(),
        email: "abcd@gmail.com",
        id: 1,
        pan: "ABCD1234",
        business: new Business(
          {
            id: 1,
            annualTurnover: 34,
            businessType: "Retail Equipments",
            totalEmployess: 30,
            capitalInvested: 40
          }
        ),
      }
    )
  ];

  public constructor(
    private httpClient: HttpClient
  ) { }

  getConsumerBusiness(consumerId: number) {
    console.log("SEARCHING ", consumerId);
    let consumer = this.consumerBusinesses.find(consumer => consumer.id == consumerId);

    console.log("FOUND : ", consumer);

    return consumer;
  }

  addConsumerBusiness(consumer: IConsumer) {
    if (consumer.id <= 0) {
      this.httpClient.post('/addConsumerBusiness', consumer);
    }
    else {
      this.httpClient.post('/updateConsumerBusiness', consumer);
    }
    // this.consumerBusinesses.push(consumer);
    // return this.httpClient.post(`${environment.baseUrl}/api/createConsumerBusiness}`, consumer);

    console.log(this.consumerBusinesses);
  }

}
