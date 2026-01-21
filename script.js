const titulo = document.querySelector('h1');
const texto = titulo.innerText;
titulo.innerText = '';

let i = 0;
function escribir() {
    if (i < texto.length) {
        titulo.innerText += texto.charAt(i);
        i++;
        setTimeout(escribir, 150); // Velocidad de escritura
    }
}

// Añade esto a tu script.js
window.addEventListener('load', () => {
    const status = document.querySelector('.status-text');
    if (status) {
        setTimeout(() => {
            status.innerText = "// STATUS: SYSTEM_ONLINE";
        }, 2000); // Cambia después de 2 segundos
    }
});

window.onload = escribir;