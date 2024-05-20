const scrollingContainer = document.querySelector('.scrolling-container');

scrollingContainer.addEventListener('mouseenter', () => {
    scrollingContainer.style.animationPlayState = 'paused';
});

scrollingContainer.addEventListener('mouseleave', () => {
    scrollingContainer.style.animationPlayState = 'running';
});
