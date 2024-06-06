document.addEventListener('DOMContentLoaded', (event) => {
    const signInButton = document.getElementById('signInButton');
    const signInModal = document.getElementById('signInModal');
    const closeButton = document.querySelector('.close-button');

    signInButton.addEventListener('click', (event) => {
        event.preventDefault();
        signInModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        signInModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
    });
});
