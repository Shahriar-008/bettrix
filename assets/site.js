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
    <a href="https://wa.me/8801XXXXXXXXX"
       class="whatsapp-float"
       target="_blank"
       rel="noopener"
       aria-label="Chat with us on WhatsApp"
       title="Chat with us">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#fff" aria-hidden="true">
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.6l7.9-2.1c2.3 1.3 4.9 1.9 7.6 1.9h.1c8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5h-.1c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.7 20.9 3 18.5 3 16 3 8.9 8.9 3 16 3s13 5.9 13 13-5.9 12.9-13 12.9zm7.2-9.7c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.3 2.4 3.7 5.9 5.2.8.3 1.5.5 2 .7.8.3 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.4-.3-.8-.5z"/>
      </svg>
      <span class="whatsapp-tooltip">Chat with us</span>
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
          <span class="logo-text">Bettrix</span>
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
