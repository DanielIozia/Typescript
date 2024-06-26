"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
class Startup {
    constructor(name, sectorFocus, description, productsServices) {
        this.assigned = false;
        this.name = name;
        this.sectorFocus = sectorFocus;
        this.description = description;
        this.productsServices = productsServices;
    }
    receiveIncentive(incentive) {
        if (this.assigned) {
            console.log("The startup " + this.name + " received the " + incentive.ID + " incentive.");
        }
        else {
            console.log("ERROR --- The startup " + this.name + " did not received " + incentive.ID + " incentive. --- ERROR");
        }
    }
}
exports.Startup = Startup;
