import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet],
   templateUrl: './cadastro-contato/cadastro-contato.component.html',
   styleUrl: './cadastro-contato/cadastro-contato.component.css'
})
export class AppComponent {
  title = 'crm-senior-frontend-project';
}
