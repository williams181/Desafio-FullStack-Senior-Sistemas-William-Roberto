package com.senior.crmseniorbackendproject.controller;

import com.senior.crmseniorbackendproject.model.Contato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.senior.crmseniorbackendproject.repository.ContatoRepository;

import java.util.List;

@RestController
@RequestMapping("/contato")
@CrossOrigin(origins = "*")
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    @GetMapping("/listar")
    @CrossOrigin(origins = "*")
    public ResponseEntity listarContatos() {
        List<Contato> contatos = contatoRepository.findAll();
        return ResponseEntity.ok(contatos);
    }

    @PostMapping("/salvar")
    public ResponseEntity salvarContato(@RequestBody Contato contato) {
        contatoRepository.save(contato);
        return ResponseEntity.ok("Salvo");
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity editarContatoForm(@PathVariable("id") Long id, Model model) {
        Contato contato = contatoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Contato inválido ID: " + id));
        model.addAttribute("contato", contato);
        return ResponseEntity.ok("Registro modificado");
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity excluirContato(@PathVariable("id") Long id) {
        contatoRepository.deleteById(id);
        return ResponseEntity.ok("Registro removido");
    }
}
