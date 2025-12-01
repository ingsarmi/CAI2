document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('particles-container');
    
    // Cantidad de partículas (ajustar según rendimiento)
    const particleCount = 45; 

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // 1. Posición horizontal aleatoria (0% a 100%)
        const leftPos = Math.random() * 100;
        particle.style.left = `${leftPos}%`;

        // 2. Tamaño aleatorio (Efecto Bokeh: algunas grandes, otras pequeñas)
        // Entre 4px y 12px
        const size = Math.random() * 8 + 4; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // 3. Duración aleatoria (Ritmo pausado y tecnológico)
        // Entre 10s y 25s
        const duration = Math.random() * 15 + 10; 
        particle.style.animationDuration = `${duration}s`;

        // 4. Retraso aleatorio (negativo para llenar pantalla al inicio)
        const delay = Math.random() * 20;
        particle.style.animationDelay = `-${delay}s`;

        // 5. Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.4 + 0.3;

        container.appendChild(particle);
    }
});