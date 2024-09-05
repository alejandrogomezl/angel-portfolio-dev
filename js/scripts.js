function openPage(url) {
    window.location.href = url;
}

// script.js

let screensaver;
let screensaverImage;
let xPos = 100, yPos = 100;
let xSpeed = 2, ySpeed = 2;
let maxX, maxY;
let moveInterval; // Variable para almacenar el identificador de setInterval

function moveImage() {
    xPos += xSpeed;
    yPos += ySpeed;

    // Cambiar dirección si toca los bordes
    if (xPos + screensaverImage.width >= maxX || xPos <= 0) {
        xSpeed = -xSpeed;
    }
    if (yPos + screensaverImage.height >= maxY || yPos <= 0) {
        ySpeed = -ySpeed;
    }

    // Actualizar la posición de la imagen
    screensaverImage.style.left = xPos + 'px';
    screensaverImage.style.top = yPos + 'px';
}

function showScreensaver() {
    // Mostrar el salvapantallas
    screensaver.style.display = 'flex';
    maxX = window.innerWidth;
    maxY = window.innerHeight;

    // Detener cualquier setInterval anterior
    if (moveInterval) {
        clearInterval(moveInterval);
    }

    // Crear un nuevo intervalo para mover la imagen
    moveInterval = setInterval(moveImage, 10); // Velocidad de movimiento
}

function hideScreensaver() {
    // Ocultar el salvapantallas y detener el movimiento
    screensaver.style.display = 'none';
    clearInterval(moveInterval); // Detiene el intervalo de movimiento
}

function resetTimer() {
    hideScreensaver(); // Ocultar el salvapantallas si está activo
    clearTimeout(screensaver.timer); // Limpiar el temporizador anterior
    screensaver.timer = setTimeout(showScreensaver, 60000); // 60 segundos
}

window.onload = () => {
    // Obtener el salvapantallas y la imagen
    screensaver = document.getElementById('screensaver');
    screensaverImage = screensaver.querySelector('img');

    // Agregar eventos para restablecer el temporizador del salvapantallas
    window.onmousemove = resetTimer;
    window.onkeypress = resetTimer;
    window.onscroll = resetTimer;
    window.onclick = resetTimer;

    // Iniciar el temporizador
    resetTimer(); 
}
