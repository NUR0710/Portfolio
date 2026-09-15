document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    const formData = new FormData(form);
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        const response = await fetch('https://formspree.io/f/xyezgzyv', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            formStatus.style.display = 'block';
            formStatus.style.background = '#d4edda';
            formStatus.style.color = '#155724';
            formStatus.innerHTML = `
                <h3 style="color: #7e57c2; margin-bottom: 0.5rem;">Thank You! 🎉</h3>
                <p>Your message has been sent successfully. I'll get back to you soon!</p>
            `;
            
            // Reset form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 8000);
        } else {
            // Show error message
            formStatus.style.display = 'block';
            formStatus.style.background = '#f8d7da';
            formStatus.style.color = '#721c24';
            formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
        }
    } catch (error) {
        // Show error message
        formStatus.style.display = 'block';
        formStatus.style.background = '#f8d7da';
        formStatus.style.color = '#721c24';
        formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});
