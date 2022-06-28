import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BusinessPropertyService } from '../business-property.service';
import { IProperty } from '../Models/Property';

@Component({
  selector: 'app-business-property-details-search',
  templateUrl: './business-property-details-search.component.html',
  styleUrls: ['./business-property-details-search.component.css']
})
export class BusinessPropertyDetailsSearchComponent implements OnInit {

  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private businessPropertyService: BusinessPropertyService) {
    this.formGroup = formBuilder.group(
      {
        consumerId: new FormControl('', Validators.required),
        businessId: new FormControl('', Validators.required)
      }
    );
  }

  businessPropertyFound = false;
  property!: IProperty;

  ngOnInit(): void {
  }

  getBusinessProperty() {
    if (this.formGroup.valid) {
      let consumerId = Number(this.formGroup.get('consumerId')?.value ?? -1);
      let businessId = Number(this.formGroup.get('businessId')?.value ?? -1);


      this.businessPropertyService.getBusinessProperty(businessId, consumerId).subscribe(result => {
        console.log(result);

        let propertyResult = result as any;

        this.property = propertyResult.property;
        this.businessPropertyFound = true;
      });
    }
  }

  updateBusinessProperty() {
    this.businessPropertyService.updateBusinessPropertySubject.next(this.property);
  }
}
