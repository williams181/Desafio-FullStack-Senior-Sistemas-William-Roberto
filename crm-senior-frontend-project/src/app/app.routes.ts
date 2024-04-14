import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroClienteService } from './cadastro-cliente/cadastro-cliente.service';
import { CadastroContatoService } from './cadastro-contato/cadastro-contato.service';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent }, 
    { path: '/cadastro-cliente', component: CadastroClienteComponent },
    { path: '/cadastro-contato', component: CadastroContatoComponent }
];

// @NgModule({
//     declarations: [
//     ],
//     imports: [
//       BrowserModule,
//       CommonModule, 
//       HttpClientModule,
//       RouterModule.forRoot(routes),
//     ],
//     providers: [    
//       CadastroClienteService,
//       CadastroContatoService
//     ],
//     bootstrap: []
//   })
//   export class AppModule { }