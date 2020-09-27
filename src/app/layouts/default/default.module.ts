import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {SharedModule} from "../../shared/shared.module";
import {
  NbMenuModule, NbSidebarModule, NbDatepickerModule, NbLayoutModule,
} from "@nebular/theme";
import {WidgetsModule} from "../../modules/widgets/widgets.module";
import {DefaultRoutingModule} from "./default-routing.module";



@NgModule({
  declarations: [
    DefaultComponent
  ],
  exports: [
    DefaultComponent
  ],
  imports: [
    DefaultRoutingModule,
    CommonModule,
    NbMenuModule,
    SharedModule,
    NbSidebarModule,
    WidgetsModule,
    NbDatepickerModule,
    NbLayoutModule,
  ]
})
export class DefaultModule { }
