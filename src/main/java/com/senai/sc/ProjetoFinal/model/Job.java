package com.senai.sc.ProjetoFinal.model;

import com.senai.sc.ProjetoFinal.dto.request.JobRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "job")
@Entity(name = "job")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Job {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String role;
	private String activities;
	private String requirements;
	
	public Job() {}
	
	public Job(JobRequestDTO j) {
		this.role = j.role();
		this.activities = j.activities();
		this.requirements = j.requirements();
	}

	public Long getId() {
		return id;
	}

	public String getRole() {
		return role;
	}

	public String getActivities() {
		return activities;
	}

	public String getRequirements() {
		return requirements;
	}
	
	
}
