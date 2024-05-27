import { IIncentive } from './incentive';

export interface IStartup {
    name: string;
    sectorFocus: string;
    description: string;
    productsServices: string;
    receiveIncentive(incentive: IIncentive): void;
    assigned: boolean;
}

export class Startup implements IStartup {
    name: string;
    sectorFocus: string;
    description: string;
    productsServices: string;
    assigned: boolean = false;
  
    constructor(name: string, sectorFocus: string, description: string, productsServices: string) {
      this.name = name;
      this.sectorFocus = sectorFocus;
      this.description = description;
      this.productsServices = productsServices;
    }
  
    receiveIncentive(incentive: IIncentive): void {
        if (this.assigned) {
            console.log("The startup " + this.name + " received the " + incentive.ID + " incentive." );
        } 
        else {
            console.log("ERROR --- The startup " + this.name + " did not received " + incentive.ID + " incentive. --- ERROR");
        }
    }
}