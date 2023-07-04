package com.senai.sc.ProjetoFinal.model;

import com.senai.sc.ProjetoFinal.dto.request.CandidateRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "candidate")
@Entity(name = "candidate")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Candidate {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String sex;
	private String race;
	private String disability;
	private String telNumber;
	private String email;
	private String postalCode;
	private String skills;
	
	public Candidate() {}
	
	public Candidate(CandidateRequestDTO c) {
		this.name = c.name();
		this.sex = c.sex();
		this.race = c.race();
		this.disability = c.disability();
		this.telNumber = c.telNumber();
		this.email = c.email();
		this.postalCode = c.postalCode();
		this.skills = c.skills();
	}

	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getSex() {
		return sex;
	}
	public String getRace() {
		return race;
	}
	public String getDisability() {
		return disability;
	}
	public String getTelNumber() {
		return telNumber;
	}
	public String getEmail() {
		return email;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public String getSkills() {
		return skills;
	}
}
