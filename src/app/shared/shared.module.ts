import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbMenuModule,
  NbSearchModule,
  NbUserModule
} from "@nebular/theme";
import {MatRippleModule} from "@angular/material/core";



@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  exports: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbUserModule,
    NbSearchModule,
    NbActionsModule,
    MatRippleModule,
    NbMenuModule,
    NbContextMenuModule
  ]
})
export class SharedModule { }
