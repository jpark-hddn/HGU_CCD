/* Shared navigation. No framework or build step is required. */
(() => {
  const config = window.CCD_SITE;
  document.querySelectorAll('[data-site-link]').forEach((link) => {
    const destination = config.links[link.dataset.siteLink];
    if (!destination) return;
    link.href = destination;
    link.removeAttribute('aria-disabled');
    if (/^https?:/.test(destination)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  function closeMenu(restoreFocus = false) {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '메뉴 열기');
    if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    menu.hidden = !open;
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a[href]')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
  });
  document.addEventListener('click', (event) => {
    if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
})();
