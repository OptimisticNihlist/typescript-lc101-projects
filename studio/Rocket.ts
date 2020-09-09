import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket{
name: string;
totalCapacityKg: number;
cargoItems: Cargo[] = [];
astronauts: Astronaut[] = [];

constructor(name: string, totalCapacityKg: number){
this.name = name;
this.totalCapacityKg = totalCapacityKg;
}
public sumMass(items: Payload[]):number {
    let massSum: number = 0;
    items.forEach(item => {
        massSum += item.massKg;
    })
    return massSum;
}
public currentMassKg():number {
    let totalPayloadMass: number = this.sumMass(this.cargoItems)+this.sumMass(this.astronauts);
    return totalPayloadMass;
}
public canAdd(item: Payload):boolean {
    return this.currentMassKg()+item.massKg <= this.totalCapacityKg
}
public addCargo(cargo: Cargo):boolean {
    if(this.canAdd(cargo)){
        this.cargoItems.push(cargo);
        return true;
    }
    return false;
}
public addAstronaut(astronaut: Astronaut): boolean {
    if(this.canAdd(astronaut)){
        this.astronauts.push(astronaut);
        return true;
    }
    return false;
}
}