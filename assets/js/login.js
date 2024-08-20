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

  function showForm(formId) {
    const forms = document.querySelectorAll(".form-section, .login-form");
    forms.forEach(function (form) {
      form.style.display = "none";
    });
    document.getElementById(formId).style.display = "block";
  }
});
