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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
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
    <footer class="site-footer bg-surface-container-lowest border-t border-outline-variant/20">
      <div class="site-footer__inner max-w-container mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div class="stack">
            <a class="brand inline-flex items-center gap-2" href="index.html">
              <span class="brand__mark inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-primary font-bold text-xl">B</span>
              <span class="font-headline text-headline-sm font-bold text-on-surface">Bettrix</span>
            </a>
            <p class="text-on-surface-variant font-body-sm text-body-sm mt-md max-w-xs">
              Better websites. Faster results. Affordable custom builds and maintenance for growing businesses.
            </p>
          </div>
          <div class="stack">
            <h4 class="text-on-surface font-bold text-body-md uppercase tracking-widest mb-md">Pages</h4>
            <div class="flex flex-col gap-3">
              ${pages.map((page) => `<a class="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="${page.href}">${page.label}</a>`).join('')}
            </div>
          </div>
          <div class="stack">
            <h4 class="text-on-surface font-bold text-body-md uppercase tracking-widest mb-md">Services</h4>
            <div class="flex flex-col gap-3">
              <a class="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="services.html">Web Design</a>
              <a class="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="services.html">E-commerce</a>
              <a class="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="services.html">Strategy</a>
              <a class="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="pricing.html">Pricing</a>
            </div>
          </div>
          <div class="stack">
            <h4 class="text-on-surface font-bold text-body-md uppercase tracking-widest mb-md">Connect</h4>
            <div class="flex flex-col gap-3">
              <a class="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="contact.html#booking">Book a discovery call</a>
              <a class="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="mailto:hello@bettrix.com">hello@bettrix.com</a>
              <div class="flex gap-3 mt-2">
                <a class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" href="#" aria-label="LinkedIn">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                <a class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" href="#" aria-label="GitHub">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-lg pt-md border-t border-outline-variant/10 text-center">
          <p class="text-on-surface-variant font-body-sm text-body-sm opacity-70">© ${currentYear} Bettrix. Built for fast, focused lead generation.</p>
        </div>
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
      <div class="section__header text-center mb-lg">
        <div class="inline-flex items-center gap-1.5 mb-3 text-primary font-label-sm tracking-widest uppercase">Selected work</div>
        <h2>Live projects worth a closer look.</h2>
        <p class="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto mt-sm">
          Prosno.io and PeakPack show the kind of sites Bettrix builds when the work needs to look
          polished and feel credible.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        ${showcaseItems
          .map(
            (item) => `
              <a class="glass-card p-lg rounded-xl group hover:border-primary/50 transition-all duration-300" href="${item.href}" target="_blank" rel="noopener noreferrer">
                <div class="w-full aspect-video rounded-lg bg-gradient-to-br from-primary/10 via-surface-container to-tertiary/10 flex items-center justify-center mb-md border border-outline-variant/20">
                  <span class="text-on-surface-variant font-body-sm">${item.name} Preview</span>
                </div>
                <strong class="text-on-surface text-headline-sm">${item.name}</strong>
                <p class="text-on-surface-variant font-body-sm text-body-sm mt-1">${new URL(item.href).hostname}</p>
                <span class="inline-flex items-center gap-1 text-primary font-semibold text-body-sm mt-2 group-hover:gap-2 transition-all">${item.label} &rarr;</span>
              </a>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

const testimonialItems = [
  {
    quote: 'Fast, clear, and easy to work with.',
    name: 'Rahim',
    role: 'Restaurant owner, Dhaka',
    initials: 'R',
  },
  {
    quote: 'They made the site feel premium without making it expensive.',
    name: 'Nusrat',
    role: 'Boutique owner, Chittagong',
    initials: 'N',
  },
  {
    quote: 'Our maintenance now feels organized instead of reactive.',
    name: 'Tanvir',
    role: 'Startup founder, Narayanganj',
    initials: 'T',
  },
];

function testimonialMarkup() {
  return `
    <div class="text-center mb-lg">
      <div class="inline-flex items-center gap-1.5 mb-3 text-primary font-label-sm tracking-widest uppercase">What our clients say</div>
      <h2>Trusted by growing businesses</h2>
    </div>
    <div class="max-w-4xl mx-auto relative overflow-hidden" id="testimonial-slider">
      <div class="testimonial-track flex transition-transform duration-500 ease-in-out">
        ${testimonialItems
          .map(
            (item) => `
              <div class="w-full flex-shrink-0 px-4">
                <div class="glass-card p-xl rounded-2xl relative text-center">
                  <span class="text-primary text-6xl absolute -top-6 left-12 bg-surface-container px-2" style="font-family: Georgia, serif; line-height: 1;">&#8220;</span>
                  <p class="text-headline-sm font-headline text-on-surface italic mb-lg">"${item.quote}"</p>
                  <div class="flex items-center justify-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center font-bold text-on-surface">${item.initials}</div>
                    <div class="text-left">
                      <div class="font-bold text-on-surface">${item.name}</div>
                      <div class="text-on-surface-variant font-body-sm">${item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            `,
          )
          .join('')}
      </div>
    </div>
    <div class="flex justify-center gap-4 mt-lg">
      <button class="w-12 h-12 rounded-full border border-outline-variant hover:bg-primary hover:border-primary transition-all flex items-center justify-center group" onclick="prevTestimonial()">
        <svg class="w-5 h-5 text-on-surface group-hover:text-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button class="w-12 h-12 rounded-full border border-outline-variant hover:bg-primary hover:border-primary transition-all flex items-center justify-center group" onclick="nextTestimonial()">
        <svg class="w-5 h-5 text-on-surface group-hover:text-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  `;
}

document.querySelectorAll('[data-site-header]').forEach((placeholder) => {
  placeholder.innerHTML = `
    <header class="site-header fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/30">
      <div class="site-header__inner flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <a class="brand inline-flex items-center gap-2" href="index.html">
          <span class="brand__mark inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-primary font-bold text-xl">B</span>
          <span class="font-headline text-headline-sm font-bold text-on-surface tracking-tight">Bettrix</span>
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

document.querySelectorAll('[data-site-testimonials]').forEach((placeholder) => {
  placeholder.innerHTML = testimonialMarkup();
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

// Testimonial slider logic
let currentTestimonial = 0;
const testimonialSliderTrack = document.querySelector('.testimonial-track');
const testimonialSlides = testimonialSliderTrack ? testimonialSliderTrack.querySelectorAll('div') : [];
const totalTestimonials = testimonialSlides.length;

function updateTestimonialSlider() {
  if (testimonialSliderTrack) {
    testimonialSliderTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
  }
}

window.nextTestimonial = function() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  updateTestimonialSlider();
};

window.prevTestimonial = function() {
  currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  updateTestimonialSlider();
};

if (totalTestimonials > 0) {
  setInterval(window.nextTestimonial, 8000);
}

// Mobile nav styles
const style = document.createElement('style');
style.textContent = `
  .site-nav {
    display: flex;
    align-items: center;
    gap: var(--spacing-md, 24px);
  }
  .nav-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--color-on-surface, #e0e3e5);
    cursor: pointer;
    padding: 8px;
  }
  .site-nav__panel {
    display: flex;
    align-items: center;
    gap: var(--spacing-md, 24px);
  }
  .site-nav__links {
    display: flex;
    align-items: center;
    gap: var(--spacing-md, 24px);
  }
  .site-nav__links a {
    color: var(--color-on-surface-variant, #c5c6cd);
    font-weight: 500;
    transition: color 300ms ease;
    font-family: "Plus Jakarta Sans", system-ui, sans-serif;
    font-size: 16px;
  }
  .site-nav__links a:hover,
  .site-nav__links a[aria-current="page"] {
    color: var(--color-primary, #bcc7de);
  }
  .nav-cta {
    background: var(--color-primary-container, #1e293b);
    color: var(--color-on-primary-container, #8590a6);
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    transition: all 200ms ease;
    font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  }
  .nav-cta:hover {
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    .nav-toggle {
      display: block;
    }
    .site-nav__panel {
      display: none;
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      background: rgba(16, 20, 21, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(69, 71, 76, 0.3);
      padding: 24px;
      flex-direction: column;
      align-items: flex-start;
    }
    .site-nav__links {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
    .nav-open .site-nav__panel {
      display: flex;
    }
  }
`;
document.head.appendChild(style);

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
