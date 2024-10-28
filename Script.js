document.addEventListener('DOMContentLoaded', function() {
    // Cacher toutes les sections au chargement de la page
    hideAllSections();

    // Afficher la première section par défaut
    showSection('about');
});

// Fonction pour cacher toutes les sections
function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.transition = 'opacity 1s ease'; 
        section.style.opacity = '0';
        setTimeout(() => {
            section.style.display = 'none';
        }, 1000); 
    });
}

// Fonction pour afficher la section sélectionnée
function showSection(sectionId) {
    hideAllSections(); 

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        setTimeout(() => {
            selectedSection.style.display = 'block'; 
            setTimeout(() => {
                selectedSection.style.opacity = '1'; 
            }, 50); 
        }, 1000); 

        window.scrollTo({
            top: selectedSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }
}

// Fonction pour le bouton Retour en Haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Afficher le bouton Retour en Haut lors du défilement
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
