document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');

    setTimeout(() => {
        heroTitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        heroSubtitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 600);
});
