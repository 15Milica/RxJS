import { Driver } from "../models/driver";

export function drawBodyContainer(
     host: HTMLElement, 
     teamViewContainer: HTMLDivElement, 
     inputs: HTMLInputElement[]
     ) 
     {
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
   
       const labela: HTMLElement = document.createElement("h3");
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
     driverImgCar:HTMLImageElement[],
     teamViewContainer: HTMLDivElement,
     positionDivs: HTMLDivElement[]
     )
     {
          for (let i = 0; i < 3; ++i) {
               inputFields[i] = document.createElement("input");
               driverDetails[i] = document.createElement("div");
               driverDetails[i].className ="driverDetails";
               driverNameLabels[i] = document.createElement("label");
               driverStatsLabels[i] = document.createElement("label");
               driverImgCar[i] = document.createElement("img");
               driverImgCar[i].className ="driverImg";
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
          driverStatsLbl: HTMLLabelElement,
          driverImgCar: HTMLImageElement
        ) {
          host.appendChild(driverDetailsDiv);
          driverDetailsDiv.appendChild(driverNameLbl);
          driverDetailsDiv.appendChild(driverStatsLbl);
          driverDetailsDiv.appendChild(driverImgCar);
          if (driver) {
            driverNameLbl.innerHTML = driver.name;
            driverStatsLbl.innerHTML = `Club: ${driver.club} Wins: ${driver.wins} 
             Speed: ${driver.speed}`;
             driverImgCar.src = driver.car;
          } else {
            host.appendChild(driverDetailsDiv);
            driverDetailsDiv.appendChild(driverNameLbl);
            driverNameLbl.innerHTML = "Player not found";
            driverStatsLbl.innerHTML = "";
            driverImgCar.src = "https://us.v-cdn.net/6022045/uploads/defaultavatar.png";
          }
        }

export function drawResults(
          myTeamName:string,
          opponentName: string,
          myScore: number,
          opponentScore: number,
          result: string
        ) {
          const host = document.querySelector(".resultsDiv");
          const resultLabel = document.createElement("label");
          host.appendChild(resultLabel);
        
          switch (result) {
            case "WIN":
              resultLabel.style.color = "green";
              break;
            case "LOST":
              resultLabel.style.color = "red";
              break;
            case "DRAW":
              resultLabel.style.color = "yellow";
              break;
            default:
              resultLabel.style.color = "white";
          }
        
          resultLabel.innerHTML = `Racing ${myTeamName} vs ${opponentName}, ${result}: (${myScore}:${opponentScore})`;
        }