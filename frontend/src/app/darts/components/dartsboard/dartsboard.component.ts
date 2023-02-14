import { Component } from '@angular/core';
import {TheDartsScoreboardState} from '../../store/darts-scoreboard-the-scoreboard.reducer';
import {Store} from '@ngrx/store';
import {addArrow} from '../../store/darts-scoreboard-the-scoreboard.actions';

@Component({
  selector: 'app-dartsboard',
  templateUrl: './dartsboard.component.html',
  styleUrls: ['./dartsboard.component.scss']
})
export class DartsboardComponent {

  constructor(private store:Store<TheDartsScoreboardState>) {
  }
  addArrow(score:string) {
    this.store.dispatch(addArrow({score}));
  }
}
