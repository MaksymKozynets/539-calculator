document.querySelectorAll('.calculator .digits button').forEach(button=>button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}
document.querySelectorAll('.calculator .operators button').forEach(button=>button.addEventListener('click', operatorPressed));
function operatorPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}
document.querySelector('.calculator .allclear button').addEventListener('click', clearPressed);
function clearPressed() {
    const display = document.querySelector('.display');
    display.value = " ";
}
document.querySelector('.calculator .clearone button').addEventListener('click', clearonePressed);
function clearonePressed() {
    const display = document.querySelector('.display');
    display.value = display.value.substring(display.value.lenght - 1);
}

document.querySelector('.calculator .eq').addEventListener('click', eqPressed);
function eqPressed() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}
