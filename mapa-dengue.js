document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       DADOS (simulação)
    ========================== */

    const dadosBairros = [
        { nome: "Centro", casos: 45 },
        { nome: "São Sebastião", casos: 32 },
        { nome: "Santa Terezinha", casos: 18 },
        { nome: "Três Marias", casos: 27 },
        { nome: "Cidade Nova", casos: 51 },
        { nome: "São José", casos: 12 },
        { nome: "Alto dos Pinheiros", casos: 21 },
        { nome: "Santa Rita", casos: 9 }
    ];

    const evolucaoAnual = {
        2022: 180,
        2023: 240,
        2024: 320,
        2025: 280
    };

    /* ==========================
       MAPA (Cards por Bairro)
    ========================== */

    const mapaContainer = document.getElementById("mapGrid");

    dadosBairros.forEach(bairro => {

        const card = document.createElement("div");
        card.classList.add("bairro-card");

        if (bairro.casos <= 15) {
            card.classList.add("baixo");
        } else if (bairro.casos <= 35) {
            card.classList.add("medio");
        } else {
            card.classList.add("alto");
        }

        card.innerHTML = `
            <h4>${bairro.nome}</h4>
            <p>${bairro.casos} casos</p>
        `;

        mapaContainer.appendChild(card);
    });

    /* ==========================
       MÉTRICAS
    ========================== */

    const totalCasos = dadosBairros.reduce((total, bairro) => total + bairro.casos, 0);
    document.getElementById("totalCasos").textContent = totalCasos;

    const bairroCritico = dadosBairros.reduce((prev, current) =>
        (prev.casos > current.casos) ? prev : current
    );
    document.getElementById("bairroCritico").textContent = bairroCritico.nome;

    const anos = Object.keys(evolucaoAnual);
    const ultimoAno = anos[anos.length - 1];
    const penultimoAno = anos[anos.length - 2];

    const variacao = evolucaoAnual[ultimoAno] - evolucaoAnual[penultimoAno];
    const variacaoPercentual = ((variacao / evolucaoAnual[penultimoAno]) * 100).toFixed(1);

    document.getElementById("variacaoAnual").textContent =
        variacao >= 0 ? `+${variacaoPercentual}%` : `${variacaoPercentual}%`;

    /* ==========================
       GRÁFICO (Chart.js)
    ========================== */

    const ctx = document.getElementById("graficoEvolucao").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: anos,
            datasets: [{
                label: "Casos de Dengue",
                data: Object.values(evolucaoAnual),
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

});