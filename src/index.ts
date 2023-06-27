import { createElements,drawBodyContainer} from "./draw/drawfunction";
import {makeTeamObs} from "./controllers/observables";

let inputFields: HTMLInputElement[] = [];
let teamViewContainer: HTMLDivElement = document.createElement("div");

let driverDetails: HTMLDivElement[] = [];
let driverNameLabels: HTMLLabelElement[] = [];
let driverStatsLabels: HTMLLabelElement[] = [];
let positionDivs: HTMLDivElement[] = [];

createElements(inputFields, driverDetails, driverNameLabels, driverStatsLabels, teamViewContainer, positionDivs);
drawBodyContainer(document.body, teamViewContainer, inputFields);
makeTeamObs( inputFields, positionDivs, driverDetails, driverNameLabels, driverStatsLabels);