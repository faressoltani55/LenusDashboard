import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarService,
  NbCardModule,
  NbSidebarModule, NbDatepickerModule, NbSelectModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {DefaultModule} from "./layouts/default/default.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import {AuthInterceptor} from "./helpers/auth-interceptor";

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 500,
        },
      },
    }),
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbDatepickerModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbEvaIconsModule,
    NbCardModule,
    NbSelectModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    NbSidebarService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
