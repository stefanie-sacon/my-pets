document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".show-register").forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      showForm("register-form");
    });
  });

  document.querySelectorAll(".show-login").forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      showForm("login-form");
    });
  });

  document.querySelectorAll(".forgot-password").forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      showForm("password-reset-form");
    });
  });

  document
    .querySelectorAll(".show-change-password")
    .forEach(function (element) {
      element.addEventListener("click", function (event) {
        event.preventDefault();
        showForm("password-change-form");
      });
    });

  function showForm(formId) {
    const forms = document.querySelectorAll(".form-section, .login-form");
    forms.forEach(function (form) {
      form.style.display = "none";
    });

    const form = document.getElementById(formId);
    form.style.display = "block";

    // Atualiza o título da página com base no ID do formulário
    switch (formId) {
      case "login-form":
        document.title = "My Pet's - Login";
        break;
      case "register-form":
        document.title = "My Pet's - Cadastro";
        break;
      case "password-reset-form":
        document.title = "My Pet's - Recuperar Senha";
        break;
      case "password-change-form":
        document.title = "My Pet's - Alterar Senha";
        break;
      default:
        document.title = "My Pet's - Login/Cadastro";
        break;
    }
  }

  // Inicializa com o formulário de login visível e título correto
  showForm("login-form");
});
