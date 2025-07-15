const materias = [
  // SEMESTRE 1
  {
    id: "alg",
    nombre: "Álgebra Superior",
    semestre: 1,
    estado: "porCursar",
    seriadas: []
  },
  {
    id: "calc",
    nombre: "Cálculo I",
    semestre: 1,
    estado: "porCursar",
    seriadas: []
  },
  {
    id: "fis1",
    nombre: "Física I",
    semestre: 1,
    estado: "porCursar",
    seriadas: []
  },
  {
    id: "qg1",
    nombre: "Química General I",
    semestre: 1,
    estado: "porCursar",
    seriadas: []
  },
  {
    id: "csoc",
    nombre: "Ciencia y Sociedad",
    semestre: 1,
    estado: "porCursar",
    seriadas: []
  },

  // SEMESTRE 2
  {
    id: "qg2",
    nombre: "Química General II",
    semestre: 2,
    estado: "bloqueada",
    seriadas: ["qg1"]
  },
  {
    id: "fis2",
    nombre: "Física II",
    semestre: 2,
    estado: "bloqueada",
    seriadas: ["fis1"]
  },
  {
    id: "bio",
    nombre: "Biología Celular",
    semestre: 2,
    estado: "porCursar",
    seriadas: []
  },
  {
    id: "term",
    nombre: "Termodinámica",
    semestre: 2,
    estado: "bloqueada",
    seriadas: ["qg1"]
  },
  {
    id: "edm",
    nombre: "Estructura de la Materia",
    semestre: 2,
    estado: "porCursar",
    seriadas: []
  }
];

const container = document.getElementById("malla-container");

function guardarEstados() {
  localStorage.setItem("estadosMaterias", JSON.stringify(materias.map(m => m.estado)));
}

function cargarEstados() {
  const guardado = localStorage.getItem("estadosMaterias");
  if (guardado) {
    const estados = JSON.parse(guardado);
    materias.forEach((m, i) => m.estado = estados[i]);
  }
}

function actualizarDesbloqueo() {
  materias.forEach(materia => {
    if (materia.seriadas.length > 0) {
      const desbloqueada = materia.seriadas.every(id =>
        materias.find(m => m.id === id)?.estado === "aprobada"
      );
      if (desbloqueada && materia.estado === "bloqueada") {
        materia.estado = "porCursar";
      }
      if (!desbloqueada && materia.estado !== "bloqueada" && materia.estado !== "aprobada") {
        materia.estado = "bloqueada";
      }
    }
  });
}

function crearTarjetas() {
  container.innerHTML = "";
  const porSemestre = {};

  materias.forEach(m => {
    if (!porSemestre[m.semestre]) porSemestre[m.semestre] = [];
    porSemestre[m.semestre].push(m);
  });

  Object.keys(porSemestre).forEach(sem => {
    const divSem = document.createElement("div");
    divSem.className = "semestre";
    divSem.innerHTML = `<h2>Semestre ${sem}</h2>`;

    porSemestre[sem].forEach(m => {
      const card = document.createElement("div");
      card.className = `materia ${m.estado}`;
      card.textContent = m.nombre;
      card.onclick = () => cambiarEstado(m, card);
      divSem.appendChild(card);
    });

    container.appendChild(divSem);
  });
}

function cambiarEstado(materia, card) {
  if (materia.estado === "bloqueada") return;

  const estados = ["porCursar", "enCurso", "aprobada"];
  const idx = estados.indexOf(materia.estado);
  materia.estado = estados[(idx + 1) % estados.length];
  actualizarDesbloqueo();
  guardarEstados();
  crearTarjetas();
}

cargarEstados();
actualizarDesbloqueo();
crearTarjetas();

