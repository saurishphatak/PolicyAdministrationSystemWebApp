import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
            totalEmployess: 30
          }
        ),
      }
    )
  ];

  getConsumerBusiness(consumerId: number) {
    console.log("SEARCHING ", consumerId);
    let consumer = this.consumerBusinesses.find(consumer => consumer.id == consumerId);

    console.log("FOUND : ", consumer);

    return consumer;
  }

  addConsumerBusiness(consumer: IConsumer) {
    this.consumerBusinesses.push(consumer);

    console.log(this.consumerBusinesses);
  }

  constructor() { }
}
