const container = document.getElementById("container")

//Visualizzare in pagina 5 numeri casuali.
let randomNumberArray = [];
while (randomNumberArray.length < 5) {
    let newRandomNumber = Math.floor(Math.random() * 99) + 1;
    if (!randomNumberArray.includes(newRandomNumber)) {
        randomNumberArray.push(newRandomNumber);
        numberAppend(newRandomNumber);
    };
    
}

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout (function () {
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach(function(paragraphHide) {
        paragraphHide.classList.add("hide");
    });
    let guessNumbers = []
    for (let i = 0; i < 5; i++) {
        let newGuess = parseInt(prompt("Inserisci numeri singolarmente"));
        guessNumbers.push(newGuess);
    }    
    console.log(guessNumbers);

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
     for (let i = 0; i < 5; i++) {
        if (randomNumberArray[i]===guessNumbers[i]) {
            paragraphs.forEach(function(paragraphHide) {
                paragraphHide.classList.add("green");
            });
        } else {
            paragraphs.forEach(function(paragraphHide) {
                paragraphHide.classList.add("red");
            });
        }
        
     }
}, 3*1000)






//FUNZIONI

function numberAppend (number) {
    const newP = document.createElement("p");
    container.append(newP);
    newP.append(number);
}




