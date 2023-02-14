import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DartsboardComponent } from './components/dartsboard/dartsboard.component';
import { DartsboardLandingComponent } from './components/dartsboard-landing/dartsboard-landing.component';
import {DartsRoutingModule} from './darts-routing.module';



@NgModule({
  declarations: [
    DartsboardComponent,
    DartsboardLandingComponent,

  ],
  imports: [
    CommonModule,
    DartsRoutingModule
  ]
})
export class DartsModule { }
