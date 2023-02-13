import {Action, createReducer, on} from '@ngrx/store';
import {
  newGame,
  potBlack,
  potBlue,
  potBrown,
  potGreen,
  potPink,
  potRed,
  potWhite,
  potYellow, restart,
  turnPlayer
} from './scoreboard-the-scoreboard.actions';
import {PlayerStats} from '../model/model';

export const theScoreboardFeatureKey = 'theScoreboard';

export interface TheScoreboardState {
  currentPlayer: number;
  playerStarted: number;
  player1: PlayerStats,
  player2: PlayerStats,

  ballsOnTable: {
    red: number,
    yellow: number,
    green: number,
    brown: number,
    blue: number,
    pink: number,
    black: number,
  }
}

export const theScoreboardInitialState: TheScoreboardState = {
  currentPlayer: 1,
  playerStarted: 1,

  player1: {
    name: 'Player 1',
    framesWon: 0,
    break: 0,
    highestBreak: 0,
    score: 0,
    matchHighestBreak: 0
  },
  player2: {
    name: 'Player 1',
    framesWon: 0,
    break: 0,
    highestBreak: 0,
    score: 0,
    matchHighestBreak: 0
  },

  ballsOnTable: {
    red: 15,
    yellow: 1,
    green: 1,
    brown: 1,
    blue: 1,
    pink: 1,
    black: 1,
  },
};

function calculateError(state: TheScoreboardState) {
  if(state.ballsOnTable.pink === 0) return 7;
  if(state.ballsOnTable.blue === 0) return 6;
  if(state.ballsOnTable.brown === 0) return 5;
  return 4;
}

const createTheScoreboardReducer = createReducer(
  theScoreboardInitialState,
  on(turnPlayer, (state: TheScoreboardState) => ({
    ...state,
    currentPlayer: state.currentPlayer===1?2:1,
    player1: {
      ...state.player1,
      break: 0

    },
    player2: {
      ...state.player2,
      break: 0
    }

  })),
  on(potRed, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      score: state.currentPlayer === 1 ? state.player1.score + 1 : state.player1.score,
      break: state.currentPlayer === 1 ? state.player1.break + 1 : state.player1.break,
      highestBreak: state.currentPlayer === 1 && state.player1.break  + 1 > state.player1.highestBreak? state.player1.break + 1: state.player1.highestBreak,
    },
    player2: {
      ...state.player2,
      score: state.currentPlayer === 2 ? state.player2.score + 1 : state.player2.score,
      break: state.currentPlayer === 2 ? state.player2.break + 1 : state.player2.break,
      highestBreak: state.currentPlayer === 2 && state.player2.break + 1 > state.player2.highestBreak? state.player2.break + 1 : state.player2.highestBreak
    },
    ballsOnTable: {
      ...state.ballsOnTable,
      red: state.ballsOnTable.red - 1
    }
  })),
  on(potYellow, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      score: state.currentPlayer === 1 ? state.player1.score + 2 : state.player1.score,
      break: state.currentPlayer === 1 ? state.player1.break + 2 : state.player1.break,
      highestBreak: state.currentPlayer === 1 && state.player1.break  + 2 > state.player1.highestBreak? state.player1.break + 2: state.player1.highestBreak,
    },
    player2: {
      ...state.player2,
      score: state.currentPlayer === 2 ? state.player2.score + 2 : state.player2.score,
      break: state.currentPlayer === 2 ? state.player2.break + 2 : state.player2.break,
      highestBreak: state.currentPlayer === 2 && state.player2.break + 2 > state.player2.highestBreak? state.player2.break + 2 : state.player2.highestBreak
    },
    ballsOnTable: {
      ...state.ballsOnTable,
      yellow: state.ballsOnTable.red===0?0:1
    }
  })),
  on(potGreen, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      score: state.currentPlayer === 1 ? state.player1.score + 3 : state.player1.score,
      break: state.currentPlayer === 1 ? state.player1.break + 3 : state.player1.break,
      highestBreak: state.currentPlayer === 1 && state.player1.break  + 3 > state.player1.highestBreak? state.player1.break + 3: state.player1.highestBreak,
    },
    player2: {
      ...state.player2,
      score: state.currentPlayer === 2 ? state.player2.score + 3 : state.player2.score,
      break: state.currentPlayer === 2 ? state.player2.break + 3 : state.player2.break,
      highestBreak: state.currentPlayer === 2 && state.player2.break + 3 > state.player2.highestBreak? state.player2.break + 3 : state.player2.highestBreak
    },
    ballsOnTable: {
      ...state.ballsOnTable,
      green: state.ballsOnTable.red===0?0:1
    }
  })),
  on(potBrown, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      score: state.currentPlayer === 1 ? state.player1.score + 4 : state.player1.score,
      break: state.currentPlayer === 1 ? state.player1.break + 4 : state.player1.break,
      highestBreak: state.currentPlayer === 1 && state.player1.break  + 4 > state.player1.highestBreak? state.player1.break + 4: state.player1.highestBreak,
    },
    player2: {
      ...state.player2,
      score: state.currentPlayer === 2 ? state.player2.score + 4 : state.player2.score,
      break: state.currentPlayer === 2 ? state.player2.break + 4 : state.player2.break,
      highestBreak: state.currentPlayer === 2 && state.player2.break + 4 > state.player2.highestBreak? state.player2.break + 4 : state.player2.highestBreak
    },
    ballsOnTable: {
      ...state.ballsOnTable,
      brown: state.ballsOnTable.red===0?0:1
    }
  })),
  on(potBlue, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      score: state.currentPlayer === 1 ? state.player1.score + 5 : state.player1.score,
      break: state.currentPlayer === 1 ? state.player1.break + 5 : state.player1.break,
      highestBreak: state.currentPlayer === 1 && state.player1.break  + 5 > state.player1.highestBreak? state.player1.break + 5: state.player1.highestBreak,
    },
    player2: {
      ...state.player2,
      score: state.currentPlayer === 2 ? state.player2.score + 5 : state.player2.score,
      break: state.currentPlayer === 2 ? state.player2.break + 5 : state.player2.break,
      highestBreak: state.currentPlayer === 2 && state.player2.break + 5 > state.player2.highestBreak? state.player2.break + 5 : state.player2.highestBreak
    },
    ballsOnTable: {
      ...state.ballsOnTable,
      blue: state.ballsOnTable.red===0?0:1
    }
  })),
  on(potPink, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      score: state.currentPlayer === 1 ? state.player1.score + 6 : state.player1.score,
      break: state.currentPlayer === 1 ? state.player1.break + 6 : state.player1.break,
      highestBreak: state.currentPlayer === 1 && state.player1.break  + 6 > state.player1.highestBreak? state.player1.break + 6: state.player1.highestBreak,
    },
    player2: {
      ...state.player2,
      score: state.currentPlayer === 2 ? state.player2.score + 6 : state.player2.score,
      break: state.currentPlayer === 2 ? state.player2.break + 6 : state.player2.break,
      highestBreak: state.currentPlayer === 2 && state.player2.break + 6 > state.player2.highestBreak? state.player2.break + 6 : state.player2.highestBreak
    },

    ballsOnTable: {
      ...state.ballsOnTable,
      pink: state.ballsOnTable.red===0?0:1
    }
  })),
  on(potBlack, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      score: state.currentPlayer === 1 ? state.player1.score + 7 : state.player1.score,
      break: state.currentPlayer === 1 ? state.player1.break + 7 : state.player1.break,
      highestBreak: state.currentPlayer === 1 && state.player1.break  + 7 > state.player1.highestBreak? state.player1.break + 7: state.player1.highestBreak,
    },
    player2: {
      ...state.player2,
      score: state.currentPlayer === 2 ? state.player2.score + 7 : state.player2.score,
      break: state.currentPlayer === 2 ? state.player2.break + 7 : state.player2.break,
      highestBreak: state.currentPlayer === 2 && state.player2.break + 7 > state.player2.highestBreak? state.player2.break + 7 : state.player2.highestBreak
    },

    ballsOnTable: {
      ...state.ballsOnTable,
      back: state.ballsOnTable.red===0?0:1
    }
  })),
  on(potWhite, (state: TheScoreboardState) => ({
    ...state,
    scoreSpeler1: state.currentPlayer === 1 ? state.player1.score: state.player1.score + calculateError(state),
    breakSpeler1: 0,
    scoreSpeler2: state.currentPlayer === 2 ? state.player2.score : state.player2.score + calculateError(state),
    breakSpeler2: 0
  })),
  on(restart, (state: TheScoreboardState) => ({
    ...theScoreboardInitialState
  })),
  on(newGame, (state: TheScoreboardState) => ({
    ...state,
    currentPlayer: state.playerStarted === 1?2:1,
    playerStarted: state.playerStarted === 1?2:1,
    player1: {
      ...state.player1,
      highestBreak: 0,
      break: 0,
      score: 0,
      framesWon: state.player1.score > state.player2.score? state.player1.framesWon + 1: state.player1.framesWon,
      matchHighestBreak: state.player1.highestBreak > state.player1.matchHighestBreak? state.player1.highestBreak:state.player1.matchHighestBreak
    },
    player2: {
      ...state.player2,
      highestBreak: 0,
      break: 0,
      score: 0,
      framesWon: state.player2.score > state.player1.score? state.player2.framesWon + 1: state.player2.framesWon,
      matchHighestBreak: state.player2.highestBreak > state.player2.matchHighestBreak? state.player2.highestBreak:state.player2.matchHighestBreak
    },
    ballsOnTable: {
       ...theScoreboardInitialState.ballsOnTable
    }
  }))
);

export function theScoreboardReducer(state: TheScoreboardState | undefined, action: Action) {
  return createTheScoreboardReducer(state, action);
}
