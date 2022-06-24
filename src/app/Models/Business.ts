export interface IBusiness {
  id: number;
  businessType: string;
  annualTurnover: number;
  totalEmployess: number;
  capitalInvested: number;
}

export class Business implements IBusiness {
  public id: number;
  public businessType: string;
  public annualTurnover: number;
  public totalEmployess: number;
  public capitalInvested: number;

  public constructor(
    initialValues: IBusiness
  ) {
    this.id = initialValues.id;
    this.businessType = initialValues.businessType;
    this.annualTurnover = initialValues.annualTurnover;
    this.totalEmployess = initialValues.totalEmployess;
    this.capitalInvested = initialValues.capitalInvested;
  }
}
