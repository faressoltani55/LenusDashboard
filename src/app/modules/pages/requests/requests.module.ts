import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequestsComponent} from "./requests.component";
import {NbCardModule, NbSelectModule} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {RequestsRoutingModule} from "./requests-routing.module";



@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    RequestsRoutingModule,
    CommonModule,
    NbCardModule,
    NbSelectModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    RequestsComponent
  ]
})
export class RequestsModule { }
