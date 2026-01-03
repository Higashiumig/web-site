document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('h1');
    const paragraph = document.querySelector('p');

    // Set initial state for animation
    header.style.opacity = 0;
    paragraph.style.opacity = 0;

    // Use a small timeout to ensure the transition is applied after initial render
    setTimeout(() => {
        header.style.transition = 'opacity 1.5s ease-in-out';
        header.style.opacity = 1;
    }, 100);

    setTimeout(() => {
        paragraph.style.transition = 'opacity 1.5s ease-in-out 0.5s'; // Delay paragraph fade-in
        paragraph.style.opacity = 1;
    }, 100);
});
