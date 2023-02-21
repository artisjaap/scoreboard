import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleDashboardComponent } from './module-dashboard/module-dashboard.component';
import { ModuleComponent } from './module/module.component';
import {AppModuleRoutingModule} from './app-module-routing.module';
import { ModuleHeaderComponent } from './module-header/module-header.component';
import { ModuleFooterComponent } from './module-footer/module-footer.component';
import { ModuleSidebarComponent } from './module-sidebar/module-sidebar.component';



@NgModule({
  declarations: [
    ModuleDashboardComponent,
    ModuleComponent,
    ModuleHeaderComponent,
    ModuleFooterComponent,
    ModuleSidebarComponent
  ],
  imports: [
    CommonModule,
    AppModuleRoutingModule
  ]
})
export class AppModuleModule { }
