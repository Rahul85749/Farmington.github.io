document.addEventListener("DOMContentLoaded", function() {
    const toggleFormLinks = document.querySelectorAll(".toggle-form span");
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    toggleFormLinks.forEach(link => {
        link.addEventListener("click", function() {
            signupForm.classList.toggle("active");
            loginForm.classList.toggle("active");
        });
    });
});
