import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent, FooterComponent } from './shared';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './shared/layout/menu.component';
import { CoreModule } from './core';
import { ListadoModule } from './listado-bd/listado-bd.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    NgbModule,
    CoreModule,
    ListadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
