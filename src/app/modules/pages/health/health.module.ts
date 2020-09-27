import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthComponent} from "./health.component";
import {NbCardModule} from "@nebular/theme";
import {MatIconModule} from "@angular/material/icon";
import {HealthRoutingModule} from "./health-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HealthComponent
  ],
  imports: [
    HealthRoutingModule,
    CommonModule,
    NbCardModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    HealthComponent
  ]
})
export class HealthModule { }
