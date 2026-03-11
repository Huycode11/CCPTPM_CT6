// Shared auth interactions for login/register pages
(function () {
    const toggleButtons = document.querySelectorAll(".toggle-password");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const input = document.getElementById(targetId);

            if (!input) return;

            const isPassword = input.type === "password";
            input.type = isPassword ? "text" : "password";
            this.textContent = isPassword ? "Hide" : "Show";
        });
    });

    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirmPassword");
            const errorBox = document.getElementById("register-error");

            if (!password || !confirmPassword || !errorBox) return;

            errorBox.textContent = "";

            if (password.value !== confirmPassword.value) {
                event.preventDefault();
                errorBox.textContent = "Mat khau xac nhan khong khop.";
                confirmPassword.focus();
                return;
            }

            event.preventDefault();
            errorBox.textContent = "Dang ky thanh cong (demo).";
            registerForm.reset();
            toggleButtons.forEach((button) => {
                button.textContent = "Show";
            });
        });
    }
})();
