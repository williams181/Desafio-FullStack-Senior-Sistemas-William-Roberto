import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';

export const routes: Routes = [
    { path: 'app-principal', component: PrincipalComponent }, 
    { path: 'cadastro-cliente', component: CadastroClienteComponent },
    { path: 'cadastro-contato', component: CadastroContatoComponent }
];

