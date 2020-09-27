import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedbacksComponent} from "./feedbacks.component";
import {MatTableModule} from "@angular/material/table";
import {WidgetsModule} from "../../widgets/widgets.module";
import {FeedbacksRoutingModule} from "./feedbacks-routing.module";



@NgModule({
  declarations: [
    FeedbacksComponent
  ],
  imports: [
    FeedbacksRoutingModule,
    CommonModule,
    MatTableModule,
    WidgetsModule
  ],
  exports: [
    FeedbacksComponent
  ]
})
export class FeedbacksModule { }
