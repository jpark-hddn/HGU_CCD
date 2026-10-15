/* Intro interactions. No dependencies; the original HTML remains the source.
   Edit these values to tune the prototype without changing layout styles. */
(() => {
  const MOTION = Object.freeze({
    revealDuration: 1000,                       // milliseconds per line
    lineStagger: 70,                            // milliseconds between lines
    blockStagger: 100,                          // title → English → Korean
    revealEasing: 'cubic-bezier(.22, 1, .36, 1)',
    revealThreshold: 0.08,
    scrollStrength: 0.25,                       // background travels at 75% speed
    mobileBreakpoint: 1023,
  });

  const root = document.documentElement;
  const shell = document.querySelector('.site-shell');
  const scene = document.querySelector('[data-intro-scene]');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const texts = [...document.querySelectorAll('[data-reveal]')].map((element, index) => ({
    element,
    originalHTML: element.innerHTML,
    accessibleText: element.innerText.replace(/\s+/g, ' ').trim(),
    delay: index * MOTION.blockStagger,
    revealed: false,
    timer: 0,
  }));
  if (!scene || !texts.length) return;

  let observer;
  let frame = 0;
  let layoutFrame = 0;
  let lastWidth = 0;
  let sceneTop = 0;
  let sceneBottom = 0;
  let scrollStart = 0;
  let shift = 0;
  let ready = false;

  /* Measure the browser's real lines after fonts load. Character ranges preserve
     the existing font, kerning, wrapping and underline across every viewport. */
  function measureLines(element) {
    const lines = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const range = document.createRange();
    let node;
    while ((node = walker.nextNode())) {
      const underlined = Boolean(node.parentElement.closest('.about-title-underlined'));
      let offset = 0;
      for (const character of node.textContent) {
        range.setStart(node, offset);
        offset += character.length;
        range.setEnd(node, offset);
        const rect = range.getBoundingClientRect();
        if (!rect.width || !rect.height) continue; // collapsed whitespace
        let line = lines.at(-1);
        if (!line || Math.abs(line.top - rect.top) > 2) {
          line = { top: rect.top, parts: [] };
          lines.push(line);
        }
        const previous = line.parts.at(-1);
        if (previous && previous.underlined === underlined) previous.text += character;
        else line.parts.push({ text: character, underlined });
      }
    }
    return lines;
  }

  function restoreText(state) {
    clearTimeout(state.timer);
    state.element.classList.remove('motion-text', 'is-revealing', 'is-revealed');
    state.element.innerHTML = state.originalHTML;
  }

  function prepareText(state) {
    restoreText(state);
    const { element } = state;
    const lines = measureLines(element);
    const fragment = document.createDocumentFragment();
    const accessible = document.createElement('span');
    accessible.className = 'motion-text-accessible';
    accessible.textContent = state.accessibleText;
    fragment.append(accessible);

    lines.forEach((line, index) => {
      const mask = document.createElement('span');
      const inner = document.createElement('span');
      mask.className = 'motion-line-mask';
      mask.setAttribute('aria-hidden', 'true');
      inner.className = 'motion-line-inner';
      inner.style.setProperty('--line-index', index);
      line.parts.forEach((part) => {
        const content = document.createElement('span');
        if (part.underlined) content.className = 'about-title-underlined';
        content.textContent = part.text;
        inner.append(content);
      });
      mask.append(inner);
      fragment.append(mask);
    });

    element.replaceChildren(fragment);
    element.style.setProperty('--reveal-duration', `${MOTION.revealDuration}ms`);
    element.style.setProperty('--line-stagger', `${MOTION.lineStagger}ms`);
    element.style.setProperty('--reveal-delay', `${state.delay}ms`);
    element.style.setProperty('--reveal-easing', MOTION.revealEasing);
    element.classList.add('motion-text');
    if (state.revealed) element.classList.add('is-revealed');
    else observer.observe(element);
  }

  function revealText(state) {
    if (state.revealed) return;
    state.revealed = true;
    state.element.classList.add('is-revealing');
    observer.unobserve(state.element);
    const count = state.element.querySelectorAll('.motion-line-mask').length;
    state.timer = setTimeout(() => {
      state.element.classList.replace('is-revealing', 'is-revealed');
    }, state.delay + MOTION.revealDuration + Math.max(0, count - 1) * MOTION.lineStagger);
  }

  /* Normal scrolling is retained. The next white section paints above this
     translated scene; no wheel interception, scroll snapping or extra height. */
  function updateScroll() {
    frame = 0;
    if (reduceMotion.matches) return;
    const travel = Math.max(0, Math.min(scrollY - scrollStart, sceneBottom - scrollStart));
    shift = travel * MOTION.scrollStrength;
    scene.style.transform = `translate3d(0, ${shift.toFixed(3)}px, 0)`;
  }

  function scheduleScroll() {
    if (!frame && ready && !reduceMotion.matches) frame = requestAnimationFrame(updateScroll);
  }

  function refreshLayout() {
    layoutFrame = 0;
    if (!ready || reduceMotion.matches) return;
    const width = shell.getBoundingClientRect().width;
    if (width !== lastWidth) {
      observer.disconnect();
      texts.forEach(prepareText);
      lastWidth = width;
    }
    sceneTop = scene.getBoundingClientRect().top + scrollY - shift;
    sceneBottom = sceneTop + scene.offsetHeight;
    // Let the long mobile introduction enter the screen before applying overlap.
    const isMobile = matchMedia(`(max-width: ${MOTION.mobileBreakpoint}px)`).matches;
    scrollStart = isMobile
      ? Math.max(sceneTop, sceneBottom - innerHeight)
      : sceneTop;
    updateScroll();
  }

  function scheduleLayout() {
    if (!layoutFrame) layoutFrame = requestAnimationFrame(refreshLayout);
  }

  function syncMotionPreference() {
    observer?.disconnect();
    cancelAnimationFrame(frame);
    frame = 0;
    shift = 0;
    scene.style.removeProperty('transform');
    root.classList.toggle('motion-enabled', !reduceMotion.matches);
    if (reduceMotion.matches) texts.forEach(restoreText);
    else { lastWidth = 0; refreshLayout(); }
    root.classList.remove('motion-loading');
  }

  if (!reduceMotion.matches) root.classList.add('motion-loading');
  // Fail open if a font stalls: the original readable text is always available.
  const loadingFallback = setTimeout(() => root.classList.remove('motion-loading'), 4000);
  document.fonts.ready.then(() => {
    observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
        const state = texts.find((text) => text.element === entry.target);
        if (state) revealText(state);
      });
    }, { threshold: MOTION.revealThreshold });
    ready = true;
    syncMotionPreference();
    new ResizeObserver(scheduleLayout).observe(shell);
    addEventListener('resize', scheduleLayout, { passive: true });
    addEventListener('scroll', scheduleScroll, { passive: true });
    reduceMotion.addEventListener('change', syncMotionPreference);
    clearTimeout(loadingFallback);
  }).catch(() => {
    texts.forEach(restoreText);
    root.classList.remove('motion-loading', 'motion-enabled');
    scene.style.removeProperty('transform');
  });
})();
