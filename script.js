// ===========================
// Google Forms + WhatsApp Configuration
// ===========================
// SETUP INSTRUCTIONS:
// 1. Create a Google Form with these fields (in order):
//    - Full Name (Short answer)
//    - Email Address (Short answer)
//    - Phone / WhatsApp Number (Short answer)
//    - Legal Service Required (Dropdown: Family Law Services, Property Legal Services, Legal Notice & Documentation, Criminal Law Services, Other Legal Services)
//    - Case Details (Paragraph)
// 2. Click the 3-dot menu → Get pre-filled link → fill dummy data → Get link
// 3. From the pre-filled URL, copy the entry IDs (e.g. entry.123456789)
// 4. Replace the GOOGLE_FORM_URL and ENTRY_IDs below
// 5. In Google Forms → Settings → enable "Get email notifications for new responses"
//    (This sends an email to your Gmail automatically for every submission)

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeTdnLSAJe4vlvZ51f88ZqYSm9TJB1rzfJvfXetn-XYCBgVvw/formResponse';
const ENTRY_NAME    = 'entry.336161311';
const ENTRY_EMAIL   = 'entry.2011769021';
const ENTRY_PHONE   = 'entry.1539032013';
const ENTRY_SERVICE = 'entry.2128844983';
const ENTRY_MESSAGE = 'entry.1376411838';

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===========================
// Form Validation
// ===========================
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

    return errors;
}

// ===========================
// Google Form Submission
// ===========================
function submitToGoogleForm(formData) {
    const params = new URLSearchParams();
    params.append(ENTRY_NAME, formData.name);
    params.append(ENTRY_EMAIL, formData.email);
    params.append(ENTRY_PHONE, formData.phone);
    params.append(ENTRY_SERVICE, formData.service);
    params.append(ENTRY_MESSAGE, formData.message);

    return fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
    });
}

// ===========================
// Form Submission Handler
// ===========================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        const consent = document.querySelector('input[name="consent"]').checked;
        if (!consent) {
            alert('Please agree to the terms and confidentiality policy.');
            return;
        }

        const errors = validateForm(formData);
        if (errors.length > 0) {
            alert('Please fix the following:\n\n' + errors.join('\n'));
            return;
        }

        // Disable button while sending
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Submit to Google Form (saves to Google Sheets + triggers WhatsApp & email via Apps Script)
        submitToGoogleForm(formData)
            .then(function () {

                // Show success
                submitBtn.textContent = '✓ Sent Successfully!';
                submitBtn.style.background = '#27ae60';
                contactForm.reset();

                // Reset button after 4 seconds
                setTimeout(function () {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Your Query';
                    submitBtn.style.background = '';
                }, 4000);
            })
            .catch(function (error) {
                console.error('Google Form error:', error);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Your Query';
                alert('Something went wrong. Please try again or contact us directly at mohanalawfirm@gmail.com');
            });
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
