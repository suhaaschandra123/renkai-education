document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('submissionMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            
            msg.textContent = `Thank you, ${name}. Your request has been logged into the Renkai Education network.`;
            msg.classList.remove('hidden');
            msg.classList.add('success');
            
            form.reset();
        });
    }
});