console.log("PALLE");


// creo tabellone punteggio che parte da zero
    // il campo si incrementa al click di una palla
// creo pulsante reset punteggio
    //clicco il pulsante e il punteggio torna a zero
// creo pulsante inizio partita
    // Clicco un pulsante e parte la partita
        // genero delle palle
            // una ogni 0,5 secondi viene generata
            // con raggio differente
            // con colore randomico
            // con velocità randomica
        // le palle vengono generate in un campo di palle definito
        // al click della palla viene incrementato di uno il punto
// creo tabellone countdown
    // alla fine del count down il campo da gioco si svuota

    // const start = document.querySelector(".start");
    // start.addEventListener("click", function () {
    //     console.log("prova");  
    // });

    import { Ball } from "./Ball";
    import { BallManager } from "./BallManager";

    const myPlayground: HTMLCanvasElement = document.querySelector(".canvas");
    const ballManager: BallManager = new BallManager();
    const newBall: Ball = ballManager.create();
    ballManager.insert(myPlayground, newBall);
    ballManager.draw(newBall);
    
    