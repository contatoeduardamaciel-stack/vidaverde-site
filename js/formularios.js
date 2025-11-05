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


// ======== FORMULÁRIO DE CADASTRO ========
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