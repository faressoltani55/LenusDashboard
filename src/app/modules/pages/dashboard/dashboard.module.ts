import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {WidgetsModule} from "../../widgets/widgets.module";
import {NbCalendarRangeModule, NbCardModule} from "@nebular/theme";
import {DashboardRoutingModule} from "./dashboard-routing.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    WidgetsModule,
    NbCardModule,
    NbCalendarRangeModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
