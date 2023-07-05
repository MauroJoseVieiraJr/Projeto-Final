package com.senai.sc.ProjetoFinal.model;

import com.senai.sc.ProjetoFinal.dto.request.JobRequestDTO;

import jakarta.persistence.Column;
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
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "role", columnDefinition = "varchar(255) not null")
	private String role;
	@Column(name = "activities", columnDefinition = "varchar(255) not null")
	private String activities;
	@Column(name = "requirements", columnDefinition = "varchar(255) not null")
	private String requirements;
	
	public Job() {}
	
	public Job(JobRequestDTO j) {
		this.role = j.role();
		this.activities = j.activities();
		this.requirements = j.requirements();
	}
	
	public void update(String role, String activities, String requirements) {
		this.role = role;
		this.activities = activities;
		this.requirements = requirements;
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
