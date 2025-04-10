const scrollContainer = document.querySelector('.scroll-container');

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    scrollContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  } else if (e.key === 'ArrowLeft') {
    scrollContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }
});
