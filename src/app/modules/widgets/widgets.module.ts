import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbCardModule, NbListModule, NbSearchModule, NbSelectModule, NbUserModule} from "@nebular/theme";
import { OccupationComponent } from './occupation/occupation.component';
import { RequestsWidgetComponent } from './requests-widget/requests-widget..component';
import {NgxEchartsModule} from "ngx-echarts";
import { ContactComponent } from './contact/contact.component';
import { RatingsPiComponent } from './ratings-pi/ratings-pi.component';



@NgModule({
  declarations: [
  OccupationComponent,
  RequestsWidgetComponent,
  ContactComponent,
  RatingsPiComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NbListModule,
    NbUserModule,
    NbSearchModule,
    NbSelectModule
  ],
  exports: [
    OccupationComponent,
    RequestsWidgetComponent,
    ContactComponent,
    RatingsPiComponent
  ]
})
export class WidgetsModule { }
