export class Property implements IProperty {
  public businessId: number;
  public squareFeet: number;
  public buildingType: string;
  public storeys: number;
  public age: number;
  public consumerId: number;
  public costOfAsset: number;
  public salvageValue: number;
  public usefulLifeOfAsset: number;
  public propertyType: string;

  public constructor(
    initialValues: IProperty
  ) {
    this.age = initialValues.age;
    this.buildingType = initialValues.buildingType;
    this.businessId = initialValues.businessId;
    this.squareFeet = initialValues.squareFeet;
    this.storeys = initialValues.storeys;
    this.consumerId = initialValues.consumerId;
    this.costOfAsset = initialValues.costOfAsset;
    this.salvageValue = initialValues.salvageValue;
    this.usefulLifeOfAsset = initialValues.usefulLifeOfAsset;
    this.propertyType = initialValues.propertyType;
  }

}

export interface IProperty {
  businessId: number;
  squareFeet: number;
  buildingType: string;
  storeys: number;
  age: number;
  consumerId: number;
  costOfAsset: number;
  salvageValue: number;
  usefulLifeOfAsset: number;
  propertyType: string;
}
