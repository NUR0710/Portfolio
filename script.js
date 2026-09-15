// 1. CONTACT FORM HANDLER 
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    const formData = new FormData(form);
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        const response = await fetch('https://formspree.io/f/xyezgzyv', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            formStatus.style.display = 'block';
            formStatus.style.background = '#d4edda';
            formStatus.style.color = '#155724';
            formStatus.innerHTML = `<h3 style="color: #7e57c2; margin-bottom: 0.5rem;">Thank You! 🎉</h3><p>Your message has been sent successfully. I'll get back to you soon!</p>`;
            form.reset();
            setTimeout(() => { formStatus.style.display = 'none'; }, 8000);
        } else {
            formStatus.style.display = 'block';
            formStatus.style.background = '#f8d7da';
            formStatus.style.color = '#721c24';
            formStatus.textContent = 'Oops! There was a problem. Please try again.';
        }
    } catch (error) {
        formStatus.style.display = 'block';
        formStatus.style.background = '#f8d7da';
        formStatus.style.color = '#721c24';
        formStatus.textContent = 'Oops! There was a problem. Please try again.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});

// 2. SCROLL ANIMATIONS 
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});
// 3. SCROLL TO TOP BUTTON
const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
