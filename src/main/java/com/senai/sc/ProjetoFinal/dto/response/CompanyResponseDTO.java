package com.senai.sc.ProjetoFinal.dto.response;

import com.senai.sc.ProjetoFinal.model.Company;

public record CompanyResponseDTO(Long id, String name, String postalCode, String email, String password) {
	public CompanyResponseDTO (Company c) {
		this(c.getId(), c.getName(), c.getPostalCode(), c.getEmail(), c.getPassword());
	}
}
