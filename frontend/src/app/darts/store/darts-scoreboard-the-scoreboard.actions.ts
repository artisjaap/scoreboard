import {createAction, props} from '@ngrx/store';

export const turnPlayer = createAction('[THE-DARTS-SCOREBOARD - turn player]');
export const addArrow = createAction('[THE-DARTS-SCOREBOARD - add arrow]', props<{score:string}>())

export const commitScore = createAction('[THE-DARTS-SCOREBOARD - commit score]')
