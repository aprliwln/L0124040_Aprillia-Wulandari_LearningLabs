document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
});

function tombol() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
}
