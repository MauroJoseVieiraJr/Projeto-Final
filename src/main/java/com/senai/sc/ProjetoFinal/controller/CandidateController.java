package com.senai.sc.ProjetoFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.sc.ProjetoFinal.dto.request.CandidateRequestDTO;
import com.senai.sc.ProjetoFinal.dto.response.CandidateResponseDTO;
import com.senai.sc.ProjetoFinal.model.Candidate;
import com.senai.sc.ProjetoFinal.repository.CandidateRepository;

@RestController
@RequestMapping("candidate")
public class CandidateController {
	@Autowired
	private CandidateRepository repository;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public void saveCandidate(@RequestBody CandidateRequestDTO data) {
		Candidate c = new Candidate(data);
		repository.save(c);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping
	public List<CandidateResponseDTO> getAll() {
		List<CandidateResponseDTO> candidateList = repository.findAll().stream().map(CandidateResponseDTO::new).toList();
		return candidateList;
	}
}
