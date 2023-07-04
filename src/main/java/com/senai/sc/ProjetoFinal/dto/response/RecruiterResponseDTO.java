package com.senai.sc.ProjetoFinal.dto.response;

import com.senai.sc.ProjetoFinal.model.Recruiter;

public record RecruiterResponseDTO(Long id, String name, String email, String password) {
	public RecruiterResponseDTO (Recruiter r) {
		this(r.getId(), r.getName(), r.getEmail(), r.getPassword());
	}
}
