// ============================================================
// Efeito header ao scroll
// ============================================================
function initEfeitoHeader() {
    const header = document.getElementById("header-js");
    if (!header) return;

    const carrossel = document.querySelector(".carrossel");
    const introducao = document.querySelector(".introducao");
    const ul = document.querySelector('.lista_hamburguer');
    const referencia = carrossel || introducao;
    if (!referencia) return;

    function menuTopo() {
        const alturaTopo = referencia.getBoundingClientRect().top;
        if (alturaTopo < 60) {
            header.classList.add('ativo');
            if (ul) ul.classList.add('ativo');
        } else {
            header.classList.remove('ativo');
            if (ul) ul.classList.remove('ativo');
        }
    }

    window.addEventListener('scroll', menuTopo);
}

initEfeitoHeader();

// ============================================================
// Menu hamburguer
// ============================================================
function initEfeitoHamburguer() {
    const icon = document.querySelector('.icon');
    const ul = document.querySelector('.lista_hamburguer');
    if (!icon || !ul) return;

    // Cria backdrop no body
    const backdrop = document.createElement('div');
    backdrop.className = 'menu_backdrop';
    document.body.appendChild(backdrop);

    function abrirMenu() {
        icon.classList.add('ativa');
        ul.classList.add('ativa');
        backdrop.classList.add('ativo');
        document.body.style.overflow = 'hidden';
    }

    function fecharMenu() {
        icon.classList.remove('ativa');
        ul.classList.remove('ativa');
        backdrop.classList.remove('ativo');
        document.body.style.overflow = '';
    }

    icon.addEventListener('click', () => {
        if (ul.classList.contains('ativa')) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    // Fecha ao clicar no backdrop
    backdrop.addEventListener('click', fecharMenu);

    // Fecha ao clicar em um link do menu
    ul.querySelectorAll('.ancora').forEach(link => {
        link.addEventListener('click', fecharMenu);
    });
}

initEfeitoHamburguer();

// ============================================================
// Animação scroll seção "Quem Sou"
// ============================================================
function initEfeitoScrollSobre() {
    const sobre = document.querySelector('.sobre');
    if (!sobre) return;

    const windowMetade = window.innerHeight * 0.85;

    function sobreScrollEfect() {
        const sobreTopo = sobre.getBoundingClientRect().top - windowMetade;
        if (sobreTopo < 0) {
            sobre.classList.add('ativo');
        }
    }

    window.addEventListener('scroll', sobreScrollEfect);
    sobreScrollEfect(); // verifica no carregamento
}

initEfeitoScrollSobre();

// ============================================================
// Animação scroll cards de qualificações
// ============================================================
function initEfeitoScrollCards() {
    const cards = document.querySelectorAll('.qualificacoes_info');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

initEfeitoScrollCards();

// ============================================================
// Animação scroll cards de habilidades
// ============================================================
function initEfeitoScrollHabilidades() {
    const cards = document.querySelectorAll('.habilidades_card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

initEfeitoScrollHabilidades();

// ============================================================
// Accordion FAQ
// ============================================================
const accordionList = document.querySelectorAll('.js-duvidas h4');

function activeAccordion() {
    const isActive = this.classList.contains('ativo');

    // Fecha todos
    accordionList.forEach(item => {
        item.classList.remove('ativo');
        const next = item.nextElementSibling;
        if (next) next.classList.remove('ativo');
    });

    // Abre o clicado (se não estava aberto)
    if (!isActive) {
        this.classList.add('ativo');
        const next = this.nextElementSibling;
        if (next) next.classList.add('ativo');
    }
}

accordionList.forEach(item => {
    item.addEventListener('click', activeAccordion);
});

// ============================================================
// Nav: marca link ativo conforme a página atual
// ============================================================
function initNavAtivo() {
    const links = document.querySelectorAll('.menu .ancora');
    if (!links.length) return;

    const path = window.location.pathname;

    // Mapeia segmentos do path para o href correspondente no nav
    const mapa = {
        'home':        'home.html',
        'sobre':       'sobre.html',
        'servicos':    'servicos.html',
        'antes-depois':'antes-depois.html',
        'blog':        'blog.html',
        'artigos':     'blog.html',   // artigos pertencem ao Blog
        'contato':     'contato.html',
    };

    // Determina qual arquivo/seção estamos
    const segmento = path.split('/').filter(Boolean).pop() || '';
    const pasta    = path.split('/').filter(Boolean).slice(-2, -1)[0] || '';

    // Identifica o href alvo
    let alvo = null;
    for (const [chave, href] of Object.entries(mapa)) {
        if (segmento.startsWith(chave) || pasta === chave) {
            alvo = href;
            break;
        }
    }

    links.forEach(link => {
        const href = link.getAttribute('href') || '';
        // Normaliza: remove ../ e ./ para comparar apenas o nome do arquivo
        const nomeHref = href.replace(/^(\.\.\/|\.\/)*/, '');
        if (alvo && nomeHref === alvo) {
            link.classList.add('ancora--ativa');
        }
    });
}

initNavAtivo();

// ============================================================
// Botão WhatsApp
// ============================================================
const botoes = document.querySelectorAll('.js-botao');
botoes.forEach(item => {
    const phone = "+5588996985943";
    const mensagem = "Olá, vim pelo site e gostaria de agendar uma consulta.";
    const message = encodeURIComponent(mensagem);
    item.addEventListener("click", () => {
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
});
