import { concatMap, delay, from, Observable, of } from "rxjs";
import { drawResults } from "../draw/drawfunction";
import { TeamOpponent } from "./teamOpponent";
import { Team } from "./team";

export class Competition {
  myTeam: Team;

  opponents: TeamOpponent[] = [];
  opponentsObs: Observable<TeamOpponent[]>;

  constructor(opponentsObs: Observable<TeamOpponent[]>, myTeam: Team) {
    this.myTeam = myTeam;
    this.opponentsObs = opponentsObs;
  }

  playGames(opponents: TeamOpponent[]) {
    from(opponents)
      .pipe(concatMap((opp) => of(opp).pipe(delay(1000))))
      .subscribe((data) =>
        this.determineWinner(this.myTeam.name,this.myTeam.getTeamCoef(), data)
      );
  }

  startCompetition() {
    this.opponentsObs.subscribe((opps) => {
      this.playGames(opps);
    });
  }

  determineWinner(myTeamName: string, myTeamCoeff: number, opponent: TeamOpponent) {
    let myScore, opponentScore;

    if (myTeamCoeff >= opponent.coefficient) {
      myScore = Math.round(Math.random() * 5);
      opponentScore = Math.round(Math.random() * 4);
    } else {
      myScore = Math.round(Math.random() * 4);
      opponentScore = Math.round(Math.random() * 5);
    }
    let outcome: string;

    if (myScore > opponentScore) outcome = "WIN";
    else if (myScore < opponentScore) outcome = "LOST";
    else outcome = "DRAW";

    drawResults(myTeamName, opponent.name, myScore, opponentScore, outcome);
  }
}
