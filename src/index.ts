import { createElements,drawBodyContainer} from "./draw/drawfunction";
import {makeTeamObs} from "./controllers/observables";

let inputFields: HTMLInputElement[] = [];
let teamViewContainer: HTMLDivElement = document.createElement("div");

let driverDetails: HTMLDivElement[] = [];
let driverNameLabels: HTMLLabelElement[] = [];
let driverStatsLabels: HTMLLabelElement[] = [];
let driverImgCar: HTMLImageElement[]=[];
let positionDivs: HTMLDivElement[] = [];

createElements(inputFields, driverDetails, driverNameLabels, driverStatsLabels, driverImgCar, teamViewContainer, positionDivs);
drawBodyContainer(document.body, teamViewContainer, inputFields);
makeTeamObs( inputFields, positionDivs, driverDetails, driverNameLabels, driverStatsLabels, driverImgCar);

const resultsDiv = document.createElement("div");
resultsDiv.classList.add("resultsDiv");
document.body.appendChild(resultsDiv);