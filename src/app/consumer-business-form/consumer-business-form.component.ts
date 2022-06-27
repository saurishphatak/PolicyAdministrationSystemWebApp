import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ConsumerBusinessService } from '../consumer-business.service';
import { Consumer, IConsumer } from '../Models/Consumer';

@Component({
  selector: 'app-consumer-business-form',
  templateUrl: './consumer-business-form.component.html',
  styleUrls: ['./consumer-business-form.component.css']
})
export class ConsumerBusinessFormComponent implements OnInit {

  debug = console.log;
  className = "ConsumerBusinessFormComponent";

  formGroup: FormGroup;
  constructor(
    formBuilder: FormBuilder,
    private consumerBusinessService: ConsumerBusinessService
  ) {
    this.formGroup = formBuilder.group(
      {
        name: new FormControl('', Validators.required),
        dob: new FormControl('',),
        email: new FormControl('', Validators.email),
        pan: new FormControl('', Validators.required),

        businessFormGroup: formBuilder.group({
          businessType: new FormControl('', Validators.required),
          annualTurnover: new FormControl('', Validators.required),
          totalEmployees: new FormControl('', Validators.required),
          capitalInvested: new FormControl('', Validators.required)
        }
        )
      }
    );
  }

  ngOnInit(): void {
    this.consumerBusinessService.updateConsumerBusinessSubject.subscribe(this.patchForm.bind(this));
  }

  lastId = 1;

  onSubmit() {
    let businessFormGroup = this.formGroup.get("businessFormGroup") as FormGroup;

    if (this.formGroup.valid && businessFormGroup.valid) {

      let newConsumer = new Consumer(
        {
          id: ++this.lastId,
          name: this.formGroup.get("name")?.value,
          email: this.formGroup.get("email")?.value,
          pan: this.formGroup.get("pan")?.value,
          dob: new Date(),

          business: {
            id: ++this.lastId,
            annualTurnover: businessFormGroup.get("annualTurnover")?.value,
            businessType: businessFormGroup.get("businessType")?.value,
            totalEmployess: businessFormGroup.get("totalEmployees")?.value,
            capitalInvested: businessFormGroup.get("capitalInvested")?.value,
          }
        }
      );

      console.log(newConsumer);
      this.consumerBusinessService.addConsumerBusiness(newConsumer);
    }

    this.resetForm();
  }

  resetBusinessForm() {
    this.formGroup.get("businessFormGroup")?.reset();
  }

  resetForm() {
    this.resetBusinessForm();

    this.formGroup.reset();
  }

  patchForm(consumerBusiness: IConsumer) {
    let functionName = "patchForm()";

    this.debug(`${this.className}::${functionName}`, consumerBusiness);

    this.formGroup.setValue(
      {
        name: consumerBusiness?.name,
        dob: consumerBusiness?.dob.toString(),
        email: consumerBusiness?.email,
        pan: consumerBusiness?.pan,

        businessFormGroup: {
          businessType: consumerBusiness?.business?.businessType,
          annualTurnover: consumerBusiness?.business?.annualTurnover,
          totalEmployees: consumerBusiness?.business?.totalEmployess,
          capitalInvested: consumerBusiness?.business?.capitalInvested
        }
      });
  }
}
