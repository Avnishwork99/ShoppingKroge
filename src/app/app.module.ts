import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidebarComponent } from './MyComponents/sidebar/sidebar.component';
import { BottomComponent } from './MyComponents/bottom/bottom.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { DataCardComponent } from './MyComponents/data-card/data-card.component';
import { DataAreaComponent } from './MyComponents/data-area/data-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SidebarComponent,
    BottomComponent,
    NavbarComponent,
    DataCardComponent,
    DataAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
