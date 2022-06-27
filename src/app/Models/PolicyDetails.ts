export class PolicyDetails implements IPolicyDetails {
  public constructor(
    initialValues: IPolicyDetails
  ) {
    this.acceptedQuotes = initialValues.acceptedQuotes;
    this.consumerId = initialValues.consumerId;
  }

  public consumerId: number;
  public acceptedQuotes: number;
}

export interface IPolicyDetails {
  consumerId: number;
  acceptedQuotes: number;
}
