// Simple script logic to ensure everything loads smoothly
document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = document.getElementById('email').value;
            // Native log entry, standard form prevention.
            console.log('Submitted email: ', emailValue);
            alert('This is a replica! Navigation to normal backend flow is prevented during local test.');
        });
    }
});
