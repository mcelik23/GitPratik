// This file contains the JavaScript code for the simple website.
// It handles interactivity and dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const buttonElement = document.getElementById('greetButton');

    buttonElement.addEventListener('click', () => {
        greetingElement.textContent = 'Hello, welcome to the simple website!';
    });
});