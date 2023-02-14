import {Action, createReducer, on} from '@ngrx/store';
import {DartsPlayer} from '../model/darts-model';
import {turnPlayer} from '../../snooker/store/snooker-scoreboard-the-scoreboard.actions';
import {TheScoreboardState} from '../../snooker/store/snooker-scoreboard-the-scoreboard.reducer';
import {addArrow, commitScore} from './darts-scoreboard-the-scoreboard.actions';


export const theDartsScoreboardFeatureKey = 'theDartsScoreboard';


export interface TheDartsScoreboardState {

  playerStarted: number;
  currentDarts: string[];
  player1: DartsPlayer;
  player2: DartsPlayer

}

export const theDartsScoreboardInitialState: TheDartsScoreboardState = {
  playerStarted: 1,
  currentDarts: [],
  player1: {
    name: "Player 1",
    score: [{newScore: 501, darts: [], visitScore: -1}],
    currentPlayer: true
  },
  player2: {
    name: "Player 2",
    score: [{newScore: 501, darts: [], visitScore: -1}],
    currentPlayer: false
  }

};

function calcScore(darts: string[]): number {
  if(darts.length === 0){
    return 0;
  }
  return darts.map(val => val.substring(0, 1) === 'S'?parseInt(val.substring(1)):
    val.substring(0,1) === 'D'?2*parseInt(val.substring(1)):3*parseInt(val.substring(1)))
    .reduce((a,b)=> a+b);
}


function addScore(player: DartsPlayer, darts: string[]) {
  let calculatedScore = calcScore(darts);
  let latestScore: number = player.score[player.score.length-1].newScore;

  if(player.currentPlayer){
    return {
      ...player,
      currentPlayer: !player.currentPlayer,
      score: [...player.score, {newScore: latestScore -calculatedScore, darts, visitScore: calculatedScore}]
    }

  }
  return {
    ...player,
    currentPlayer: !player.currentPlayer,
  };
}

const createTheDartsScoreboardReducer = createReducer(
  theDartsScoreboardInitialState,
  on(addArrow, (state: TheDartsScoreboardState, {score}) => {
    let arrows: string[] = [...state.currentDarts, score];
    return {
      ...state,
      currentDarts: arrows.length > 3 ? arrows.slice(arrows.length - 3) : arrows
    };
  }),
  on(commitScore, (state: TheDartsScoreboardState) => ({
    ...state,
    currentDarts: [],
    player1: addScore(state.player1, state.currentDarts),
    player2: addScore(state.player2, state.currentDarts)
  }))
);

export function theDartsScoreboardReducer(state: TheDartsScoreboardState | undefined, action: Action) {
  return createTheDartsScoreboardReducer(state, action);
}
