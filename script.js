document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const close = document.querySelector('.close-lightbox');
    const recipeTitle = document.querySelector('.recipe-details h3');
    const recipeDesc = document.querySelector('.recipe-details p');

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
            
            const recipeInfo = image.closest('.recipe-card').querySelector('.recipe-info');
            recipeTitle.textContent = recipeInfo.querySelector('h3').textContent;
            recipeDesc.textContent = recipeInfo.querySelector('p').textContent;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
});
