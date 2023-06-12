// Funções JavaScript para mostrar o conteúdo relevante ao clicar nos botões
function showHome() {
// Lógica para mostrar o conteúdo da página Home
document.querySelector('.content').innerHTML = `
	<h1>Home</h1>
	<p>Bem-vindo à nossa página inicial.</p>
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
	<p>Preencha o formulário abaixo para se cadastrar.</p>
	<form class="contact-form">
		<input type="text" placeholder="Área de Atuação" required />
		<input type="text" placeholder="Nome Completo" required />
		<input type="text" placeholder="Cidade" required />
		<input type="email" placeholder="E-mail" required />
		<input type="text" placeholder="LinkedIn" />
		<input type="text" placeholder="Celular" required />
		<input type="text" placeholder="Telefone Fixo" />
		<button onclick="enviarCadastro()">Enviar Cadastro</button>
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
	<h1>Contato</h1>
	<p>Entre em contato conosco:</p>
	<p>Telefone: (00) 1234-5678</p>
	<p>Email: EmpresaEmpregosXX@gmail.com</p>
	<div class="contact-form">
		<input type="email" placeholder="Digite seu e-mail" />
		<button onclick="enviarEmail()">Enviar</button>
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