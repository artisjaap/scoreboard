import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppDashboardComponent} from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: AppDashboardComponent
  },
  {
    path: "module",
    loadChildren: () => import('./app-module/app-module.module').then(m => m.AppModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
