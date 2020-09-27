import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NbAuthModule} from "@nebular/auth";


@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    NbLayoutModule,
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
