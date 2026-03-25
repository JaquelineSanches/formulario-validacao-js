const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroSenha = document.getElementById('erroSenha');
const erroConfirmarSenha = document.getElementById('erroConfirmarSenha');
const mensagemSucesso = document.getElementById('mensagemSucesso');

function mostrarErro(input, campoErro, mensagem) {
  input.classList.add('erro-input');
  input.classList.remove('sucesso');
  campoErro.textContent = mensagem;
}

function mostrarSucesso(input, campoErro) {
  input.classList.remove('erro-input');
  input.classList.add('sucesso');
  campoErro.textContent = '';
}

function validarEmail(valorEmail) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valorEmail);
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  let formularioValido = true;
  mensagemSucesso.textContent = '';

  if (nome.value.trim() === '') {
    mostrarErro(nome, erroNome, 'O nome é obrigatório.');
    formularioValido = false;
  } else {
    mostrarSucesso(nome, erroNome);
  }

  if (email.value.trim() === '') {
    mostrarErro(email, erroEmail, 'O e-mail é obrigatório.');
    formularioValido = false;
  } else if (!validarEmail(email.value.trim())) {
    mostrarErro(email, erroEmail, 'Digite um e-mail válido.');
    formularioValido = false;
  } else {
    mostrarSucesso(email, erroEmail);
  }

  if (senha.value.trim() === '') {
    mostrarErro(senha, erroSenha, 'A senha é obrigatória.');
    formularioValido = false;
  } else if (senha.value.length < 6) {
    mostrarErro(senha, erroSenha, 'A senha deve ter pelo menos 6 caracteres.');
    formularioValido = false;
  } else {
    mostrarSucesso(senha, erroSenha);
  }

  if (confirmarSenha.value.trim() === '') {
    mostrarErro(confirmarSenha, erroConfirmarSenha, 'Confirme sua senha.');
    formularioValido = false;
  } else if (confirmarSenha.value !== senha.value) {
    mostrarErro(confirmarSenha, erroConfirmarSenha, 'As senhas não conferem.');
    formularioValido = false;
  } else {
    mostrarSucesso(confirmarSenha, erroConfirmarSenha);
  }

  if (formularioValido) {
    mensagemSucesso.textContent = 'Cadastro realizado com sucesso!';
    formulario.reset();

    nome.classList.remove('sucesso');
    email.classList.remove('sucesso');
    senha.classList.remove('sucesso');
    confirmarSenha.classList.remove('sucesso');
  }
});

const toggleSenha = document.getElementById('toggleSenha');

toggleSenha.addEventListener('click', () => {
  if (senha.type === 'password') {
    senha.type = 'text';
    toggleSenha.textContent = '🙈';
  } else {
    senha.type = 'password';
    toggleSenha.textContent = '👁️';
  }
});
