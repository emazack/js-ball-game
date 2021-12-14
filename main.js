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

    const start = document.querySelector(".start");
    start.addEventListener("click", function () {
        generateBall();  
    })
    
    
    function generateBall() {
        let ball = new Ball(100, 100, "#000000");
        console.log(ball);
    }

    class Ball {
        constructor(height, width, color) {
          this.height = height;
          this.width = width;
          this.color = color;
        }
      }