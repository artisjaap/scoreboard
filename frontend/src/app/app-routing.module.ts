import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "snooker",
    loadChildren: () => import('./snooker/snooker.module').then(m => m.SnookerModule)
  },
  {
    path: "darts",
    loadChildren: () => import('./darts/darts.module').then(m => m.DartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
