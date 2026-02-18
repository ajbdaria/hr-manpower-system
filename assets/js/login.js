function togglePassword() {
    const input = document.getElementById('password');
    const icon = document.getElementById('eyeIcon');

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


function togglePassword() {
    const input = document.getElementById('password');
    const icon = document.getElementById('eyeIcon');

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
}

const form = document.getElementById("loginForm");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", function(e) {

    // If form is invalid → stop submission
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
    }
    // VALID → show loader
    e.preventDefault(); // temporarily stop

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Signing in...";

    document.getElementById("loginLoader").classList.remove("hidden");

    // small delay for smooth UX then submit
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 800);
});