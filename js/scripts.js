// ======== FORMULÁRIO DE CONTATO ========
const formContato = document.getElementById("contatoForm");
const mensagemContato = document.getElementById("mensagemConfirmacaoContato");

if (formContato) {
    formContato.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const assunto = document.getElementById("assunto").value;

        mensagemContato.classList.add('confirmacao');
        mensagemContato.textContent = `Obrigado, ${nome}! Sua mensagem sobre ${assunto} foi recebida. Entraremos em contato em breve.`;
        formContato.reset();
    });
}


// ======== FORMULÁRIO DE VOLUNTARIADO ========
const formVoluntario = document.getElementById("voluntarioForm");
const mensagemVoluntario = document.getElementById("mensagemConfirmacaoVoluntario");

if (formVoluntario) {
    formVoluntario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
const disponibilidade = document.getElementById("disponibilidade").value;

mensagemVoluntario.classList.add('confirmacao');
mensagemVoluntario.textContent = `Muito obrigado, ${nome}! Ficamos felizes com seu interesse em ser voluntário(a) com disponibilidade ${disponibilidade.replace("_", " ")}. Entraremos em contato em breve!`;
        formVoluntario.reset();
    });
}

// ======== FORMULÁRIO DE DOAÇÃO ========
const formDoacao = document.getElementById("doacaoForm");
const mensagemDoacao = document.getElementById("mensagemConfirmacaoDoacao");

if (formDoacao) {
    formDoacao.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        const nome = document.getElementById("nome").value;
        const valor = document.getElementById("valor").value;
        const metodo = document.getElementById("metodo").value;

        mensagemDoacao.classList.add('confirmacao');
        mensagemDoacao.textContent = `Obrigado, ${nome}! Sua doação de R$ ${valor} via ${metodo.toUpperCase()} foi registrada com sucesso. 💚`;
        formDoacao.reset(); // Limpa o formulário
    });
}
// ======== GRÁFICO DE VOLUNTÁRIOS ========
const graficoVoluntarios = document.getElementById("graficoVoluntarios");

if (graficoVoluntarios) {
    const dadosVoluntarios = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Voluntários ativos",
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65], // exemplo
            borderColor: "rgba(34, 139, 34, 1)",
            backgroundColor: "rgba(34, 139, 34, 0.2)",
            fill: true,
            tension: 0.3 // suaviza a linha
        }]
    };

    new Chart(graficoVoluntarios, {
        type: "line",
        data: dadosVoluntarios,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Evolução de Voluntários em 2025"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// ======== GRÁFICO DE DISTRIBUIÇÃO DE RECURSOS ========
const graficoRecursos = document.getElementById("graficoRecursos");

if (graficoRecursos) {
    const dadosRecursos = {
        labels: ["Reflorestamento", "Hortas Comunitárias", "Flores", "Projetos Educativos"],
        datasets: [{
            label: "Distribuição de Recursos",
            data: [40, 25, 20, 15], // porcentagem do orçamento
            backgroundColor: [
                "rgba(34, 139, 34, 0.7)",
                "rgba(60, 179, 113, 0.7)",
                "rgba(46, 139, 87, 0.7)",
                "rgba(144, 238, 144, 0.7)"
            ],
            borderColor: [
                "rgba(34, 139, 34, 1)",
                "rgba(60, 179, 113, 1)",
                "rgba(46, 139, 87, 1)",
                "rgba(144, 238, 144, 1)"
            ],
            borderWidth: 1
        }]
    };

    new Chart(graficoRecursos, {
        type: "pie",
        data: dadosRecursos,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Distribuição de Recursos VidaVerde"
                }
            }
        }
    });
}
// ======== GRÁFICO DE BARRAS – IMPACTO SOCIAL POR REGIÃO ========
const graficoImpacto = document.getElementById("graficoImpacto");

if (graficoImpacto) {
    const dadosImpacto = {
        labels: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
        datasets: [{
            label: "Projetos concluídos",
            data: [12, 20, 15, 25, 18], // exemplo de números de impacto
            backgroundColor: [
                "rgba(34, 139, 34, 0.7)",
                "rgba(60, 179, 113, 0.7)",
                "rgba(46, 139, 87, 0.7)",
                "rgba(144, 238, 144, 0.7)",
                "rgba(152, 251, 152, 0.7)"
            ],
            borderColor: [
                "rgba(34, 139, 34, 1)",
                "rgba(60, 179, 113, 1)",
                "rgba(46, 139, 87, 1)",
                "rgba(144, 238, 144, 1)",
                "rgba(152, 251, 152, 1)"
            ],
            borderWidth: 1
        }]
    };

    new Chart(graficoImpacto, {
        type: "bar",
        data: dadosImpacto,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Impacto Social VidaVerde por Região"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}