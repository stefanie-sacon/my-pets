const formularioLogin = document.getElementById("loginForm");
const formularioCadastro = document.getElementById("cadastroForm");
const abrirCadastro = document.getElementById("abrirCadastro");
const abrirLogin = document.getElementById("abrirLogin");

// Função para alternar entre formulários
function alternarFormulario() {
  if (formularioLogin.style.display === "block") {
    formularioLogin.style.display = "none";
    formularioCadastro.style.display = "block";
  } else {
    formularioLogin.style.display = "block";
    formularioCadastro.style.display = "none";
  }
}

// Adicionar eventos de clique aos botões de alternância
abrirCadastro.addEventListener("click", alternarFormulario);
abrirLogin.addEventListener("click", alternarFormulario);

// (Adicione mais funções JavaScript aqui para validação, mensagens, etc.)
