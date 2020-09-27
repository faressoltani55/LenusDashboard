import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientsComponent} from "./clients.component";
import {
  NbAccordionModule, NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule, NbListModule,
  NbSearchModule, NbUserModule
} from "@nebular/theme";
import {MatIconModule} from "@angular/material/icon";
import {ClientsRoutingModule} from "./clients-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    ClientsRoutingModule,
    CommonModule,
    NbCardModule,
    MatIconModule,
    NbInputModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbAccordionModule,
    NbSearchModule,
    NbListModule,
    NbUserModule,
    NbButtonModule,
    FormsModule
  ],
  exports: [
    ClientsComponent
  ]
})
export class ClientsModule { }
