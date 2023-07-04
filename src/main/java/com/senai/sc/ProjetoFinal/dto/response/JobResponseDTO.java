package com.senai.sc.ProjetoFinal.dto.response;

import com.senai.sc.ProjetoFinal.model.Job;

public record JobResponseDTO(Long id, String role, String activities, String requirements) {
	public JobResponseDTO(Job j) {
		this(j.getId(), j.getRole(), j.getActivities(), j.getRequirements());
	}
}
