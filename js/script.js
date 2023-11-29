// Funzione che permette di creare la singola casella della griglia
function createCell (num) {
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText = num;

    return element;
}