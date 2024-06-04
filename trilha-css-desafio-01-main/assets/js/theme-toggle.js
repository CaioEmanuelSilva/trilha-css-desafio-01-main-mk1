/**
 * Represents the theme toggle element.
 * @type {HTMLElement}
 */
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
    let root = document.documentElement;

    if (root.style.getPropertyValue('--background-color') === 'white') {
        root.style.setProperty('--background-color', '#333');
        root.style.setProperty('--text-color', '#f8f9fa');
        root.style.setProperty('--logo-bg-color', '#444');
        root.style.setProperty('--logo-text-color', '#f8f9fa');
        root.style.setProperty('--logo-border-color', '#007bff');
        // Defina as outras variáveis do modo escuro aqui
    } else {
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--logo-bg-color', '#333');
        root.style.setProperty('--logo-text-color', '#000000');
        root.style.setProperty('--logo-border-color', '#007bff');
        // Defina as outras variáveis do modo claro aqui
    }
});