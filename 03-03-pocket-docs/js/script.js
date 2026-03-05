const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const passwordIcon = document.getElementById("passwordIcon");

togglePassword.addEventListener("click", function () {

    // Check current type
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Change icon
    if (type === "password") {
        passwordIcon.src = "/Icons/show (1).svg";
        passwordIcon.alt = "Show Password";
    } else {
        passwordIcon.src = "/Icons/hide (1).svg";
        passwordIcon.alt = "Hide Password";
    }
});