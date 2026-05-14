document.querySelectorAll('[data-video="background"]').forEach((video) => {
  const fallback = video.closest('[data-video-wrapper]')?.querySelector('[data-video-fallback]');
  
  if (!fallback) return;

  video.play().catch(() => {
    fallback.style.visibility = 'visible';
  });
});