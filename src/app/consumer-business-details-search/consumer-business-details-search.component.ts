import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerBusinessService } from '../consumer-business.service';
import { Business } from '../Models/Business';
import { Consumer, IConsumer } from '../Models/Consumer';

@Component({
  selector: 'app-consumer-business-details-search',
  templateUrl: './consumer-business-details-search.component.html',
  styleUrls: ['./consumer-business-details-search.component.css']
})
export class ConsumerBusinessDetailsSearchComponent implements OnInit {

  formGroup: FormGroup;
  consumer!: IConsumer;
  consumerFound = false;

  constructor(
    formBuilder: FormBuilder,
    private consumerBusinessService: ConsumerBusinessService
  ) {
    this.formGroup = formBuilder.group(
      {
        consumerId: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  getConsumerBusiness() {
    let consumerId = -1;

    if (this.formGroup.valid) {
      consumerId = Number(this.formGroup.get('consumerId')?.value);

      console.log(consumerId);
      let consumer = this.consumerBusinessService.getConsumerBusiness(consumerId);

      if (consumer) {
        this.consumer = consumer;
        this.consumerFound = true;
      }
    }
  }

  updateConsumerBusiness() {
    this.consumerBusinessService.updateConsumerBusinessSubject.next(this.consumer);
  }


}
