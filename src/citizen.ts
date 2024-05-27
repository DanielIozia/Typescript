import { IStartup } from './startup';

export interface ICitizen {
    name: string;
    surname: string;
    age: number;
    interests: string;
    partecipateActivity(startup: IStartup): void;
}

export class Citizen implements ICitizen {
    name: string;
    surname: string;
    age: number;
    interests: string;
  
    constructor(name: string, surname: string, age: number, interests: string) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.interests = interests;
    }
  
    partecipateActivity(startup: IStartup): void {
        if (startup.assigned) {
            console.log( "The citizen " + this.name + " " + this.surname + " take part to the startup's activities  " + startup.name );
        } 
        else {
            console.log( "ERROR --- The citizen " + this.name + " " + this.surname + 
            " cannot partecipate in the startup's activities " + startup.name + " --- ERROR" );
        }
    }
  }