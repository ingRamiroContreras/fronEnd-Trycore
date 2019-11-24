import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoBDComponent } from './listado-bd.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListadoBDComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule {}
