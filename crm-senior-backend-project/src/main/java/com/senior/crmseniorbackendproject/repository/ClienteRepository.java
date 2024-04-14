package com.senior.crmseniorbackendproject.repository;

import com.senior.crmseniorbackendproject.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
