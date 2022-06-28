import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BusinessPropertyService } from '../business-property.service';
import { IProperty, Property } from '../Models/Property';

@Component({
  selector: 'app-business-property-form',
  templateUrl: './business-property-form.component.html',
  styleUrls: ['./business-property-form.component.css']
})
export class BusinessPropertyFormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    formBuilder: FormBuilder,
    private businessPropertyService: BusinessPropertyService
  ) {
    this.formGroup = formBuilder.group({
      businessId: new FormControl('', Validators.required),
      squareFeet: new FormControl('', Validators.required),
      buildingType: new FormControl('', Validators.required),
      storeys: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      consumerId: new FormControl('', Validators.required),
      costOfAsset: new FormControl('', Validators.required),
      salvageValue: new FormControl('', Validators.required),
      usefulLifeOfAsset: new FormControl('', Validators.required),
      propertyType: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.businessPropertyService.updateBusinessPropertySubject.subscribe(this.patchForm.bind(this));
  }

  onSubmit() {
    console.log("CLICKED");

    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      let businessProperty = new Property(
        this.formGroup.value as IProperty
      );

      console.log("NEW PROPERTY : ", businessProperty);

      this.businessPropertyService.addBusinessProperty(businessProperty).subscribe(
        result => console.log(result)
      );

      this.resetForm();
    }
  }

  patchForm(property: IProperty) {
    this.formGroup.setValue(
      property
    );
  }

  resetForm() {
    this.formGroup.reset();
  }
}
