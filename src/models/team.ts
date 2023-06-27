import { Driver } from "./driver";

export class Team {
     drivers: Driver[];
     name: string;
   
     constructor(drivers: Driver[]) {
       this.drivers = drivers;
       this.name = "BestDrivers";
     }
   
     getTeamCoef(): number {
       let coef: number = 0;
       this.drivers.forEach((p) => {
         coef += 2*p.wins + p.speed * p.time;
       });
   
       return coef / this.drivers.length;
     }
   }
   