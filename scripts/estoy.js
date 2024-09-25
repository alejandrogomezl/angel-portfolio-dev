function showContent(type) {
    // Eliminar la clase 'active' de todos los botones
    const buttons = document.querySelectorAll('.selector-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Añadir la clase 'active' al botón seleccionado
    const selectedButton = document.querySelector(`[onclick="showContent('${type}')"]`);
    selectedButton.classList.add('active');

    // Selección de contenido dinámico
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpiar contenido anterior

    if (type === 'leyendo') {
        content.innerHTML = `
            <div class="item"><img src="../assets/img/libro1.png" alt="Los Renglones Torcidos de Dios"><p>Los Renglones Torcidos de Dios</p><p>Torcuato Luca de Tena</p></div>
            <div class="item"><img src="../assets/img/libro2.png" alt="Agujeros Negros"><p>Agujeros Negros</p><p>Marcia Bartusiak</p></div>
            <div class="item"><img src="../assets/img/libro3.png" alt="Los Agujeros Negros"><p>Los Agujeros Negros</p><p>Antxon Alberdi</p></div>
            <div class="item"><img src="../assets/img/libro4.png" alt="El Japón de Hokusai"><p>El Japón de Hokusai</p><p>Suso Mourelo</p></div>
            <div class="item"><img src="../assets/img/libro5.png" alt="Agujeros Negros y Tiempo Curvo"><p>Agujeros Negros y Tiempo Curvo</p><p>Kip S. Thorne</p></div>
            <div class="item"><img src="../assets/img/libro6.png" alt="Virgil Abloh. Nike. Icons"><p>Virgil Abloh. Nike. Icons</p><p>Virgil Abloh</p></div>
        `;
    } else if (type === 'escuchando') {
        content.innerHTML = `
            <div class="item"><img src="../assets/img/disco1.png" alt="Timelezz"><p>Timelezz</p><p>Jhayco</p></div>
            <div class="item"><img src="../assets/img/disco2.png" alt="Balearico"><p>Balearico</p><p>Rels B</p></div>
            <div class="item"><img src="../assets/img/disco3.png" alt="The Wild Project"><p>The Wild Project</p><p>Jordi Wild</p></div>
            <div class="item"><img src="../assets/img/disco4.png" alt="ATE"><p>ATE</p><p>Stray Kids</p></div>
            <div class="item"><img src="../assets/img/disco5.png" alt="att"><p>att</p><p>Young Miko</p></div>
            <div class="item"><img src="../assets/img/disco6.png" alt="NSLQVAPM"><p>NSLQVAPM</p><p>Bad Bunny</p></div>
        `;
    } else if (type === 'jugando') {
        content.innerHTML = `
            <div class="item"><img src="../assets/img/pc.png" alt="Dave the Diver"><p>Dave the Diver</p><p>Mintrocket / Nexon</p></div>
            <div class="item"><img src="../assets/img/switch.png" alt="Tears of the Kingdom"><p>Tears of the Kingdom</p><p>Nintendo</p></div>
            <div class="item"><img src="../assets/img/pc.png" alt="Pokémon Púrpura"><p>Pokémon Púrpura</p><p>Game Freak</p></div>
            <div class="item"><img src="../assets/img/switch.png" alt="Overwatch 2"><p>Overwatch 2</p><p>Blizzard Entertainment</p></div>
            <div class="item"><img src="../assets/img/pc.png" alt="It Takes Two"><p>It Takes Two</p><p>Hazelight Studios</p></div>
            <div class="item"><img src="../assets/img/switch.png" alt="Animal Crossing New Horizons"><p>Animal Crossing New Horizons</p><p>Nintendo</p></div>
        `;
    }
}
