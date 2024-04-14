package com.senior.crmseniorbackendproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senior.crmseniorbackendproject.model.Cliente;
import com.senior.crmseniorbackendproject.repository.ClienteRepository;

import jakarta.transaction.Transactional;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepository clienteRepository;
    
    @Transactional
    public void editarcliente(Long clienteId, Cliente clienteMod) {
        Cliente cliente = clienteRepository.findById(clienteId).orElseThrow(() -> new IllegalArgumentException("cliente não encontrado"));
        cliente.setNomeCompleto(clienteMod.getNomeCompleto());
        cliente.setEmail(clienteMod.getEmail());
        cliente.setContatos(clienteMod.getContatos());
        cliente.setTelefone(clienteMod.getTelefone());
    }

}
