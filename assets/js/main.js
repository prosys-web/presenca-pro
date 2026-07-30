/* ════════════════════════════════════════════════════════════════
   PRESENÇA PRO — DESIGN SYSTEM v2.0
   main.js OFICIAL — ARQUIVO CONGELADO
   Versão: 2.0 | Data: Julho 2026

   ⚠️  NÃO ALTERAR ESTE ARQUIVO.
   Para comportamentos exclusivos de uma página, criar um
   arquivo page-[nome].js separado e importar APÓS este.

   Comportamentos globais incluídos:
   1. Menu Mobile (hamburger toggle + fechar ao clicar em link)
   2. Reveal on Scroll (IntersectionObserver)
   3. FAQ Accordion (abrir/fechar perguntas)
════════════════════════════════════════════════════════════════ */


/* ── 1. MENU MOBILE ─────────────────────────────────────────── */
(function initMobileMenu() {
  const hamburger  = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    const [s1, s2, s3] = hamburger.querySelectorAll('span');
    s1.style.transform = 'rotate(45deg) translate(5px, 5px)';
    s2.style.opacity   = '0';
    s3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = 'none';
      s.style.opacity   = '1';
    });
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  /* Fechar ao clicar em qualquer link do menu mobile */
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();


/* ── 2. REVEAL ON SCROLL ────────────────────────────────────── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.08 }
  );

  elements.forEach(el => observer.observe(el));
})();


/* ── 3. FAQ ACCORDION ───────────────────────────────────────── */
(function initFaq() {
  const questions = document.querySelectorAll('.faq-question');
  if (!questions.length) return;

  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.parentElement;
      const isOpen = item.classList.contains('open');

      /* Fecha todos os outros */
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
      });

      /* Abre o clicado (se estava fechado) */
      if (!isOpen) item.classList.add('open');
    });
  });
})();


/* ── FIM DO ARQUIVO ─────────────────────────────────────────── */
/* main.js | Presença Pro Design System v2.0 | Congelado        */
