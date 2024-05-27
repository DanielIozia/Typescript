import { IStartup } from './startup';

export interface IIncentive {
    ID: string;
    description: string;
    valueIncentive: number;
    electability: string;
    assignToStartup(startup: IStartup): void;
}

export class Incentive implements IIncentive {
    ID: string;
    description: string;
    valueIncentive: number;
    electability: string;
  
    constructor(ID: string, description: string, valueIncentive: number, electability: string) {
      this.ID = ID;
      this.description = description;
      this.valueIncentive = valueIncentive;
      this.electability = electability;
    }
  
    assignToStartup(startup: IStartup): void {
        startup.assigned = true;
        console.log( "The incentive " + this.ID + " was assigned at the startup " + startup.name );
    }
}