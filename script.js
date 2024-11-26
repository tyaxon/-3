function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje-secreto");
    mensaje.classList.toggle("oculto");
}

// Crear corazones animados
const heartsContainer = document.querySelector('.hearts');

function crearCorazon() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(crearCorazon, 500);
