let cart = [];

const productos = {
    libretas: [
        { nombre: 'Libreta 100 hojas, color verde', precio: 50, img: 'libreta1.jpg' },
        { nombre: 'Libreta 100 hojas, color amarillo', precio: 60, img: 'libreta2.jpg' },
        { nombre: 'Libreta 100 hojas, color azul', precio: 65, img: 'libreta3.jpg' },
    ],
    boligrafos: [
        { nombre: 'Bolígrafo tinta negra', precio: 10, img: 'boligrafonegro.jpeg' },
        { nombre: 'Bolígrafo tinta roja', precio: 12, img: 'boligraforojo.jpeg' },
        { nombre: 'Bolígrafo tinta azul', precio: 10, img: 'boligrafoazul.jpeg' },
    ],
    resaltadores: [
        { nombre: 'Resaltador amarillo', precio: 15, img: 'resaltador1.jpeg' },
        { nombre: 'Resaltador rosa', precio: 18, img: 'resaltador2.jpeg' },
        { nombre: 'Resaltador verde', precio: 18, img: 'resaltador3.jpeg' },
    ],
    carpetas: [
        { nombre: 'Carpeta blanca', precio: 15, img: 'carpeta1.jpeg' },
        { nombre: 'Carpeta azul', precio: 18, img: 'carpeta2.jpeg' },
        { nombre: 'Carpeta gris, con diseño', precio: 18, img: 'carpeta3.jpeg' },
    ],
    hojas: [
        { nombre: 'Hojas blancas (100)', precio: 15, img: 'hojasBlancas.jpeg' },
        { nombre: 'Hojas de color (100)', precio: 18, img: 'hojasColores.jpeg' },
        { nombre: 'Hojas para carpeta (100)', precio: 18, img: 'hojasCarpeta.jpeg' },
    ],
    cartulinas: [
        { nombre: 'Cartulina Blanca', precio: 15, img: 'cartulina1.jpg' },
        { nombre: 'Cartulina Morada', precio: 18, img: 'cartulina2.jpg' },
        { nombre: 'Cartulina Dorada', precio: 18, img: 'cartulina3.jpg' },
    ]
};

const carouselImages = [
    'pape.jpeg',  
    'carrusel3.jpeg'
];

let currentIndex = 0;

function showHome() {
    const container = document.getElementById('contenido');
    container.classList.add('hidden');

    setTimeout(() => {
        container.innerHTML = `
    <div id="inicio" class="flex-container">
        <div class="carousel-container">
            <div class="carousel">
                ${carouselImages.map((img, index) => 
                    `<img src="${img}" class="${index === 0 ? 'active' : ''}">`
                ).join('')}
            </div>
        </div>
        <div class="description">
            <h2>Bienvenido a Mi Papelería</h2>
            <p>Somos tu tienda de papelería online favorita, ofreciendo una amplia variedad de productos de alta calidad, desde libretas hasta bolígrafos y resaltadores. ¡Encuentra todo lo que necesitas para tus proyectos y estudios!</p>
        </div>
                <div class="products-container">
                    <div class="section" onclick="showCategory('libretas')">
                        <img src="libretas.jpeg" alt="Libretas">
                        <h3>Libretas</h3>
                        <p>Gran variedad de libretas para todos tus proyectos.</p>
                    </div>
                    <div class="section" onclick="showCategory('boligrafos')">
                        <img src="boligrafos.jpeg" alt="Bolígrafos">
                        <h3>Bolígrafos</h3>
                        <p>Bolígrafos de todos los colores y estilos.</p>
                    </div>
                    <div class="section" onclick="showCategory('resaltadores')">
                        <img src="resaltadores.jpeg" alt="Resaltadores">
                        <h3>Resaltadores</h3>
                        <p>Resalta lo importante con nuestros resaltadores.</p>
                    </div>
                    <div class="section" onclick="showCategory('carpetas')">
                        <img src="carpetas.jpeg" alt="Carpetas">
                        <h3>Carpetas</h3>
                        <p>Organiza tus documentos con nuestras carpetas.</p>
                    </div>
                    <div class="section" onclick="showCategory('hojas')">
                        <img src="hojas.jpeg" alt="Hojas">
                        <h3>Hojas</h3>
                        <p>Encuentra hojas para todas tus necesidades.</p>
                    </div>
                    <div class="section" onclick="showCategory('cartulinas')">
                        <img src="cartulinas.jpg" alt="Cartulinas">
                        <h3>Cartulinas</h3>
                        <p>Cartulinas de varios colores y tamaños.</p>
                    </div>
                </div>
            </div>
        `;
        container.classList.remove('hidden');

        startCarousel();
    }, 500);
}

function returnToMain() {
    showHome(); // Llama a la función showHome() para mostrar el menú principal
    return false; // Evita que el navegador siga el enlace
}

function showCategory(category) {
    const container = document.getElementById('contenido');
    container.classList.add('hidden');

    setTimeout(() => {
        container.innerHTML = `
            <div id="inicio">
                <div class="products-container">
                    ${productos[category].map(product => `
                        <div class="product">
                            <img src="${product.img}" alt="${product.nombre}">
                            <h3>${product.nombre}</h3>
                            <p>$${product.precio}</p>
                            <button onclick="addToCart('${category}', '${product.nombre}')">Añadir al Carrito</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.classList.remove('hidden');
        startCarousel();
    }, 300);
}

function addToCart(category, productName) {
    const product = productos[category].find(p => p.nombre === productName);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = cart.map((item, index) => `
        <div>
            <img src="${item.img}" alt="${item.nombre}" width="50">
            <span>${item.nombre} - $${item.precio}</span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        </div>
    `).join('');

    const total = cart.reduce((acc, item) => acc + item.precio, 0);
    cartTotal.innerHTML = `Total: $${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('hidden');
}

function startCarousel() {
    const images = document.querySelectorAll('.carousel img');
    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000);
}

function checkout() {
    alert(`Gracias por tu compra! El total es $${cart.reduce((acc, item) => acc + item.precio, 0)}`);
    cart = [];
    updateCart();
}

function showLogin() {
    const container = document.getElementById('contenido');
    container.classList.add('hidden');
    
    setTimeout(() => {
        container.innerHTML = `
            <div class="form-container">
                <h2>Iniciar Sesión</h2>
                <form onsubmit="login(event)">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required>
                    <p>¿Olvidaste tu contraseña? <span class="toggle-link" onclick="showRecuperar()">Recuperar Contraseña</span></p>
                    <button type="submit">Iniciar Sesión</button>
                </form>
                <p>¿No tienes una cuenta? <span class="toggle-link" onclick="showRegister()">Regístrate</span></p>
            </div>
        `;
        container.classList.remove('hidden');
    }, 300);
}

function showRegister() {
    const container = document.getElementById('contenido');
    container.classList.add('hidden');

    setTimeout(() => {
        container.innerHTML = `
            <div class="form-container">
                <h2>Registrarse</h2>
                <form onsubmit="register(event)">
                    <label for="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required>
                    <label for="profilePicture">Imagen de Perfil:</label>
                    <input type="file" id="profilePicture" name="profilePicture" accept="image/*">
                    <button type="submit">Registrarse</button>
                </form>
                <p>¿Ya tienes una cuenta? <span class="toggle-link" onclick="showLogin()">Inicia sesión</span></p>
            </div>
        `;
        container.classList.remove('hidden');
    }, 300);
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateNav();
        showHome();
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePictureInput = document.getElementById('profilePicture');
    let profilePicture = 'perfil.jpg';

    if (profilePictureInput.files.length > 0) {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
            profilePicture = event.target.result;
            saveUser(username, email, password, profilePicture);
            showLogin();
        };
        fileReader.readAsDataURL(profilePictureInput.files[0]);
    } else {
        saveUser(username, email, password, profilePicture);
        showLogin();
    }
}

function showProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const container = document.getElementById('contenido');
    container.classList.add('hidden');

    setTimeout(() => {
        container.innerHTML = `
            <div class="profile-container">
                <div class="profile-header">
                    <img src="${user.profilePicture}" alt="Foto de perfil" class="profile-picture">
                    <h2>${user.username}</h2>
                    <p>${user.email}</p>
                </div>
                <div class="profile-details">
                    <h3>Detalles del Perfil</h3>
                    <p><strong>Nombre de Usuario:</strong> ${user.username}</p>
                    <p><strong>Correo Electrónico:</strong> ${user.email}</p>
                </div>
                <div class="profile-actions">
                    <button onclick="logout()" class="btn-logout">Cerrar Sesión</button>
                </div>
            </div>
        `;
        container.classList.remove('hidden');
    }, 300);
}

function logout() {
    localStorage.removeItem('currentUser');
    updateNav();
    showHome();
}

function updateNav() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const profileLink = document.getElementById('profile-link');
    const loginLink = document.getElementById('login-link');

    if (currentUser) {
        profileLink.classList.remove('hidden');
        loginLink.classList.add('hidden');
    } else {
        profileLink.classList.add('hidden');
        loginLink.classList.remove('hidden');
    }
}

function saveUser(username, email, password, profilePicture) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { username, email, password, profilePicture };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

window.onload = function() {
    updateNav();
    showHome();
};

window.onload = showHome;
