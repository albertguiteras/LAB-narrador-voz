// Lab: Narrador de Voz con Web Speech API

const btnHablar = document.getElementById('btnHablar');
const btnParar = document.getElementById('btnParar');
const textoInput = document.getElementById('textoInput');

btnHablar.addEventListener('click', () => {
    const texto = textoInput.value.trim();
    if (texto !== '') {
        window.speechSynthesis.cancel(); // Cancelar anteriores
        const mensaje = new SpeechSynthesisUtterance(texto);
        mensaje.lang = 'es-ES';
        mensaje.rate = 1.0;
        window.speechSynthesis.speak(mensaje);
    }
});

btnParar.addEventListener('click', () => {
    window.speechSynthesis.cancel();
});
