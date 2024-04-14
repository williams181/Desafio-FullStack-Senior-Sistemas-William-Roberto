export class CadastroCliente {
    id: number;
    nomeCompleto: string;
    email: string;
    telefone: string;
    dataRegistro: Date;
  
    constructor(
      id: number = 0,
      nomeCompleto: string = '',
      email: string = '',
      telefone: string = '',
      dataRegistro: Date = new Date()
    ) {
      this.id = id;
      this.nomeCompleto = nomeCompleto;
      this.email = email;
      this.telefone = telefone;
      this.dataRegistro = dataRegistro;
    }
  }
  