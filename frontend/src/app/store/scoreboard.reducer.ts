import * as fromTheScoreboardReducer from './scoreboard-the-scoreboard.reducer'
import {ActionReducerMap} from '@ngrx/store';

export const scoreBoardFeatureKey = 'scoreboard'

export interface ScoreboardState {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.TheScoreboardState;
}

export const reducers: ActionReducerMap<ScoreboardState> = {
  [fromTheScoreboardReducer.theScoreboardFeatureKey]: fromTheScoreboardReducer.theScoreboardReducer
}
