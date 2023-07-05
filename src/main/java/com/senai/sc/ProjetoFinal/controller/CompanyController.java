package com.senai.sc.ProjetoFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.sc.ProjetoFinal.dto.request.CompanyRequestDTO;
import com.senai.sc.ProjetoFinal.dto.response.CompanyResponseDTO;
import com.senai.sc.ProjetoFinal.model.Company;
import com.senai.sc.ProjetoFinal.repository.CompanyRepository;

@RestController
@RequestMapping("company")
public class CompanyController {
	@Autowired
	private CompanyRepository repository;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public void saveCompany(@RequestBody CompanyRequestDTO data) {
		Company c = new Company(data);
		repository.save(c);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PutMapping
	public void alterCompany(@RequestBody CompanyRequestDTO data) {
		Company c = new Company(data);
		
		Company a = repository.getReferenceById(data.id());
		a.update(c.getName(), c.getPostalCode(), c.getEmail(), c.getPassword());
				
		repository.save(a);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@DeleteMapping
	public void deleteCompany(@RequestBody CompanyRequestDTO data) {
		repository.deleteById(data.id());
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping
	public List<CompanyResponseDTO> getAll() {
		List<CompanyResponseDTO> companyList = repository.findAll().stream().map(CompanyResponseDTO::new).toList();
		return companyList;
	}
}
