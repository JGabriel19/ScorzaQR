// -------------------------
// VARIABLES DEL DOM
// -------------------------

const roleCards = document.querySelectorAll(".role-card");
const loginForm = document.getElementById("loginForm");
const selectedRoleText = document.getElementById("selectedRoleText");
const changeRoleBtn = document.getElementById("changeRoleBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

let selectedRole = null;
// ----------------------
// VERIFICAR SESIÓN
// ----------------------
const sesion = obtenerSesion();

if (sesion) {
  if (sesion.role === "estudiante") {
    window.location.href = "estudiante.html";
  } else if (sesion.role === "docente") {
    window.location.href = "docente.html";
  } else if (sesion.role === "admin") {
    window.location.href = "admin.html";
  }
}
// -------------------------
// SELECCIÓN DE ROL
// -------------------------

roleCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Quitar selección previa
    roleCards.forEach((c) => c.classList.remove("selected"));

    // Marcar selección
    card.classList.add("selected");
    selectedRole = card.getAttribute("data-role");

    // Mostrar el formulario
    loginForm.classList.remove("hidden");
    selectedRoleText.textContent = "Rol seleccionado: " + selectedRole;

    // Limpiar inputs y errores
    usernameInput.value = "";
    passwordInput.value = "";
    errorMessage.textContent = "";
  });
});

// -------------------------
// BOTÓN CAMBIAR ROL
// -------------------------

// changeRoleBtn.addEventListener("click", () => {
//   selectedRole = null;

//   roleCards.forEach((c) => c.classList.remove("selected"));
//   loginForm.classList.add("hidden");
// });

// -------------------------
// LOGIN
// -------------------------

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!selectedRole) {
    errorMessage.textContent = "Por favor selecciona un rol.";
    return;
  }

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Buscar usuario en db.js
  const user = users.find(
    (u) =>
      u.username === username &&
      u.password === password &&
      u.role === selectedRole
  );

  if (!user) {
    errorMessage.textContent = "Usuario o contraseña incorrectos.";
    return;
  }

  // Guardar sesión
  iniciarSesion(user);

  // Redirección según rol
  if (user.role === "estudiante") {
    window.location.href = "estudiante.html";
  } else if (user.role === "docente") {
    window.location.href = "docente.html";
  } else if (user.role === "admin") {
    window.location.href = "admin.html";
  }
});
