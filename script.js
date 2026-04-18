// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // The form will submit to Formspree automatically
        console.log('Form submitted');
    });
}

// Highlight current navigation section on scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section[id]');
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = '#FD802E';
            }
        }
    });
});

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards, testimonial cards, and blog cards for animation
document.querySelectorAll('.service-slide, .testimonial-card, .blog-card, .step, .feature-item, .visual-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Services Carousel Functionality
const servicesCarousel = document.querySelector('.services-carousel');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

if (servicesCarousel && carouselPrev && carouselNext) {
    const scrollAmount = 320; // Width of one service slide + gap
    
    carouselPrev.addEventListener('click', () => {
        servicesCarousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    carouselNext.addEventListener('click', () => {
        servicesCarousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}

// Form validation helper
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!formData.email || !formData.email.includes('@')) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || formData.phone.trim().length < 10) {
        errors.push('Please enter a valid phone number');
    }
    
    if (!formData.service || formData.service === '') {
        errors.push('Please select a legal service');
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Please describe your case (at least 10 characters)');
    }
    
    if (!formData.consent) {
        errors.push('Please agree to the terms and confidentiality policy');
    }
    
    return errors;
}

// Enhanced form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
            consent: document.querySelector('input[name="consent"]').checked
        };
        
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            e.preventDefault();
            alert('Please fix the following errors:\n\n' + errors.join('\n'));
        }
    });
}

// Add smooth hover effects to service slides on desktop
if (window.innerWidth > 768) {
    const serviceSlides = document.querySelectorAll('.service-slide');
    serviceSlides.forEach(slide => {
        slide.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        slide.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}
