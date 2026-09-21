document.addEventListener('DOMContentLoaded', () => {
    const $ = (s, el = document) => el.querySelector(s);
    const $$ = (s, el = document) => [...el.querySelectorAll(s)];

    $('#year').textContent = new Date().getFullYear();

    const navbar = $('#navbar');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
        backToTop.classList.toggle('show', window.scrollY > 500);
        updateActiveNav();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const hamburger = $('#hamburger');
    const navMenu = $('.nav-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
    $$('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    const themeToggle = $('#themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem('portfolio-theme');
    const applyTheme = (t) => {
        document.documentElement.setAttribute('data-theme', t);
        themeIcon.className = t === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('portfolio-theme', t);
    };
    if (savedTheme) applyTheme(savedTheme);
    themeToggle.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(cur === 'dark' ? 'light' : 'dark');
    });

    const typedEl = $('#typedText');
    const titles = [
        'AI / Machine Learning Engineer',
        'Cybersecurity Enthusiast',
        'Full-Stack Developer',
        'Problem Solver & Builder'
    ];
    let ti = 0, ci = 0, deleting = false;
    const typeLoop = () => {
        const cur = titles[ti];
        if (deleting) {
            typedEl.textContent = cur.substring(0, ci - 1);
            ci--;
        } else {
            typedEl.textContent = cur.substring(0, ci + 1);
            ci++;
        }
        let delay = deleting ? 40 : 80;
        if (!deleting && ci === cur.length) { delay = 1800; deleting = true; }
        else if (deleting && ci === 0) { deleting = false; ti = (ti + 1) % titles.length; delay = 400; }
        setTimeout(typeLoop, delay);
    };
    typeLoop();

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${(idx % 6) * 80}ms`;
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    $$('.reveal').forEach(el => revealObserver.observe(el));

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.dataset.target;
                let cur = 0;
                const step = Math.max(1, Math.floor(target / 50));
                const tick = () => {
                    cur += step;
                    if (cur >= target) { el.textContent = target + '+'; statObserver.unobserve(el); return; }
                    el.textContent = cur;
                    requestAnimationFrame(tick);
                };
                tick();
            }
        });
    }, { threshold: 0.5 });
    $$('.stat-num').forEach(el => statObserver.observe(el));

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.level + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });
    $$('.skill-fill').forEach(el => skillObserver.observe(el));

    const sections = $$('section[id]');
    const navLinks = $$('.nav-link');
    const updateActiveNav = () => {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    };

    const filterBtns = $$('.filter-btn');
    const projCards = $$('.project-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            projCards.forEach(card => {
                const cats = (card.dataset.category || '').split(' ');
                const show = filter === 'all' || cats.includes(filter);
                card.style.transition = 'all 0.4s ease';
                if (show) {
                    card.style.display = '';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => { card.style.display = 'none'; }, 400);
                }
            });
        });
    });

    const contactForm = $('#contactForm');
    const formNote = $('#formNote');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#name').value.trim();
        const email = $('#email').value.trim();
        const message = $('#message').value.trim();
        if (!name || !email || !message) {
            formNote.textContent = '⚠️ Please fill in all required fields.';
            formNote.style.color = '#ef4444';
            return;
        }
        const subject = encodeURIComponent($('#subject').value || `Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:sammedpadanad979@gmail.com?subject=${subject}&body=${body}`;
        formNote.textContent = '✅ Opening your email client... Thank you for reaching out!';
        formNote.style.color = '#10b981';
        setTimeout(() => { formNote.textContent = ''; }, 5000);
    });

    const backToTop = $('#backToTop');
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const tiltCards = $$('.project-card, .code-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rx = ((y - cy) / cy) * -3;
            const ry = ((x - cx) / cx) * 3;
            if (card.classList.contains('code-card')) {
                card.style.transform = `perspective(1000px) rotateX(${rx + 4}deg) rotateY(${ry - 4}deg)`;
            }
        });
        card.addEventListener('mouseleave', () => {
            if (card.classList.contains('code-card')) {
                card.style.transform = '';
            }
        });
    });

    onScroll();
    setTimeout(() => {
        $$('.hero .reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
        });
    }, 200);
});
