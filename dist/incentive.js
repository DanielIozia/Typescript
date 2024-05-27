"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incentive = void 0;
class Incentive {
    constructor(ID, description, valueIncentive, electability) {
        this.ID = ID;
        this.description = description;
        this.valueIncentive = valueIncentive;
        this.electability = electability;
    }
    assignToStartup(startup) {
        startup.assigned = true;
        console.log("The incentive " + this.ID + " was assigned at the startup " + startup.name);
    }
}
exports.Incentive = Incentive;
