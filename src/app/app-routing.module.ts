import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { CargaComponent } from './carga/carga.component';
import { ListasComponent } from './listas/listas.component';

const routes: Routes = [
  { path: 'lista', component: ListasComponent},
  { path: 'carga', component: CargaComponent},
  { path: '', component: ListasComponent},
  { path: '', component: CargaComponent},
  { path: 'tipo', component: ListasComponent},
  {path: 'tipo', component: CargaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
