export class Property implements IProperty {
  public businessId: number;
  public squareFeet: number;
  public buildingType: string;
  public storeys: number;
  public age: number;
  public consumerId: number;

  public constructor(
    initialValues: IProperty
  ) {
    this.age = initialValues.age;
    this.buildingType = initialValues.buildingType;
    this.businessId = initialValues.businessId;
    this.squareFeet = initialValues.squareFeet;
    this.storeys = initialValues.storeys;
    this.consumerId = initialValues.consumerId;
  }
}

export interface IProperty {
  businessId: number;
  squareFeet: number;
  buildingType: string;
  storeys: number;
  age: number;
  consumerId: number
}
