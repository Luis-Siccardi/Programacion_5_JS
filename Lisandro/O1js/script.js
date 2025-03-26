document.addEventListener('DOMContentLoaded', () => {
    const colorbox = document.querySelector('.colorbox');

    const redBtn = document.getElementById('redBtn');
    const greenBtn = document.getElementById('greenBtn');
    const blueBtn = document.getElementById('blueBtn');

    redBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'red');
    greenBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'green');
    blueBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'blue');
});