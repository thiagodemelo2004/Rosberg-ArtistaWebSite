// ========================================
// CERTIFICAÇÕES ARTÍSTICAS
// ========================================

const certifications = [

    {
        title: "Formação de Ator Iniciante",
        year: "2024",
        institution: "Centro Estadual de Arte — CEARTE",
        image: "15-4-24.png"
    },

    {
        title: "Oficina de Teatro",
        year: "2025",
        institution: "Cia Multicultural Art'Spaço",

        // FRENTE
        image: "21-6-25 A.png",

        // VERSO
        backImage: "21-6-25 B.png"
    },

    {
        title: "Interpretação em Teatro",
        year: "2025",
        institution: "Centro Estadual de Arte — CEARTE",
        image: "22-9-25.png"
    },

    {
        title: "Montagem Teatral III Avançado",
        year: "2025",
        institution: "Centro Estadual de Arte — CEARTE",
        image: "8-6-25.png"
    },

    {
        title: "Montagem Teatral III Avançado",
        year: "2026",
        institution: "Centro Estadual de Arte — CEARTE",
        image: "8-6-26.png"
    },

    {
        title: "Teatro Laboratório III Avançado",
        year: "2026",
        institution: "Centro Estadual de Arte — CEARTE",
        image: "8-6-26 2.png"
    },

    {
        title: "Teatro III",
        year: "2026",
        institution: "Centro Estadual de Arte — CEARTE",
        image: "15-9-26.png"
    },

    {
        title: "Licenciatura Plena",
        year: "2026",
        institution: "Universidade Federal de Alagoas — UFAL",
        image: "Z 10-11-26.png"
    },

    {
        title: "Arte Dramática Técnico",
        year: "2026",
        institution: "Universidade Federal de Alagoas — UFAL",
        image: "Z 10-11-26 A.png"
    }

];


const training = [
    ['2026',  'Técnico em Arte Dramática', 'Escola Técnica de Artes (UFAL)/Cursando'],
    ['2026',  'Licenciatura em Teatro','Universidade Federal de Alagoas (Graduando)'],
    ['2026',  'Poética Evocaré','Universidade Federal da Paraíba - PB'],
    ['2026.1', 'Montagem Teatral 111', 'Centro Estadual de Arte (Cearte) - PB'],
    ['2025', 'Oficina Básica de Palhaçaria', 'FUNESC · PB'],
    ['2025.2', 'Montagem Teatral III', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2025.2', 'Teatro Laboratório III', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2025.2', 'Os Trepeças — Grupo de Improviso', 'Cia Art’Spaço · PB'],
    ['2025.1', 'Interpretação em Teatro', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2025.1', 'Oficinas de Teatro', 'Cia Multicultural Art’Spaço · PB'],
    ['2025.1', 'Montagem Teatral', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2024', 'Grupo de Teatro Vozes', 'Teatro Vozes · RJ'],
    ['2023', 'Curso de Teatro Profissionalizante', 'Cia de Teatro Contemporâneo · RJ'],
    ['2023', 'Curso de Teatro Prefeitura', 'Cia Ratos de Teatro · RJ'],
    ['2022 – 2023', 'Formação de Ator', 'Centro Estadual de Arte (Cearte) · PB']
    
];

const works = [
    { title: 'De Deuses, Homens e Seus Vícios', year: '2023', date: '16 de julho de 2023', place: 'São Cristóvão, Rio de Janeiro', image: 'foto-1-11.png' },
    { title: 'Experimento de Teatro Físico', year: '2024', date: '21 de março de 2024', place: 'PPG, Rio de Janeiro', image: 'delado.png' },
    { title: 'Auto da Paixão', year: '2025', date: '12 de abril de 2025', place: 'João Pessoa, Paraíba', image: 'foto-1-20.png' },
    { title: 'Quem Matou Tereza?', year: '2025', date: '09 de junho de 2025', place: 'João Pessoa, Paraíba', image: 'foto-1-26.png' },
    { title: 'O Doente Imaginário', year: '2025', date: '11 de junho de 2025', place: 'João Pessoa, Paraíba', image: 'foto-1-29.png' },
    { title: 'Fragmentos da Vida', year: '2025', date: 'Julho a agosto de 2025 · 7 apresentações', place: 'João Pessoa, Paraíba', image: 'foto-1-36.png' },
    { title: 'Entre Sonhos e Realidade: Dois Sonhos', year: '2025', date: '26 de setembro e 18 de outubro de 2025', place: 'Santa Rita, Paraíba', image: 'foto-2-2.png' },
    { title: 'O Diário da Mamãe', year: '2025', date: '06 e 09 de dezembro de 2025', place: 'João Pessoa, Paraíba', image: 'foto-2-9.png' },
    { title: 'Corpo Memória', year: '2025', date: '08 de dezembro de 2025', place: 'João Pessoa, Paraíba', image: 'foto-2-15.png', },
    { title: 'Tudo demais é veneno', year: '2026', date: '10 de junho de 2026', place: 'João Pessoa, Paraíba', image: 'tudoedemais.png' },
    { title: 'Cadê as flores?', year: '2026', date: '18 de outubro de 2026', place: 'João Pessoa, Paraíba', image: 'cadeasflores.jpeg' },
    { title: 'O Diário da Mamãe Nova Temporada', year: '2026', date: '12 e 19 de abril de 2026', place: 'João Pessoa, Paraíba', image: 'diariodamamae2.png' }
];

const timeline = document.querySelector('#timeline');
training.forEach(([year, title, place]) => {
    const el = document.createElement('article');
    el.className = 'timeline-item reveal';
    el.innerHTML = `<span class="timeline-year">${year}</span><div><h3>${title}</h3><p>${place}</p></div>`;
    timeline.append(el);
});

const grid = document.querySelector('#workGrid');
const modal = document.querySelector('#lightbox');

function renderWorks(filter = 'all') {
    grid.innerHTML = '';

    works
        .filter(w => filter === 'all' || w.year === filter)
        .sort((a, b) => Number(b.year) - Number(a.year))
        .forEach(w => {

            const card = document.createElement('article');
            card.className = 'work-card';

            card.innerHTML = `
                <button class="work-image" aria-label="Ampliar foto de ${w.title}">
                    <img src="assets/${w.image}" loading="lazy" alt="Cena do espetáculo ${w.title}">
                </button>

                <div class="work-meta">${w.year} / ${w.place}</div>

                <h3>${w.title}</h3>

                <p>${w.date}</p>
            `;

            card.querySelector('button').addEventListener('click', () => {
                document.querySelector('#lightboxImage').src = `assets/${w.image}`;
                document.querySelector('#lightboxImage').alt = w.title;
                document.querySelector('#lightboxCaption').textContent = `${w.title} · ${w.date}`;
                modal.showModal();
            });

            grid.append(card);
        });
}

renderWorks();

// ========================================
// GALERIA DE CERTIFICAÇÕES
// ========================================

const certificationsGrid = document.querySelector(
    "#certificationsGrid"
);


// ABRIR CERTIFICADO NO LIGHTBOX EXISTENTE

function openCertificate(imagePath, title) {

    const lightbox = document.querySelector("#lightbox");
    const lightboxImage = document.querySelector("#lightboxImage");
    const lightboxCaption = document.querySelector("#lightboxCaption");

    lightboxImage.src = encodeURI(imagePath);
    lightboxImage.alt = title;

    lightboxCaption.textContent = title;

    lightbox.showModal();

}


// CRIAR GALERIA

function renderCertifications() {

    if (!certificationsGrid) return;

    certificationsGrid.innerHTML = "";

    [...certifications]
    .sort((a, b) => {
        const dataA = a.image.match(/(\d{1,2})-(\d{1,2})-(\d{2})/);
        const dataB = b.image.match(/(\d{1,2})-(\d{1,2})-(\d{2})/);

        const converterData = (dados, anoFallback) => {
            if (!dados) return new Date(Number(anoFallback), 0, 1).getTime();

            const [, dia, mes, ano] = dados;
            return new Date(2000 + Number(ano), Number(mes) - 1, Number(dia)).getTime();
        };

        return converterData(dataB, b.year) - converterData(dataA, a.year);
    })
    .forEach(cert => {

        const card = document.createElement("article");

        card.className = "certification-card reveal";

        const frontPath = "certificacoes/" + cert.image;

        const backPath = cert.backImage
            ? "certificacoes/" + cert.backImage
            : null;

        const hasBack = Boolean(backPath);


        // HTML DO CERTIFICADO

        card.innerHTML = `

            <div class="certificate-flip-container">

                <div class="certificate-flip-inner">

                    <!-- FRENTE -->

                    <div class="certificate-face certificate-front">

                        <button
                            class="certificate-view"
                            type="button"
                            aria-label="Ampliar frente do certificado ${cert.title}"
                        >

                            <img
                                src="${encodeURI(frontPath)}"
                                alt="${cert.title} - Frente"
                                loading="lazy"
                            >

                            <span class="certificate-zoom">
                                AMPLIAR DOCUMENTO ↗
                            </span>

                        </button>

                    </div>


                    ${hasBack ? `

                        <!-- VERSO -->

                        <div class="certificate-face certificate-back">

                            <button
                                class="certificate-view"
                                type="button"
                                aria-label="Ampliar verso do certificado ${cert.title}"
                            >

                                <img
                                    src="${encodeURI(backPath)}"
                                    alt="${cert.title} - Verso"
                                    loading="lazy"
                                >

                                <span class="certificate-zoom">
                                    AMPLIAR VERSO ↗
                                </span>

                            </button>

                        </div>

                    ` : ""}

                </div>

            </div>


            <!-- INFORMAÇÕES -->

            <div class="certification-info">

                <span class="certification-year">
                    ${cert.year}
                </span>

                <h4>${cert.title}</h4>

                <p>${cert.institution}</p>


                ${hasBack ? `

                    <button
                        class="certificate-flip-btn"
                        type="button"
                        aria-pressed="false"
                    >

                        <span class="flip-icon">↻</span>

                        <span class="flip-text">
                            VER VERSO
                        </span>

                    </button>

                ` : ""}

            </div>

        `;


        // AMPLIAR FRENTE

        const frontButton = card.querySelector(
            ".certificate-front .certificate-view"
        );

        frontButton.addEventListener("click", () => {

            openCertificate(
                frontPath,
                `${cert.title} — Frente`
            );

        });


        // CERTIFICADOS COM VERSO

        if (hasBack) {

            const backButton = card.querySelector(
                ".certificate-back .certificate-view"
            );

            const flipButton = card.querySelector(
                ".certificate-flip-btn"
            );

            const flipText = card.querySelector(
                ".flip-text"
            );


            // AMPLIAR VERSO

            backButton.addEventListener("click", () => {

                openCertificate(
                    backPath,
                    `${cert.title} — Verso`
                );

            });


            // ANIMAÇÃO DE VIRAR

            flipButton.addEventListener("click", () => {

                const isFlipped = card.classList.toggle(
                    "is-flipped"
                );

                flipText.textContent = isFlipped
                    ? "VER FRENTE"
                    : "VER VERSO";

                flipButton.setAttribute(
                    "aria-pressed",
                    String(isFlipped)
                );

            });

        }


        certificationsGrid.appendChild(card);

    });

}


// EXECUTAR

renderCertifications();

document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    btn.classList.add('active');
    renderWorks(btn.dataset.filter);
}));

document.querySelector('#closeLightbox').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => {
    if (e.target === modal) modal.close();
});

const observer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    }
}), { threshold: .1, rootMargin: '0px 0px -25px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const toggle = document.querySelector('#menuToggle'),
      nav = document.querySelector('#nav');

toggle.addEventListener('click', () => {
    let open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
}));

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            let max = document.documentElement.scrollHeight - innerHeight;
            document.querySelector('#progress').style.width = (max > 0 ? scrollY / max * 100 : 0) + '%';
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });