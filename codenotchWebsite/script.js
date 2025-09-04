// Función para mostrar/ocultar secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section, .landing');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Scroll suave hacia arriba
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para manejar el envío del formulario
function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Simulación de envío exitoso
    alert('¡Gracias por tu mensaje! Te contactaremos pronto para resolver tus dudas y ayudarte a elegir el curso perfecto para ti.');
    
    // Limpiar el formulario
    event.target.reset();
}

// Efecto de scroll suave para la navegación
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

// Inicializar mostrando la landing page
document.addEventListener('DOMContentLoaded', function() {
    showSection('landing');
});