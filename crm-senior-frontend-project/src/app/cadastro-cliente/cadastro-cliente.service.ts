import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroCliente } from './cadastro-cliente.model';

@Injectable({
  providedIn: 'root'
})

export class CadastroClienteService {

  private apiUrl = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) {}

  listarClientes(): Observable<CadastroCliente[]> {
    return this.http.get<CadastroCliente[]>(this.apiUrl);
  }

  obterCliente(id: number): Observable<CadastroCliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CadastroCliente>(url);
  }

  salvarCliente(cliente: CadastroCliente): Observable<CadastroCliente> {
    return this.http.post<CadastroCliente>(this.apiUrl, cliente);
  }

  atualizarCliente(cliente: CadastroCliente): Observable<CadastroCliente> {
    const url = `${this.apiUrl}/${cliente.id}`;
    return this.http.put<CadastroCliente>(url, cliente);
  }

  deletarCliente(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}