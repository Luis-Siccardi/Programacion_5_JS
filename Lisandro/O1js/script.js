/*document.addEventListener('DOMContentLoaded', () => {
    const colorbox = document.querySelector('.colorbox');

    const redBtn = document.getElementById('redBtn');
    const greenBtn = document.getElementById('greenBtn');
    const blueBtn = document.getElementById('blueBtn');

    redBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'red');
    greenBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'green');
    blueBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'blue');
});*/
document.addEventListener('DOMContentLoaded', () => {
    const colorbox = document.querySelector('.colorbox');
    const colorPicker = document.getElementById('colorPicker');
    const redBtn = document.getElementById('redBtn');
    const greenBtn = document.getElementById('greenBtn');
    const blueBtn = document.getElementById('blueBtn');
    
    const views = document.querySelectorAll('.view');

    redBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'red');
    greenBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'green');
    blueBtn.addEventListener('click', () => colorbox.style.backgroundColor = 'blue');

    colorPicker.addEventListener('input', (e) => {
        const selectedColor = e.target.value;
        colorbox.style.backgroundColor = selectedColor; // Cambia el color del colorbox
        views.forEach(view => {
            view.style.backgroundColor = selectedColor; // Cambia el color de las vistas
        });
    });
});

