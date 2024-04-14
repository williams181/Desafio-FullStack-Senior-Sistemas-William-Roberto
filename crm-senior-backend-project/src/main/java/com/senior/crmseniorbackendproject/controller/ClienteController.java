package com.senior.crmseniorbackendproject.controller;

import com.senior.crmseniorbackendproject.model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.senior.crmseniorbackendproject.repository.ClienteRepository;
import com.senior.crmseniorbackendproject.service.ClienteService;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("cliente")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ClienteService clienteService;

    @GetMapping("/listar")
    public ResponseEntity listarClientes() {
        List<Cliente> clientes = clienteRepository.findAll();
        return ResponseEntity.ok(clientes);
    }

    @PostMapping("/salvar")
    public ResponseEntity salvarCliente(@RequestBody Cliente cliente) {
        cliente.setDataRegistro(new Date());
        clienteRepository.save(cliente);
        return ResponseEntity.ok("Salvo");
    }
    
    @PutMapping("/editar/{id}")
    public ResponseEntity editarClienteForm(@PathVariable("id") Long id, @RequestBody Cliente clienteMod) {
        try {
            clienteService.editarcliente(id, clienteMod);
            return ResponseEntity.ok("Registro modificado");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity excluirCliente(@PathVariable("id") Long id) {
        clienteRepository.deleteById(id);
        return ResponseEntity.ok("Registo removido");
    }
}
