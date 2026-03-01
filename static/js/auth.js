document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleButton = document.getElementById("toggleButton");
    const toggleText = document.getElementById("toggleText");
    const subtitle = document.getElementById("authSubtitle");

    toggleButton.addEventListener("click", function () {

        const isLoginActive = loginForm.classList.contains("active");

        if (isLoginActive) {
            loginForm.classList.remove("active");
            registerForm.classList.add("active");

            subtitle.innerText = "Crie sua conta";
            toggleText.innerText = "Já possui conta?";
            toggleButton.innerText = "Entrar";

        } else {
            registerForm.classList.remove("active");
            loginForm.classList.add("active");

            subtitle.innerText = "Entre na sua conta";
            toggleText.innerText = "Não tem conta?";
            toggleButton.innerText = "Criar conta";
        }

    });

});