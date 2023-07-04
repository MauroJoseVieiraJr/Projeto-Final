package com.senai.sc.ProjetoFinal.model;

import com.senai.sc.ProjetoFinal.dto.request.CompanyRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "company")
@Entity(name = "company")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Company {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String postalCode;
	private String email;
	private String password;
	
	public Company() {}
	
	public Company(CompanyRequestDTO c) {
		this.name = c.name();
		this.postalCode = c.postalCode();
		this.email = c.email();
		this.password = c.password();
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}
	
	
}
