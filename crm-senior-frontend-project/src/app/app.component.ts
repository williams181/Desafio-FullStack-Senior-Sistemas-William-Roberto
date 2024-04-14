import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet],
   templateUrl: './cadastro-cliente/cadastro-cliente.component.html',
   styleUrl: './cadastro-cliente/cadastro-cliente.component.css'
})
export class AppComponent {
  title = 'crm-senior-frontend-project';
}
