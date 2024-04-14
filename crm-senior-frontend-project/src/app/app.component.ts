import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet],
  templateUrl: './principal/principal.component.html',
  styleUrl: './principal/principal.component.css'
})
export class AppComponent {
  title = 'crm-senior-frontend-project';
}
