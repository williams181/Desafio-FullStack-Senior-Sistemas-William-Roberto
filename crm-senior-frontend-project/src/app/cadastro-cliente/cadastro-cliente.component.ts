import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroCliente } from './cadastro-cliente.model';
import { CadastroClienteService } from './cadastro-cliente.service';

@Component({
  selector: 'cadastro-cliente',
  standalone: false,
  // imports: [RouterOutlet],
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})

export class CadastroClienteComponent {

  clientes: CadastroCliente[] = [];
  novoCliente: CadastroCliente = new CadastroCliente();
  
  constructor(private cadastroClienteService: CadastroClienteService) {}

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    this.cadastroClienteService.listarClientes()
    
      .subscribe(clientes => this.clientes = clientes);
      console.log(this.clientes)
  }

  salvarCliente() {
    this.cadastroClienteService.salvarCliente(this.novoCliente)
      .subscribe(() => {
        this.listarClientes();
        this.novoCliente = new CadastroCliente();
      });
  }

  editarCliente(cliente: CadastroCliente) {
  }

  deletarCliente(cliente: CadastroCliente) {
    this.cadastroClienteService.deletarCliente(cliente.id)
      .subscribe(() => {
        this.listarClientes();
      });
  }
}