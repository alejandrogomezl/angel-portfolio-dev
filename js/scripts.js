function openPage(url) {
    window.location.href = url;
}

// script.js

let screensaver;
let screensaverImage;
let xPos = 100, yPos = 100;
let xSpeed = 2, ySpeed = 2;
let maxX, maxY;

function moveImage() {
    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos + screensaverImage.width >= maxX || xPos <= 0) {
        xSpeed = -xSpeed;
    }
    if (yPos + screensaverImage.height >= maxY || yPos <= 0) {
        ySpeed = -ySpeed;
    }

    screensaverImage.style.left = xPos + 'px';
    screensaverImage.style.top = yPos + 'px';
}

function showScreensaver() {
    screensaver.style.display = 'flex';
    maxX = window.innerWidth;
    maxY = window.innerHeight;
    setInterval(moveImage, 10); // Velocidad de movimiento
}

function resetTimer() {
    screensaver.style.display = 'none';
    clearTimeout(screensaver.timer);
    screensaver.timer = setTimeout(showScreensaver, 60000); // 30 segundos de inactividad
}

window.onload = () => {
    screensaver = document.getElementById('screensaver');
    screensaverImage = screensaver.querySelector('img');
    window.onmousemove = resetTimer;
    window.onkeypress = resetTimer;
    window.onscroll = resetTimer;
    window.onclick = resetTimer;
    resetTimer(); // Iniciar el temporizador
}
