document.addEventListener('DOMContentLoaded', () => {
    // Hide all sections on page load
    hideAllSections();

    // Show the first section by default
    showSection('about');

    // Add event listeners to navigation buttons
    addNavigationEventListeners();

    // Add event listener to the Back to Top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }

    // Show the Back to Top button on scroll with debounce
    window.addEventListener('scroll', debounce(handleScroll, 100));
});

// Function to hide all sections
const hideAllSections = () => {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
};

// Function to show the selected section
const showSection = (sectionId) => {
    hideAllSections();

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        window.scrollTo({
            top: selectedSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }
};

// Function to add event listeners to navigation buttons
const addNavigationEventListeners = () => {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const sectionId = event.currentTarget.dataset.section;
            showSection(sectionId);
        });
    });
};

// Function for the Back to Top button
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Handle scroll event
const handleScroll = () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
};

// Debounce function to limit the rate at which a function can fire
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};
