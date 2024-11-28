document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('authErrorMessage');
    
    // Validación básica
    if (username === 'administrador' && password === '12345') {
        errorMessage.textContent = '';
        window.location.href = 'panel.html'; 
    } else {
        window.location.href = 'index.html'; 
    }
});

document.querySelector('.auth-google-login').addEventListener('click', function() {
    // autenticación de Google
    alert('Autenticando con Google...');
    window.location.href = 'panel.html';
});

document.querySelector('.auth-facebook-login').addEventListener('click', function() {
    // autenticación de Facebook
    alert('Autenticando con Facebook...');
    window.location.href = 'panel.html'; 
});
