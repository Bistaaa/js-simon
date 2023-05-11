const container = document.getElementById("container")

//Visualizzare in pagina 5 numeri casuali.
let randomNumberArray = [];
while (randomNumberArray.length < 5) {
    let newRandomNumber = Math.floor(Math.random() * 99) + 1;
    if (!randomNumberArray.includes(newRandomNumber)) {
        randomNumberArray.push(newRandomNumber);
    };
    numberAppend();
}





//FUNZIONI

function numberAppend() {
    const newP = document.createElement("p");
    container.append(newP);
    const currentIndex = randomNumberArray.length - 1;
    newP.append(randomNumberArray[currentIndex]);
}












// Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
