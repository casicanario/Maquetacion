// Navegación suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Configuración del observador para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos con la clase fade-in para animarlos
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Cambiar apariencia del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validación básica
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Simulación de envío exitoso
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Te responderé pronto a ${email}.`);
    
    // Limpiar formulario después del envío
    this.reset();
});

// Efectos adicionales en las tarjetas de tecnología
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Efecto de typing para el título principal (opcional)
function typeWriter(element, text, delay = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    
    type();
}

// Activar efecto typing cuando la página se carga completamente
window.addEventListener('load', function() {
    // Opcional: descomenta la siguiente línea si quieres efecto de typing
    // typeWriter(document.querySelector('#inicio h1'), '¡Hola! Soy [Tu Nombre]', 100);
});

// Función para detectar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Contador de animación para números (útil para estadísticas futuras)
function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Manejo de errores para imágenes (si las agregas más tarde)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.log('Error cargando imagen:', this.src);
    });
});

// Función para mostrar/ocultar menú en móvil (preparado para futuro)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Event listener para redimensionamiento de ventana
window.addEventListener('resize', function() {
    // Aquí puedes agregar lógica para manejar cambios de tamaño
    console.log('Ventana redimensionada:', window.innerWidth + 'x' + window.innerHeight);
});

// Función para scroll suave al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Prevenir comportamiento por defecto en links vacíos
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

console.log('🚀 Portfolio cargado correctamente!');
console.log('📧 Para contacto: Usa el formulario de la página');
console.log('💻 Desarrollado con HTML, CSS y JavaScript vanilla');