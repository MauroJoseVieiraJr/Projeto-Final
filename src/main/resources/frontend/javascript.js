// Funções JavaScript para mostrar o conteúdo relevante ao clicar nos botões
function showHome() {
// Lógica para mostrar o conteúdo da página Home
	document.querySelector('.content').innerHTML = `
		<h1>Bem-vindo à página de vagas de emprego</h1>
		<p>Aqui você encontrará diversas oportunidades de trabalho.</p>
		`;
}

// Mostra as vagas de trabalho disponíveis registradas no banco de dados
function showVagas() {
	fetch("http://localhost:8080/job",
		{
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			method: "GET"
		}
	)
	.then((response) => response.json())
	.then((data) => {
		// Lógica para mostrar o conteúdo da página de Vagas
		// Aqui gera-se a tabela base
		document.querySelector('.content').innerHTML = `
		<h1>Vagas de Emprego</h1>
		<p>Confira nossas últimas oportunidades de trabalho.</p>
		
		<table class="tabelaEmpregos" cellpadding="0" cellspacing="0">
			<tr>
				<th>ID da vaga</th>
				<th>Cargo</th>
				<th>Descrição</th>
				<th>Requisitos</th>
			</tr>
		</table>
		`;

		// Pega os dados do banco de dados e organiza-os em linhas
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			// O if é só para alternar as cores das linhas da tabela
			if(i % 2 == 0) {
				document.querySelector('.tabelaEmpregos').innerHTML += `
					<tr style="background-color: #f0f0ff">
						<td>${data[i].id}</td>
						<td>${data[i].role}</td>
						<td>${data[i].activities}</td>
						<td>${data[i].requirements}</td>
					</tr>
				`;
			} else {
				document.querySelector('.tabelaEmpregos').innerHTML += `
					<tr style="background-color: white">
						<td>${data[i].id}</td>
						<td>${data[i].role}</td>
						<td>${data[i].activities}</td>
						<td>${data[i].requirements}</td>
					</tr>
				`;
			}
		}
	});
}

function showVagasReg() {
	document.querySelector('.content').innerHTML = `
		<h1>Registro de vagas</h1>
		<p>Preencha todos os campos.</p>
		
		<form class="contact-form" id="contact-form">
			<label for="nome"><b>Cargo</b></label>
			<input type="text" class="role" placeholder="Cargo" id="role" required />
			
			<label for="sexo"><b>Descrição</b></label>
			<input type="text" class="act" placeholder="Descrição" id="act" required />
			
			<label for="raca"><b>Requisitos</b></label>
			<input type="text" class="req" placeholder="Requisitos" id="req" required />
			
			<button onclick="enviarVagas()" class="contact-button">Registrar Vaga</button>
		</form>
		`;
}

function enviarVagas() {
	const jobRole = document.querySelector(".role");
	const jobAct = document.querySelector(".act");
	const jobReq = document.querySelector(".req");

	fetch("http://localhost:8080/job",
	{
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify({
			role: jobRole.value,
			activities: jobAct.value,
			requirements: jobReq.value
		})
	}
	)
	.then(function (response) {console.log(response)})
	.catch(function (response) {console.log(response)})

	// Limpa os campos de entrada
	jobRole.value = "";
	jobAct.value = "";
	jobReq.value = "";
}

function showCadastro() {
	// Lógica para mostrar o conteúdo da página de Cadastro
	document.querySelector('.content').innerHTML = `
		<h1>Cadastre-se</h1>
		<p>Envie seu currículo para o nosso banco de dados, quando surgir uma oportunidade entraremos em contato.</p>
		<p>Preencha todos os campos requeridos do formulário abaixo e boa sorte!</p>
		
		<form class="contact-form" id="contact-form">
			<label for="nome"><b>Nome completo</b></label>
			<input type="text" class="nome" placeholder="Nome Completo" id="nome" required />
			
			<label for="sexo"><b>Sexo</b></label>
			<input type="text" class="sexo" placeholder="Sexo" id="sexo" required />
			
			<label for="raca"><b>Raça</b></label>
			<input type="text" class="raca" placeholder="Raça" id="raca" required />
			
			<label for="deficiencia"><b>Deficiência</b></label>
			<input type="text" class="deficiencia" placeholder="Deficiência" id="deficiencia"/>

			<label for="cel"><b>Celular</b></label>
			<input type="text" class="cel" placeholder="Celular" id="cel" required/>

			<label for="email"><b>E-mail</b></label>
			<input type="email" class="email" placeholder="E-mail" id="email" required />
			
			<label for="cep"><b>CEP</b></label>
			<input type="text" class="cep" placeholder="CEP" id="cep"/>
			
			<label for="linkedin"><b>LinkedIn</b></label>
			<input type="text" class="linkedin" placeholder="LinkedIn" id="linkedin"/>
			
			<button onclick="enviarCadastro()" class="contact-button">Enviar Cadastro</button>
		</form>
		`;
}

function enviarCadastro() {
	// Lógica para enviar o cadastro
	// Aqui você pode adicionar código para processar o envio do formulário de cadastro
	// Por exemplo, utilizando AJAX para enviar os dados para um servidor
	const candName = document.querySelector(".nome");
	const candSex = document.querySelector(".sexo");
	const candRace = document.querySelector(".raca");
	const candDef = document.querySelector(".deficiencia");
	const candCel = document.querySelector(".cel");
	const candEmail = document.querySelector(".email");
	const candCep = document.querySelector(".cep");
	const candSkill = document.querySelector(".linkedin");

	fetch("http://localhost:8080/candidate",
	{
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify({
			name: candName.value,
			sex: candSex.value,
			race: candRace.value,
			disability: candDef.value,
			telNumber: candCel.value,
			email: candEmail.value,
			postalCode: candCep.value,
			skills: candSkill.value
		})
	}
	)
	.then(function (response) {console.log(response)})
	.catch(function (response) {console.log(response)})

	// Limpa os campos de entrada
	candName.value = "";
	candSex.value = "";
	candRace.value = "";
	candDef.value = "";
	candCel.value = "";
	candEmail.value = "";
	candCep.value = "";
	candSkill.value = "";
}

function showCandidatos() {
	fetch("http://localhost:8080/candidate",
		{
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			method: "GET"
		}
	)
	.then((response) => response.json())
	.then((data) => {
		// Lógica para mostrar o conteúdo da página de Vagas
		// Aqui gera-se a tabela base
		document.querySelector('.content').innerHTML = `
		<h1>Candidatos</h1>
		<p>Veja os usuários cadastrados no sistema.</p>
		
		<table class="tabelaCandidatos" cellpadding="0" cellspacing="0">
			<tr>
				<th>ID</th>
				<th>Nome</th>
				<th>Sexo</th>
				<th>Raça</th>
				<th>Deficiência</th>
				<th>Celular</th>
				<th>E-mail</th>
				<th>CEP</th>
				<th>LinkedIn</th>
			</tr>
		</table>
		`;

		// Pega os dados do banco de dados e organiza-os em linhas
		for (let i = 0; i < data.length; i++) {
			const element = data[i];

			// O if é só para alternar as cores das linhas da tabela
			if(i % 2 == 0) {
				document.querySelector('.tabelaCandidatos').innerHTML += `
					<tr style="background-color: #f0f0ff">
						<td>${data[i].id}</td>
						<td>${data[i].name}</td>
						<td>${data[i].sex}</td>
						<td>${data[i].race}</td>
						<td>${data[i].disability}</td>
						<td>${data[i].telNumber}</td>
						<td>${data[i].email}</td>
						<td>${data[i].postalCode}</td>
						<td>${data[i].skills}</td>
					</tr>
				`;
			} else {
				document.querySelector('.tabelaCandidatos').innerHTML += `
					<tr style="background-color: white">
						<td>${data[i].id}</td>
						<td>${data[i].name}</td>
						<td>${data[i].sex}</td>
						<td>${data[i].disability}</td>
						<td>${data[i].telNumber}</td>
						<td>${data[i].email}</td>
						<td>${data[i].postalCode}</td>
						<td>${data[i].skills}</td>
					</tr>
				`;
			}
		}
	});
}

function showLogin() {
	// Lógica para mostrar a caixa de login
	document.querySelector('.content').innerHTML = `
		<div class="login-box">
			<h2>Login</h2>
			<input type="text" placeholder="Usuário" required />
			<input type="password" placeholder="Senha" required />
			<button class="login-button">Login</button>
		</div>
	`;
}