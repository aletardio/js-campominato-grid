// Creazione del pulsante e collegamento al DOM
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', createCell());

// Funzione che permette di creare la singola casella della griglia
function createCell (num) {
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText = num;

    return element;
}

// Recupero l'elemento che contiene la griglia
const grid = document.getElementById('grid');


// Definire un ciclo for per la realizzazione delle celle da 1 a 100
for (let i=0; i<100; i++) {
    // Creazione della singola cella
    let square = createCell(i+1);

    grid.appendChild(square);

}