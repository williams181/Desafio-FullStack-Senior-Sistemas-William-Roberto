package com.senior.crmseniorbackendproject.repository;

import com.senior.crmseniorbackendproject.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {
}