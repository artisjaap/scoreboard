import {Component, Input} from '@angular/core';
import {PlayerStats} from '../../model/model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input()
  public player$!: Observable<PlayerStats>

}
