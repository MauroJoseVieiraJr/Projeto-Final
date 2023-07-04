package com.senai.sc.ProjetoFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.sc.ProjetoFinal.dto.request.RecruiterRequestDTO;
import com.senai.sc.ProjetoFinal.dto.response.RecruiterResponseDTO;
import com.senai.sc.ProjetoFinal.model.Recruiter;
import com.senai.sc.ProjetoFinal.repository.RecruiterRepository;

@RestController
@RequestMapping("recruiter")
public class RecruiterController {
	@Autowired
	private RecruiterRepository repository;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public void saveRecruiter(@RequestBody RecruiterRequestDTO data) {
		Recruiter r = new Recruiter(data);
		repository.save(r);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping
	public List<RecruiterResponseDTO> getAll() {
		List<RecruiterResponseDTO> recruiterList = repository.findAll().stream().map(RecruiterResponseDTO::new).toList();
		return recruiterList;
	}
}
