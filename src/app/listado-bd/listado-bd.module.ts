import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { SharedModule } from '../shared/shared.module';
import { ListadoRoutingModule } from './listado-bd-routing.module';
import { ListadoBDComponent } from './listado-bd.component';


@NgModule({
  imports: [
    SharedModule,
    ListadoRoutingModule
  ],
  declarations: [
    ListadoBDComponent
  ],
  providers: [
   
  ]
})
export class ListadoModule {}
