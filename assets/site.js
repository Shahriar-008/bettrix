const pages = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'services.html', label: 'Services', key: 'services' },
  { href: 'portfolio.html', label: 'Portfolio', key: 'portfolio' },
  { href: 'pricing.html', label: 'Pricing', key: 'pricing' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'contact.html', label: 'Contact', key: 'contact' },
];

const body = document.body;
const activePage = body.dataset.page;
const currentYear = new Date().getFullYear();

function navMarkup() {
  return `
    <nav class="site-nav" aria-label="Primary">
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
        Menu
      </button>
      <div class="site-nav__panel" id="primary-nav">
        <div class="site-nav__links">
          ${pages
            .map(
              (page) => `
                <a href="${page.href}" ${page.key === activePage ? "aria-current='page'" : ''}>
                  ${page.label}
                </a>
              `,
            )
            .join('')}
        </div>
        <a class="nav-cta" href="contact.html#booking">Book a discovery call</a>
      </div>
    </nav>
  `;
}

function footerMarkup() {
  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__grid">
          <div class="stack">
            <a class="brand" href="index.html">
              <span class="brand__mark">B</span>
              <span>Bettrix</span>
            </a>
            <p class="site-footer__small">
              Better websites. Faster results. Affordable custom builds and maintenance for growing businesses.
            </p>
          </div>
          <div class="stack">
            <h3>Pages</h3>
            <div class="site-footer__links">
              ${pages.map((page) => `<a href="${page.href}">${page.label}</a>`).join('')}
            </div>
          </div>
          <div class="stack">
            <h3>Contact</h3>
            <div class="site-footer__links">
              <a href="contact.html#booking">Book a discovery call</a>
              <a href="contact.html#whatsapp">WhatsApp</a>
              <a href="mailto:hello@bettrix.com">hello@bettrix.com</a>
            </div>
          </div>
        </div>
        <p class="site-footer__small">© ${currentYear} Bettrix. Built for fast, focused lead generation.</p>
      </div>
    </footer>
  `;
}

function whatsappMarkup() {
  return `
    <a class="floating-whatsapp" id="whatsapp" href="contact.html#whatsapp" aria-label="Open WhatsApp contact">
      <span class="floating-whatsapp__dot" aria-hidden="true"></span>
      <span>WhatsApp</span>
    </a>
  `;
}

const showcaseItems = [
  {
    name: 'Prosno.io',
    href: 'https://prosno-io.app/',
    label: 'Live site',
  },
  {
    name: 'PeakPack',
    href: 'https://peakpack.bettrix.tech/',
    label: 'Live site',
  },
];

function showcaseMarkup() {
  return `
    <div class="showcase-strip">
      <div class="section__header">
        <div class="section__eyebrow">Selected work</div>
        <h2>Live projects worth a closer look.</h2>
        <p class="section__subhead">
          Prosno.io and PeakPack show the kind of sites Bettrix builds when the work needs to look
          polished and feel credible.
        </p>
      </div>
      <div class="showcase-strip__grid">
        ${showcaseItems
          .map(
            (item) => `
              <a class="showcase-card" href="${item.href}" target="_blank" rel="noopener noreferrer">
                <span class="showcase-card__label">${item.label}</span>
                <strong>${item.name}</strong>
                <span class="showcase-card__meta">${new URL(item.href).hostname}</span>
              </a>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

document.querySelectorAll('[data-site-header]').forEach((placeholder) => {
  placeholder.innerHTML = `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="index.html">
          <span class="brand__mark">B</span>
          <span>Bettrix</span>
        </a>
        ${navMarkup()}
      </div>
    </header>
  `;
});

document.querySelectorAll('[data-site-footer]').forEach((placeholder) => {
  placeholder.innerHTML = footerMarkup();
});

document.querySelectorAll('[data-site-whatsapp]').forEach((placeholder) => {
  placeholder.innerHTML = whatsappMarkup();
});

document.querySelectorAll('[data-site-showcase]').forEach((placeholder) => {
  placeholder.innerHTML = showcaseMarkup();
});

const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (event) => {
    const nav = document.querySelector('.site-nav');
    if (nav && !nav.contains(event.target)) {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const revealElements = [...document.querySelectorAll('[data-reveal]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, observerRef) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerRef.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealElements.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add('reveal', 'is-visible'));
}

const filterTabs = document.querySelectorAll('[data-filter]');
const filterCards = document.querySelectorAll('[data-category]');
if (filterTabs.length && filterCards.length) {
  const applyFilter = (filter) => {
    filterTabs.forEach((tab) => {
      tab.setAttribute('aria-pressed', String(tab.dataset.filter === filter));
    });

    filterCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category?.includes(filter);
      card.hidden = !show;
    });
  };

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => applyFilter(tab.dataset.filter || 'all'));
  });

  applyFilter('all');
}
