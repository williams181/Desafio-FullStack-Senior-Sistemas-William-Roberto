package model;
import jakarta.persistence.*;
import org.hibernate.annotations.CascadeType;

import java.util.Date;
import java.util.List;

@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCompleto;

    @OneToMany(mappedBy = "cliente")
    private List<Contato> contatos;

    private String email;
    private String telefone;

    @Temporal(TemporalType.DATE)
    private Date dataRegistro;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public List<Contato> getContatos() {
        return contatos;
    }

    public void setContatos(List<Contato> contatos) {
        this.contatos = contatos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    // Construtor vazio
    public Cliente() {
    }

    // Construtor com todos os campos
    public Cliente(String nomeCompleto, List<Contato> contatos, String email, String telefone, Date dataRegistro) {
        this.nomeCompleto = nomeCompleto;
        this.contatos = contatos;
        this.email = email;
        this.telefone = telefone;
        this.dataRegistro = dataRegistro;
    }
}
