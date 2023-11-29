function toggle() {
    let buttonContent = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');
    if (buttonContent.textContent === 'More') {
        buttonContent.textContent = 'Less';
        text.style.display = 'block';
    }
    else {
        buttonContent.textContent = 'More';
        text.style.display = 'none';
    }
}