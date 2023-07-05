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

import com.senai.sc.ProjetoFinal.dto.request.JobRequestDTO;
import com.senai.sc.ProjetoFinal.dto.response.JobResponseDTO;
import com.senai.sc.ProjetoFinal.model.Job;
import com.senai.sc.ProjetoFinal.repository.JobRepository;

@RestController
@RequestMapping("job")
public class JobController {
	@Autowired
	private JobRepository repository;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public void saveJob(@RequestBody JobRequestDTO data) {
		Job j = new Job(data);
		repository.save(j);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PutMapping
	public void alterJob(@RequestBody JobRequestDTO data) {
		Job j = new Job(data);
		
		Job a = repository.getReferenceById(data.id());
		a.update(j.getRole(), j.getActivities(), j.getRequirements());
				
		repository.save(a);
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@DeleteMapping
	public void deleteJob(@RequestBody JobRequestDTO data) {
		repository.deleteById(data.id());
	}
	
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping
	public List<JobResponseDTO> getAll() {
		List<JobResponseDTO> jobList = repository.findAll().stream().map(JobResponseDTO::new).toList();
		return jobList;
	}
}
