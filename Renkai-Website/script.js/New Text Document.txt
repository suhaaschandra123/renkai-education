document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rfForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather values for submission handling if hooked to an API later
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Trigger visual feedback success state
            feedback.textContent = `Thank you, ${name}. A strategic advisor will connect with you shortly at ${email}.`;
            feedback.classList.remove('hidden', 'error');
            feedback.classList.add('success');

            // Reset form input keys
            form.reset();
        });
    }
});