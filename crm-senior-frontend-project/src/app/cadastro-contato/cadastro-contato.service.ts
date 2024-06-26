import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroContato } from './cadastro-contato.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroContatoService {

  private apiUrl = '/api/contato';

  constructor(private http: HttpClient) {}

  listarContatosService(): Observable<CadastroContato[]> {
    const url = `${this.apiUrl}/listar`; // Adicionando /listar ao caminho base
    return this.http.get<CadastroContato[]>(url);
  }

  obterContato(id: number): Observable<CadastroContato> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CadastroContato>(url);
  }

  salvarContato(contato: CadastroContato): Observable<CadastroContato> {
    return this.http.post<CadastroContato>(this.apiUrl, contato);
  }

  atualizarContato(contato: CadastroContato): Observable<CadastroContato> {
    const url = `${this.apiUrl}/${contato.id}`;
    return this.http.put<CadastroContato>(url, contato);
  }

  deletarContato(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
