import {Component, Input} from '@angular/core';
import {PlayerStats} from '../../model/model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './snooker-player.component.html',
  styleUrls: ['./snooker-player.component.scss']
})
export class SnookerPlayerComponent {

  @Input()
  public player$!: Observable<PlayerStats>



}
