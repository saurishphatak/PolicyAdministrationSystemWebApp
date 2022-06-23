import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProperty, Property } from '../Models/Property';

@Component({
  selector: 'app-business-property-form',
  templateUrl: './business-property-form.component.html',
  styleUrls: ['./business-property-form.component.css']
})
export class BusinessPropertyFormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      businessId: new FormControl('', Validators.required),
      squareFeet: new FormControl('', Validators.required),
      buildingType: new FormControl('', Validators.required),
      storeys: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      consumerId: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("CLICKED");

    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      let businessProperty = new Property(
        this.formGroup.value as IProperty
      );

      console.log("NEW PROPERTY : ", businessProperty);
    }
  }

}
