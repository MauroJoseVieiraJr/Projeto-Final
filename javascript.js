// Funções JavaScript para mostrar o conteúdo relevante ao clicar nos botões
function showHome() {
// Lógica para mostrar o conteúdo da página Home
document.querySelector('.content').innerHTML = `
	<h1>Bem-vindo à página de vagas de emprego</h1>
	<p>Aqui você encontrará diversas oportunidades de trabalho.</p>
	`;
}

function showVagas() {
// Lógica para mostrar o conteúdo da página de Vagas
document.querySelector('.content').innerHTML = `
	<h1>Vagas de Emprego</h1>
	<p>Confira nossas últimas oportunidades de trabalho.</p>
	`;
}

function showCadastro() {
// Lógica para mostrar o conteúdo da página de Cadastro
document.querySelector('.content').innerHTML = `
	<h1>Cadastre-se</h1>
	<p>Envie seu currículo para o nosso banco de dados, quando surgir uma oportunidade entraremos em contato.</p>
	<p>Preencha todos os campos requeridos do formulário abaixo e boa sorte!</p>
	
	<form class="contact-form">
		<label for="nome"><b>Nome completo</b></label>
		<input type="text" placeholder="Nome Completo" id="nome" required />
		
		<label for="atuacao"><b>Área de Atuação</b></label>
		<input type="text" placeholder="Área de Atuação" id="atuacao" required />
		
		<label for="cidade"><b>Cidade</b></label>
		<input type="text" placeholder="Cidade" id="cidade" required />
		
		<label for="email"><b>E-mail</b></label>
		<input type="email" placeholder="E-mail" id="email" required />
		
		<label for="linkedin"><b>LinkedIn</b></label>
		<input type="text" placeholder="LinkedIn" id="linkedin"/>
		
		<label for="cel"><b>Celular</b></label>
		<input type="text" placeholder="Celular" id="cel" required/>
		
		<label for="tel"><b>Telefone Fixo</b></label>
		<input type="text" placeholder="Telefone Fixo" id="tel"/>
		
		<button onclick="enviarCadastro()" class="contact-button">Enviar Cadastro</button>
	</form>
	`;
}

function showSobre() {
  // Lógica para mostrar o conteúdo da página Quem Somos
  document.querySelector('.content').innerHTML = `
	<h1>Quem Somos</h1>
	<p>Saiba mais sobre os objetivos de nossa empresa e equipe.</p>
  `;
}

function showContato() {
// Lógica para mostrar o conteúdo da página de Contato
document.querySelector('.content').innerHTML = `
	<h1>Fale conosco</h1>
	<p>Críticas, sugestões ou desabafos, responderemos em até 24h em dias úteis.</p>
	<div class="contact-form">
		<label for="email"><b>Email</b></label>
		<input type="email" placeholder="Digite seu e-mail" required/>
		
		<label for="subject"><b>Assunto</b></label>
		<input type="text" placeholder="Assunto" required/>
		
		<label for="mensagem"><b>Mensagem</b></label>
		<textarea name="mensagem" id="mensagem" rows=10 required></textarea>
		<button onclick="enviarEmail()" class="contact-button">Enviar</button>
	</div>
	`;
}

function enviarEmail() {
	// Lógica para enviar o email
	// Aqui você pode adicionar código para processar o envio do email
	// Por exemplo, utilizando AJAX para enviar os dados para um servidor
	alert("Email enviado com sucesso!");
}

function enviarCadastro() {
	// Lógica para enviar o cadastro
	// Aqui você pode adicionar código para processar o envio do formulário de cadastro
	// Por exemplo, utilizando AJAX para enviar os dados para um servidor
	alert("Cadastro enviado com sucesso!");
}

function showLogin() {
	// Lógica para mostrar a caixa de login
	document.querySelector('.content').innerHTML = `
		<div class="login-box">
			<h2>Login</h2>
			<input type="text" placeholder="Usuário" required />
			<input type="password" placeholder="Senha" required />
			<button class="login-button">Login</button>
			<p><a href="#">Esqueci minha senha</a></p>
		</div>
	`;
}