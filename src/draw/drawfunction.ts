import { Driver } from "../models/driver";

export function drawBodyContainer(
     host: HTMLElement, 
     teamViewContainer: HTMLDivElement, 
     inputs: HTMLInputElement[]
     ) 
     {
          const title : HTMLElement = document.createElement("h1");
          title.innerHTML ="Racing";
          host.appendChild(title);

          const teamContainer: HTMLDivElement = document.createElement("div");
          teamContainer.className="teamDiv";
          host.appendChild(teamContainer);

          drawInputs(teamContainer, inputs);

          teamViewContainer.className="teamViewDiv";
          teamContainer.appendChild(teamViewContainer);
     }

function drawInputs(host: HTMLElement, inputs: HTMLInputElement[]) {
     const inputsContainer: HTMLDivElement = document.createElement("div");
     inputsContainer.className="inputsDiv";
     host.appendChild(inputsContainer);
     const labelValues = [
       "Driver 1",
       "Driver 2",
       "Driver 3"
     ];
   
     inputs.forEach((inputField, ind) => {
       const inputDiv: HTMLDivElement = document.createElement("div");
       inputDiv.className="inputDiv";
       inputsContainer.appendChild(inputDiv);
   
       const labela: HTMLLabelElement = document.createElement("label");
       labela.innerHTML = labelValues[ind];
       inputDiv.appendChild(labela);
       inputDiv.appendChild(inputField);
     });
   }
   
export function createElements(
     inputFields: HTMLInputElement[],
     driverDetails: HTMLDivElement[],
     driverNameLabels: HTMLLabelElement[],
     driverStatsLabels: HTMLLabelElement[],
     teamViewContainer: HTMLDivElement,
     positionDivs: HTMLDivElement[]
     )
     {
          for (let i = 0; i < 3; ++i) {
               inputFields[i] = document.createElement("input");
               driverDetails[i] = document.createElement("div");
               driverDetails[i].className ="playerDetails";
               driverNameLabels[i] = document.createElement("label");
               driverStatsLabels[i] = document.createElement("label");
          }
          let classNames: string[] = [
               "driver1",
               "driver2",
               "driver3"
          ];
          for (let i = 0; i < 3; ++i) {
               positionDivs[i] = document.createElement("div");
               positionDivs[i].className = classNames[i];
               teamViewContainer.appendChild(positionDivs[i]);
          }
     }

export function drawDriver(
          host: HTMLDivElement,
          driver: Driver,
          driverDetailsDiv: HTMLDivElement,
          driverNameLbl: HTMLLabelElement,
          driverStatsLbl: HTMLLabelElement
        ) {
          host.appendChild(driverDetailsDiv);
          driverDetailsDiv.appendChild(driverNameLbl);
          driverDetailsDiv.appendChild(driverStatsLbl);
          if (driver) {
            driverDetailsDiv.style.backgroundColor = "gold";
        
            driverNameLbl.innerHTML = driver.name;
        
            driverStatsLbl.innerHTML = `Wins: ${driver.wins} Car: ${driver.car} Speed: ${driver.speed}`;
          } else {
            host.appendChild(driverDetailsDiv);
            driverDetailsDiv.appendChild(driverNameLbl);
            driverNameLbl.innerHTML = "Player not found";
            driverDetailsDiv.style.backgroundColor = "red";
            driverStatsLbl.innerHTML = "";
          }
        }