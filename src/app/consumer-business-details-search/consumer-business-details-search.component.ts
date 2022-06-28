import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerBusinessService } from '../consumer-business.service';
import { Business } from '../Models/Business';
import { BusinessMaster } from '../Models/BusinessMaster';
import { Consumer, IConsumer } from '../Models/Consumer';

@Component({
  selector: 'app-consumer-business-details-search',
  templateUrl: './consumer-business-details-search.component.html',
  styleUrls: ['./consumer-business-details-search.component.css']
})
export class ConsumerBusinessDetailsSearchComponent implements OnInit {

  searchConsumerFormGroup: FormGroup;
  // updateFormGroup: FormGroup;

  consumer!: IConsumer;
  consumerFound = false;

  className = "ConsumerBusinessDetailsSearchComponent";
  debug = console.log;

  constructor(
    formBuilder: FormBuilder,
    private consumerBusinessService: ConsumerBusinessService
  ) {
    this.searchConsumerFormGroup = formBuilder.group(
      {
        consumerId: new FormControl('', Validators.required)
      }
    );


    // this.updateFormGroup = formBuilder.group(
    //   {
    //     id: new FormControl('', Validators.required),
    //     name: new FormControl('', Validators.required),
    //     dob: new FormControl('',),
    //     email: new FormControl('', Validators.email),
    //     pan: new FormControl('', Validators.required),

    //     businessFormGroup: formBuilder.group({
    //       id: new FormControl('', Validators.required),
    //       businessType: new FormControl('', Validators.required),
    //       annualTurnover: new FormControl('', Validators.required),
    //       totalEmployees: new FormControl('', Validators.required),
    //       capitalInvested: new FormControl('', Validators.required)
    //     }
    //     )
    //   }
    // )
  }

  ngOnInit(): void {
  }

  getConsumerBusiness() {
    let consumerId = -1;

    if (this.searchConsumerFormGroup.valid) {
      consumerId = Number(this.searchConsumerFormGroup.get('consumerId')?.value);

      console.log(consumerId);
      this.consumerBusinessService.getConsumerBusiness(consumerId).subscribe((result) => {
        let consumer = (result as BusinessMaster).consumer;

        if (consumer) {
          this.consumer = consumer;
          this.consumerFound = true;
        }
      });
    }
  }

  updateConsumerBusiness() {
    let functionName = "updateConsumerBusiness()";

    this.debug(`${this.className}::${functionName}`);

    this.consumerBusinessService.updateConsumerBusinessSubject.next(this.consumer);
    // this.consumerBusinessService.updateConsumerBusiness(this.consumer);
  }
}
