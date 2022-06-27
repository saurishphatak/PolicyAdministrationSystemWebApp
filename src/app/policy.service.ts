import { Injectable } from '@angular/core';
import { IConsumerPolicy } from './Models/ConsumerPolicy';
import { IPolicyDetails } from './Models/PolicyDetails';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  policies: any[] = [];

  constructor() { }

  public createPolicy(policyDetails: IPolicyDetails) {
    this.policies.push(policyDetails);
  }

  public issuePolicy(policyId: number) {

  }

  public viewPolicy(policyId: number) { }
}
