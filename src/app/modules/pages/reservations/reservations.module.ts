import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservationsComponent} from "./reservations.component";
import {NbAccordionModule, NbCardModule} from "@nebular/theme";
import {MatIconModule} from "@angular/material/icon";
import {ReservationsRoutingModule} from "./reservations-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ReservationsComponent
  ],
    imports: [
        ReservationsRoutingModule,
        CommonModule,
        NbCardModule,
        NbAccordionModule,
        MatIconModule,
        FormsModule
    ],
  exports: [
    ReservationsComponent
  ]
})
export class ReservationsModule { }
