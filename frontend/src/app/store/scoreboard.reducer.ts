import * as fromTheScoreboardReducer from './scoreboard-the-scoreboard.reducer'
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export const scoreBoardFeatureKey = 'scoreboard'

export interface ScoreboardState {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.TheScoreboardState;
}

export const reducers: ActionReducerMap<ScoreboardState> = {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.theScoreboardReducer
}


export const getScoreboardState = createFeatureSelector<ScoreboardState>(scoreBoardFeatureKey);
export const getTheScoreboardState = createSelector(getScoreboardState, state => state[fromTheScoreboardReducer.theScoreboardFeatureKey]);

