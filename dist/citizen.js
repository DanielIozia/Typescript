"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citizen = void 0;
class Citizen {
    constructor(name, surname, age, interests) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.interests = interests;
    }
    partecipateActivity(startup) {
        if (startup.assigned) {
            console.log("The citizen " + this.name + " " + this.surname + " take part to the startup's activities  " + startup.name);
        }
        else {
            console.log("ERROR --- The citizen " + this.name + " " + this.surname +
                " cannot partecipate in the startup's activities " + startup.name + " --- ERROR");
        }
    }
}
exports.Citizen = Citizen;
