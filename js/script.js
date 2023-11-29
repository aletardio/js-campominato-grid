// Creazione del pulsante che genera la griglia di gioco
const button = document.querySelector('#generate-button');
// Variabile di stato per verificare se la griglia è già stata generata
let gridGenerated = false; 
button.addEventListener('click', function() {
    // Se la griglia è già stata generata, esce dalla funzione
    if(gridGenerated) {
        return;
    }
    gridGenerated = true;

    // Ottiene il riferimento al contenitore della griglia
    const grid = document.getElementById('grid');
    
    // Definire un ciclo for per la realizzazione delle celle da 1 a 100
    for (let i=0; i<100; i++) {
        // Creazione della singola cella
        let square = createCell(i+1);
        // Al click la cella cambierà di colore e la console emette il numero della cella
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log(square);
        })
        // Appendo la cella alla griglia
        grid.appendChild(square);
    }
})

// Funzione che permette di creare la singola casella della griglia
function createCell (num) {

    
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText = num;
    
    
    return element;

}


