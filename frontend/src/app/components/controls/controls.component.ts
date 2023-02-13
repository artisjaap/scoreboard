import { Component } from '@angular/core';
import * as scoreboardActions from '../../store/scoreboard-the-scoreboard.actions';
import {Store} from '@ngrx/store';
import {TheScoreboardState} from '../../store/scoreboard-the-scoreboard.reducer';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  constructor(private state: Store<TheScoreboardState>) {
  }

  switchPlayer() {
    this.state.dispatch(scoreboardActions.turnPlayer());
  }

  potRed() {
    this.state.dispatch(scoreboardActions.potRed());
  }

  potYellow() {
    this.state.dispatch(scoreboardActions.potYellow());
  }

  potGreen() {
    this.state.dispatch(scoreboardActions.potGreen());
  }

  potBrown() {
    this.state.dispatch(scoreboardActions.potBrown());
  }

  potBlue() {
    this.state.dispatch(scoreboardActions.potBlue());
  }

  potPink() {
    this.state.dispatch(scoreboardActions.potPink());
  }

  potBlack() {
    this.state.dispatch(scoreboardActions.potBlack());
  }

  potWhite() {
    this.state.dispatch(scoreboardActions.potWhite());
  }

  reset() {
    this.state.dispatch(scoreboardActions.restart());
  }
  newGame() {
    this.state.dispatch(scoreboardActions.newGame());
  }
}
