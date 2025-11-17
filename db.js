// ----------------------------
// BASE DE DATOS DE USUARIOS
// ----------------------------
// const users = [
//   { username: "jose@scorza.edu", password: "12345", role: "estudiante" },
//   { username: "luis@scorza.edu", password: "12345", role: "estudiante" },

//   { username: "paulina@zcorsa.edu", password: "12345", role: "docente" },
//   { username: "gabriel@zcorsa.edu", password: "12345", role: "docente" },

//   { username: "admin@zcorsa.edu", password: "admin123", role: "admin" },
// ];

const users = [
  {
    username: "jose@scorza.edu",
    password: "12345",
    role: "estudiante",
    nombre: "José Pérez",
  },
  {
    username: "luis@scorza.edu",
    password: "12345",
    role: "estudiante",
    nombre: "Luis García",
  },

  {
    username: "paulina@zcorsa.edu",
    password: "12345",
    role: "docente",
    nombre: "Paulina Ruiz",
  },
  {
    username: "gabriel@zcorsa.edu",
    password: "12345",
    role: "docente",
    nombre: "Gabriel",
  },

  {
    username: "admin@zcorsa.edu",
    password: "admin123",
    role: "admin",
    nombre: "Administrador",
  },
];

// ----------------------------
// FUNCIÓN PARA GUARDAR SESIÓN
// ----------------------------
function iniciarSesion(usuario) {
  localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
}
// Agregado
function login(username, password) {
  const usuario = users.find(
    (u) => u.username === username && u.password === password
  );

  if (usuario) {
    iniciarSesion(usuario);
    return true;
  }
  return false;
}

// ----------------------------
// FUNCIÓN PARA OBTENER SESIÓN
// ----------------------------
function obtenerSesion() {
  const data = localStorage.getItem("usuarioLogeado");
  return data ? JSON.parse(data) : null;
}

// ----------------------------
// FUNCIÓN PARA CERRAR SESIÓN
// ----------------------------
function cerrarSesion() {
  localStorage.removeItem("usuarioLogeado");
}
