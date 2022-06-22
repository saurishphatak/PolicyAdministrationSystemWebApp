import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consumer-business-form',
  templateUrl: './consumer-business-form.component.html',
  styleUrls: ['./consumer-business-form.component.css']
})
export class ConsumerBusinessFormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group(
      {
        name: new FormControl('', Validators.required),
        dob: new FormControl('',),
        email: new FormControl('', Validators.email),
        pan: new FormControl('')
      }
    );
  }

  ngOnInit(): void {
  }

}
