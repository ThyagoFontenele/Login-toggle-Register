const container = document.querySelector('.forms');
const body = document.querySelector('body');
function ToggleForm() {
    body.classList.toggle('active');
    container.classList.toggle('active');
}