/* Home page: responsive video, exhibition carousel . */
(() => {
  const video = document.querySelector('.hero-video');
  const videoToggle = document.querySelector('.video-toggle');
  const mobile = matchMedia('(max-width: 1023px)');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  function updatePlaybackButton() {
    videoToggle.textContent = video.paused ? 'Play' : 'Pause';
    videoToggle.setAttribute('aria-label', video.paused ? '배너 영상 재생' : '배너 영상 일시정지');
  }
  function setVideo() {
    const variant = mobile.matches ? 'mobile' : 'desktop';
    video.poster = video.dataset[variant + 'Poster'];
    video.src = video.dataset[variant + 'Src'];
    video.load();
    if (!reduceMotion.matches && !userPaused) video.play().catch(updatePlaybackButton);
    else video.pause();
  }
  videoToggle.addEventListener('click', () => {
    userPaused = !video.paused;
    if (userPaused) video.pause();
    else video.play().catch(updatePlaybackButton);
  });
  video.addEventListener('play', updatePlaybackButton);
  video.addEventListener('pause', updatePlaybackButton);
  mobile.addEventListener('change', setVideo);
  reduceMotion.addEventListener('change', setVideo);
  setVideo();

  const carousel = document.querySelector('.exhibition-carousel');
  let drag = null;
  carousel.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX, scroll: carousel.scrollLeft };
    carousel.setPointerCapture(event.pointerId);
    carousel.classList.add('is-dragging');
  });
  carousel.addEventListener('pointermove', (event) => {
    if (drag) carousel.scrollLeft = drag.scroll - (event.clientX - drag.x);
  });
  function stopDrag() { drag = null; carousel.classList.remove('is-dragging'); }
  carousel.addEventListener('pointerup', stopDrag);
  carousel.addEventListener('pointercancel', stopDrag);
  carousel.addEventListener('dragstart', (event) => event.preventDefault());
  carousel.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowLeft' ? -1 : 1;
    const left = event.key === 'Home' ? 0 : event.key === 'End' ? carousel.scrollWidth : carousel.scrollLeft + direction * carousel.clientWidth * .65;
    carousel.scrollTo({ left, behavior: reduceMotion.matches ? 'instant' : 'smooth' });
  });

})();
