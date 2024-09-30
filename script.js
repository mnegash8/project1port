// Select all sections
const sections = document.querySelectorAll('.scroll-section');

// Function to check if a section is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 &&
           rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to add the 'show' class to sections in the viewport
function handleScroll() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('show');
        }
    });
}

// Listen for scroll events and call the handleScroll function
window.addEventListener('scroll', handleScroll);

// Initial call to handleScroll to show the first section
handleScroll();
