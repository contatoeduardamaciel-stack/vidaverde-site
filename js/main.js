// fecha menu automático se tiver aberto (proteção)
const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
if (menuToggle && navList) {
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navList.classList.remove("active");
    });
  });
}

// ======== SPA SIMPLES (opcional) ========
// Regras: 
// 1) coloque id="conteudo-principal" no <main> do index.html
// 2) links que você quiser carregar via SPA devem estar no mesmo domínio (ex.: GitHub Pages)
// 3) o código tenta buscar o arquivo e extrair o conteúdo do <main> dele
const conteudo = document.getElementById("conteudo-principal");
if (conteudo) {
  document.querySelectorAll('a[href$=".html"]').forEach(a => {
    a.addEventListener("click", async (e) => {
      // se o usuário segurar ctrl/⎈ ou botão direito, deixa abrir normal
      if (e.metaKey || e.ctrlKey || e.button !== 0) return;

      e.preventDefault();
      const href = a.getAttribute("href");
      try {
        const resp = await fetch(href);
        if (!resp.ok) throw new Error("Não foi possível carregar a página.");
        const html = await resp.text();
        // extrai conteúdo entre <main>...</main>
        const match = html.match(/<main[^>]>([\s\S]?)<\/main>/i);
        if (match && match[1]) {
          conteudo.innerHTML = match[1];
          window.history.pushState({ page: href }, "", href);
          // opcional: executar scripts necessários (não automático)
        } else {
          // fallback: redireciona
          window.location.href = href;
        }
      } catch (err) {
        console.error(err);
        window.location.href = href; // fallback
      }
    });
  });

  // Voltar/avançar do browser
  window.addEventListener("popstate", (e) => {
    if (e.state && e.state.page) {
      // recarrega o conteúdo simples
      fetch(e.state.page)
        .then(r => r.text())
        .then(t => {
          const m = t.match(/<main[^>]>([\s\S]?)<\/main>/i);
          if (m && m[1]) conteudo.innerHTML = m[1];
        });
    }
  });
}