document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('particles-container');
    const particleCount = 40; // Cantidad de datos flotando

    // Array de caracteres posibles (Binario + Matemáticas simples)
    const chars = ['0', '1', '1', '0', '+', '%']; 

    for (let i = 0; i < particleCount; i++) {
        createDataParticle(container);
    }

    function createDataParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // 1. ELEGIR EL CARÁCTER: Selecciona un símbolo al azar
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        particle.innerText = randomChar;

        // 2. Posición horizontal
        const leftPos = Math.random() * 100;
        particle.style.left = `${leftPos}%`;

        // 3. Tamaño de fuente variable (Profundidad)
        // Entre 10px y 24px
        const fontSize = Math.random() * 14 + 10; 
        particle.style.fontSize = `${fontSize}px`;
        
        // Si es muy pequeño, lo hacemos más transparente (está lejos)
        if (fontSize < 15) {
            particle.style.opacity = 0.4;
            particle.style.filter = "blur(1px)";
        } else {
            particle.style.opacity = 0.9;
        }

        // 4. Velocidad variable (Datos rápidos y lentos)
        const duration = Math.random() * 20 + 10; 
        particle.style.animationDuration = `${duration}s`;

        // 5. Retraso negativo para llenar la pantalla
        const delay = Math.random() * 30;
        particle.style.animationDelay = `-${delay}s`;

        container.appendChild(particle);
    }
});