import {
     combineLatest,
     debounceTime,
     filter,
     from,
     fromEvent,
     map,
     Observable,
     of,
     switchMap,
     toArray,
   } from "rxjs";
   import { environments } from "../environments";
   //import { Competition } from "../models/racing";
   import { TeamOpponent } from "../models/teamOpponent";
   import { Driver } from "../models/driver";
   import { Team } from "../models/team";
   import { drawDriver } from "../draw/drawfunction";

   export function playerInputObs(
     inputField: HTMLInputElement,
     driverContainer: HTMLDivElement,
     driverPosition: string
   ) {
     return fromEvent(inputField, "input").pipe(
       debounceTime(500),
       map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
       filter((driverName) => driverName.length >= 3),
       switchMap((driverName) =>
         getPlayer(driverName, driverContainer, driverPosition)
       ),
       map((data) => data[0])
     );
   }
   
   function getPlayer(
     driverName: string,
     driverContainer: HTMLDivElement,
     driverPosition: string
   ): Observable<Driver[]> {
     return from(
       fetch(`${environments.API_URL}/${driverPosition}/?name=${driverName}`)
         .then((res) => {
           if (res.ok) return res.json();
           else throw new Error("Player not found");
         })
         .catch((err) => (driverContainer.innerHTML = "Player not found"))
     );
   }
   
   export function makeTeamObs(
     inputFields: HTMLInputElement[],
     positionDivs: HTMLDivElement[],
     driverDetails: HTMLDivElement[],
     driverNameLabels: HTMLLabelElement[],
     driverStatsLabels: HTMLLabelElement[]
   ) {
     const driver1 = playerInputObs(
       inputFields[0],
       positionDivs[0],
       "driver1"
     );
     driver1.subscribe((driver: Driver) =>
       drawDriver(
         positionDivs[0],
         driver,
         driverDetails[0],
         driverNameLabels[0],
         driverStatsLabels[0]
       )
     );
   
     // const defenderObs = playerInputObs(
     //   inputFields[1],
     //   positionDivs[1],
     //   "defenders"
     // );
     // defenderObs.subscribe((player: Player) =>
     //   drawPlayer(
     //     positionDivs[1],
     //     player,
     //     playerDetails[1],
     //     playerNameLabels[1],
     //     playerStatsLabels[1]
     //   )
     // );
   
     // const leftMidfielderObs = playerInputObs(
     //   inputFields[2],
     //   positionDivs[2],
     //   "leftmids"
     // );
     // leftMidfielderObs.subscribe((player: Player) =>
     //   drawPlayer(
     //     positionDivs[2],
     //     player,
     //     playerDetails[2],
     //     playerNameLabels[2],
     //     playerStatsLabels[2]
     //   )
     // );
 }