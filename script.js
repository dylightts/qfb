const materias = [
  // Semestre 1
  { id: "alg", nombre: "Álgebra Superior", semestre: 1, estado: "porCursar", seriadas: [] },
  { id: "calc", nombre: "Cálculo I", semestre: 1, estado: "porCursar", seriadas: [] },
  { id: "csoc", nombre: "Ciencia y Sociedad", semestre: 1, estado: "porCursar", seriadas: [] },
  { id: "fis1", nombre: "Física I", semestre: 1, estado: "porCursar", seriadas: [] },
  { id: "qg1", nombre: "Química General I", semestre: 1, estado: "porCursar", seriadas: [] },

  // Semestre 2
  { id: "em", nombre: "Estructura de la Materia", semestre: 2, estado: "porCursar", seriadas: [] },
  { id: "fis2", nombre: "Física II", semestre: 2, estado: "bloqueada", seriadas: ["fis1"] },
  { id: "labfis", nombre: "Laboratorio de Física", semestre: 2, estado: "bloqueada", seriadas: ["fis1"] },
  { id: "qg2", nombre: "Química General II", semestre: 2, estado: "bloqueada", seriadas: ["qg1"] },
  { id: "term", nombre: "Termodinámica", semestre: 2, estado: "bloqueada", seriadas: ["alg"] },
  { id: "bio", nombre: "Biología Celular", semestre: 2, estado: "porCursar", seriadas: [] },

  // Semestre 3
  { id: "ed", nombre: "Ecuaciones Diferenciales", semestre: 3, estado: "bloqueada", seriadas: ["calc"] },
  { id: "eqcin", nombre: "Equilibrio y Cinética", semestre: 3, estado: "bloqueada", seriadas: ["term"] },
  { id: "qin1", nombre: "Química Inorgánica I", semestre: 3, estado: "bloqueada", seriadas: ["em"] },
  { id: "qorg1", nombre: "Química Orgánica I", semestre: 3, estado: "bloqueada", seriadas: ["em"] },
  { id: "fisio", nombre: "Fisiología", semestre: 3, estado: "porCursar", seriadas: [] },

  // Semestre 4
  { id: "estad", nombre: "Estadística", semestre: 4, estado: "porCursar", seriadas: [] },
  { id: "qa1", nombre: "Química Analítica I", semestre: 4, estado: "bloqueada", seriadas: ["qg2"] },
  { id: "farm1", nombre: "Farmacología I", semestre: 4, estado: "porCursar", seriadas: [] },
  { id: "microg", nombre: "Microbiología General", semestre: 4, estado: "porCursar", seriadas: [] },
  { id: "qorg2", nombre: "Química Orgánica II", semestre: 4, estado: "bloqueada", seriadas: ["qorg1"] },

  // Semestre 5
  { id: "fismicro", nombre: "Fisiología Microbiana", semestre: 5, estado: "bloqueada", seriadas: ["microg"] },
  { id: "qa2", nombre: "Química Analítica II", semestre: 5, estado: "bloqueada", seriadas: ["qa1"] },
  { id: "aexp1", nombre: "Analítica Experimental I", semestre: 5, estado: "porCursar", seriadas: [] },
  { id: "bioq", nombre: "Bioquímica", semestre: 5, estado: "porCursar", seriadas: [] },
  { id: "farm2", nombre: "Farmacología II", semestre: 5, estado: "bloqueada", seriadas: ["farm1"] },
  { id: "microexp", nombre: "Microbiología Experimental", semestre: 5, estado: "bloqueada", seriadas: ["microg"] },
  { id: "qorg3", nombre: "Química Orgánica III", semestre: 5, estado: "bloqueada", seriadas: ["qorg1"] },

  // Semestre 6
  { id: "aexp2", nombre: "Analítica Experimental II", semestre: 6, estado: "bloqueada", seriadas: ["aexp1"] },
  { id: "afarm", nombre: "Atención Farmacéutica", semestre: 6, estado: "porCursar", seriadas: [] },
  { id: "bact", nombre: "Bacteriología", semestre: 6, estado: "bloqueada", seriadas: ["microexp"] },
  { id: "bactexp", nombre: "Bacteriología Experimental", semestre: 6, estado: "bloqueada", seriadas: ["microexp"] },
  { id: "qai1", nombre: "Química Analítica Instrumental I", semestre: 6, estado: "bloqueada", seriadas: ["qa2"] },
  { id: "toxico", nombre: "Toxicología", semestre: 6, estado: "porCursar", seriadas: [] },
  { id: "genetica", nombre: "Genética y Biología Molecular", semestre: 6, estado: "porCursar", seriadas: [] },

  // Semestre 7
  { id: "bioqexp", nombre: "Bioquímica Experimental", semestre: 7, estado: "porCursar", seriadas: [] },
  { id: "anmed", nombre: "Análisis de Medicamentos", semestre: 7, estado: "porCursar", seriadas: [] },
  { id: "biofarma", nombre: "Biofarmacia", semestre: 7, estado: "porCursar", seriadas: [] },
  { id: "inmu", nombre: "Inmunología General", semestre: 7, estado: "porCursar", seriadas: [] },
  { id: "tecfarma1", nombre: "Tecnología Farmacéutica I", semestre: 7, estado: "porCursar", seriadas: [] },

  // Semestre 8
  { id: "genomica", nombre: "Introducción a la Genómica", semestre: 8, estado: "porCursar", seriadas: [] },
  { id: "calidad", nombre: "Aseguramiento de la Calidad", semestre: 8, estado: "porCursar", seriadas: [] },
  { id: "bioqclin", nombre: "Bioquímica Clínica", semestre: 8, estado: "porCursar", seriadas: [] },
  { id: "optativas8", nombre: "Optativas Disciplinarias", semestre: 8, estado: "porCursar", seriadas: [] },

  // Semestre 9
  { id: "estancia", nombre: "Estancia Estudiantil", semestre: 9, estado: "porCursar", seriadas: [] },
  { id: "optativas9", nombre: "Optativas Disciplinarias", semestre: 9, estado: "porCursar", seriadas: [] }
];

// Lógica del sitio

const container = document.getElementById("malla-container");

function guardar() {
  localStorage.setItem("estados", JSON.stringify(materias.map(m => m.estado)));
}

function cargar() {
  const data = JSON.parse(localStorage.getItem("estados"));
  if (data) materias.forEach((m, i) => m.estado = data[i]);
}

function actualizarBloqueos() {
  materias.forEach(m => {
    if (m.seriadas.length > 0) {
      const desbloqueada = m.seriadas.every(id => {
        const prereq = materias.find(x => x.id === id);
        return prereq && prereq.estado === "aprobada";
      });
      if (desbloqueada && m.estado === "bloqueada") m.estado = "porCursar";
      if (!desbloqueada && m.estado !== "aprobada") m.estado = "bloqueada";
    }
  });
}

function render() {
  container.innerHTML = "";
  const porSemestre = {};
  materias.forEach(m => {
    if (!porSemestre[m.semestre]) porSemestre[m.semestre] = [];
    porSemestre[m.semestre].push(m);
  });

  Object.keys(porSemestre).forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${sem}</h2>`;

    porSemestre[sem].forEach(m => {
      const card = document.createElement("div");
      card.className = `materia ${m.estado}`;
      card.textContent = m.nombre;
      card.onclick = () => cambiarEstado(m);
      div.appendChild(card);
    });

    container.appendChild(div);
  });
}

function cambiarEstado(m) {
  if (m.estado === "bloqueada") return;
  const orden = ["porCursar", "enCurso", "aprobada"];
  const idx = orden.indexOf(m.estado);
  m.estado = orden[(idx + 1) % orden.length];
  actualizarBloqueos();
  guardar();
  render();
}

cargar();
actualizarBloqueos();
render();
