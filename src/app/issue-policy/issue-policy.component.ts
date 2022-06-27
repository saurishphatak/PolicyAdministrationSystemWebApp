import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-issue-policy',
  templateUrl: './issue-policy.component.html',
  styleUrls: ['./issue-policy.component.css']
})
export class IssuePolicyComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private policyService: PolicyService
  ) {
    this.formGroup = formBuilder.group({
      policyId: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  issuePolicy() {
    if (this.formGroup.valid) {
      let policyId = Number(this.formGroup.get('policyId') ?? "");

      this.policyService.issuePolicy(policyId);
    }
  }

}
