document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("formSlider");
    const toggleButton = document.getElementById("toggleButton");
    const toggleText = document.getElementById("toggleText");
    const subtitle = document.getElementById("authSubtitle");

    let isLogin = true;

    toggleButton.addEventListener("click", () => {

        formSlider.style.transform = isLogin
            ? "translateX(-50%)"
            : "translateX(0%)";

        subtitle.textContent = isLogin
            ? "Crie sua conta"
            : "Entre na sua conta";

        toggleText.textContent = isLogin
            ? "Já tem conta?"
            : "Não tem conta?";

        toggleButton.textContent = isLogin
            ? "Entrar"
            : "Criar conta";

        isLogin = !isLogin;
    });

});