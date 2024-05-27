import { IIncentive } from './incentive';

export interface IStartup {
    name: string;
    sectorFocus: string;
    description: string;
    productsServices: string;
    getIncentive(incentivo: IIncentive): void;
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
  
    getIncentive(incentivo: IIncentive): void {
        if (this.assigned) {
            console.log("The startup " + this.name + " received the " + incentivo.ID + " incentive." );
        } 
        else {
            console.log("ERROR --- The startup " + this.name + " did not received " + incentivo.ID + " incentive. --- ERROR");
        }
    }
}