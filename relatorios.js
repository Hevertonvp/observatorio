// ===============================
// DADOS DOS BAIRROS
// ===============================

const bairros = [
    "Centro",
    "Santa Rita",
    "Cidade Nova",
    "São Sebastião",
    "Alto dos Pinheiros",
    "Caxangá",
    "Santo Antônio"
];

// Dados simulados (coletados pelos alunos)
const residuosColetados = [120, 95, 140, 80, 60, 75, 110]; // kg recicláveis
const focosDengue = [8, 15, 5, 12, 4, 9, 6]; // focos identificados
const qualidadeAr = [72, 65, 78, 60, 82, 74, 69]; // índice ambiental


// ===============================
// GRÁFICO 1 - RESÍDUOS RECICLÁVEIS
// ===============================

new Chart(document.getElementById("graficoResiduos"), {
    type: "bar",
    data: {
        labels: bairros,
        datasets: [{
            label: "Kg de resíduos recicláveis",
            data: residuosColetados,
            backgroundColor: "#2e7d32"
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// ===============================
// GRÁFICO 2 - FOCOS DE DENGUE
// ===============================

new Chart(document.getElementById("graficoDengue"), {
    type: "line",
    data: {
        labels: bairros,
        datasets: [{
            label: "Focos identificados",
            data: focosDengue,
            borderColor: "#c62828",
            backgroundColor: "rgba(198, 40, 40, 0.2)",
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});


// ===============================
// GRÁFICO 3 - QUALIDADE DO AR
// ===============================

new Chart(document.getElementById("graficoAr"), {
    type: "doughnut",
    data: {
        labels: bairros,
        datasets: [{
            label: "Índice de qualidade",
            data: qualidadeAr,
            backgroundColor: [
                "#1b5e20",
                "#2e7d32",
                "#388e3c",
                "#43a047",
                "#66bb6a",
                "#81c784",
                "#a5d6a7"
            ]
        }]
    },
    options: {
        responsive: true
    }
});