import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroContato } from './cadastro-contato.model';
import { CadastroContatoService } from './cadastro-contato.service';

@Component({
  selector: 'cadastro-contato',
  standalone: false,
  // imports: [RouterOutlet],
  templateUrl: './cadastro-contato.component.html',
  styleUrl: './cadastro-contato.component.css'
})
export class CadastroContatoComponent {
  
  contatos: CadastroContato[] = [];
  novoContato: CadastroContato = new CadastroContato();

  constructor(private cadastroContatoService: CadastroContatoService) {}

  ngOnInit() {
    this.listarContatos();
  }

  listarContatos() {
    this.cadastroContatoService.listarContatos()
      .subscribe(contatos => this.contatos = contatos);
  }

  salvarContato() {
    this.cadastroContatoService.salvarContato(this.novoContato)
      .subscribe(() => {
        this.listarContatos();
        this.novoContato = new CadastroContato();
      });
  }

  editarContato(contato: CadastroContato) {
  }

  deletarContato(contato: CadastroContato) {
    this.cadastroContatoService.deletarContato(contato.id)
      .subscribe(() => {
        this.listarContatos();
      });
  }
}
