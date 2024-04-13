import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent }, 
    { path: 'cadastro-cliente', component: CadastroClienteComponent },
];

@NgModule({
    declarations: [
      CadastroClienteComponent,
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }