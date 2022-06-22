export interface IBusiness {
  id: number;
  businessType: string;
  annualTurnover: number;
  totalEmployess: number
}

export class Business implements IBusiness {
  public id: number;
  public businessType: string;
  public annualTurnover: number;
  public totalEmployess: number;

  public constructor(
    initialValues: IBusiness
  ) {
    this.id = initialValues.id;
    this.businessType = initialValues.businessType;
    this.annualTurnover = initialValues.annualTurnover;
    this.totalEmployess = initialValues.totalEmployess;
  }
}
