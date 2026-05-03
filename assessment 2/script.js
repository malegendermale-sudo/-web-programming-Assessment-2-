// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// Package budget filter on packages.html
const budgetFilter = document.getElementById('budgetFilter');
const packageCards = document.querySelectorAll('#packageList .card');

if (budgetFilter && packageCards.length > 0) {
    budgetFilter.addEventListener('change', () => {
        const value = budgetFilter.value;

        packageCards.forEach(card => {
            const budget = card.getAttribute('data-budget');
            const show = value === 'all' || budget === value;
            card.style.display = show ? 'block' : 'none';
        });
    });
}

// Fake "Book Now" buttons on package pages
const bookButtons = document.querySelectorAll('.js-book-button');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('This is a prototype. In a real site, this would start the booking process for your ruins holiday from the UAE.');
    });
});

// Fake contact form submit
const contactSubmit = document.querySelector('.js-contact-submit');

if (contactSubmit) {
    contactSubmit.addEventListener('click', () => {
        alert('Message sent (prototype). In a real site, this would send your enquiry from the UAE to Holidae.');
    });
}
