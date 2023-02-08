import {Action, createReducer} from '@ngrx/store';

export const theScoreboardFeatureKey = 'theScoreboard';

export interface TheScoreboardState {
  speler1: string,
  speler2: string
}

export const theScoreboardInitialState: TheScoreboardState = {
  speler1: '',
  speler2: ''
}

const createTheScoreboardReducer = createReducer(
  theScoreboardInitialState
);

export function theScoreboardReducer(state: TheScoreboardState | undefined, action: Action){
  return createTheScoreboardReducer(state, action);
}
