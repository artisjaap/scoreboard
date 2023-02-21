import {RouterModule, Routes} from '@angular/router';
import {ModuleDashboardComponent} from './module-dashboard/module-dashboard.component';
import {ModuleComponent} from './module/module.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: ModuleDashboardComponent,
    children: [
      {
        path: "module-path",
        component: ModuleComponent
      }
    ]
  }

];

@NgModule({
  providers: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppModuleRoutingModule {


}
