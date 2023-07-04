package com.senai.sc.ProjetoFinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senai.sc.ProjetoFinal.model.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Long>{

}
