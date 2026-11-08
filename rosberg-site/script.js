const training = [
    ['2022 – 2023', 'Formação de Ator', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2023', 'Curso de Teatro Profissionalizante', 'Cia de Teatro Contemporâneo · RJ'],
    ['2023', 'Curso de Teatro Prefeitura', 'Cia Ratos de Teatro · RJ'],
    ['2024', 'Grupo de Teatro Vozes', 'Teatro Vozes · RJ'],
    ['2025.1', 'Interpretação em Teatro', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2025.1', 'Oficinas de Teatro', 'Cia Multicultural Art’Spaço · PB'],
    ['2025.1', 'Montagem Teatral', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2025', 'Oficina Básica de Palhaçaria', 'FUNESC · PB'],
    ['2025.2', 'Montagem Teatral III', 'Centro Estadual de Arte (Cearte) · PB'],
    ['2025.2', 'Os Trepeças — Grupo de Improviso', 'Cia Art’Spaço · PB'],
    ['2025.2', 'Teatro Laboratório III', 'Centro Estadual de Arte (Cearte) · PB']
];

const works = [
    { title: 'De Deuses, Homens e Seus Vícios', year: '2023', date: '16 de julho de 2023', place: 'São Cristóvão, Rio de Janeiro', image: 'foto-1-11.png' },
    { title: 'Experimento de Teatro Físico', year: '2024', date: '21 de março de 2024', place: 'PPG, Rio de Janeiro', image: 'foto-1-9.png' },
    { title: 'Auto da Paixão', year: '2025', date: '12 de abril de 2025', place: 'João Pessoa, Paraíba', image: 'foto-1-20.png' },
    { title: 'Quem Matou Tereza?', year: '2025', date: '09 de junho de 2025', place: 'João Pessoa, Paraíba', image: 'foto-1-26.png' },
    { title: 'O Doente Imaginário', year: '2025', date: '11 de junho de 2025', place: 'João Pessoa, Paraíba', image: 'foto-1-29.png' },
    { title: 'Fragmentos da Vida', year: '2025', date: 'Julho a agosto de 2025 · 7 apresentações', place: 'João Pessoa, Paraíba', image: 'foto-1-36.png' },
    { title: 'Entre Sonhos e Realidade: Dois Sonhos', year: '2025', date: '26 de setembro e 18 de outubro de 2025', place: 'Santa Rita, Paraíba', image: 'foto-2-2.png' },
    { title: 'O Diário da Mamãe', year: '2025', date: '06 e 09 de dezembro de 2025', place: 'João Pessoa, Paraíba', image: 'foto-2-9.png' },
    { title: 'Corpo Memória', year: '2025', date: '08 de dezembro de 2025', place: 'João Pessoa, Paraíba', image: 'foto-2-15.png' }
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
    works.filter(w => filter === 'all' || w.year === filter).forEach(w => {
        const card = document.createElement('article');
        card.className = 'work-card';
        card.innerHTML = `<button class="work-image" aria-label="Ampliar foto de ${w.title}"><img src="assets/${w.image}" loading="lazy" alt="Cena do espetáculo ${w.title}"></button><div class="work-meta">${w.year} / ${w.place}</div><h3>${w.title}</h3><p>${w.date}</p>`;
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