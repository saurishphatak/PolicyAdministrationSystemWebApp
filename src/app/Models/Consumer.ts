import { IBusiness } from "./Business";

export interface IConsumer {
  id: number;
  name: string;
  dob: Date;
  email: string;
  pan: string;
  business: IBusiness
}

export class Consumer implements IConsumer {
  public id: number = -1;
  public name: string;
  public dob: Date;
  public email: string;
  public pan: string;
  public business: IBusiness;

  public constructor(
    initialValues: IConsumer
  ) {
    this.id = initialValues.id;
    this.name = initialValues.name;
    this.dob = initialValues.dob;
    this.email = initialValues.email;
    this.pan = initialValues.pan;
    this.business = initialValues.business;
  }
}


