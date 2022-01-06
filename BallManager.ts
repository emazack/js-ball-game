 //genera palle
    // con raggio differente
    // con colore randomico
    // con velocità randomica

 export class BallManager {

    createBall() : Ball {
        var response = new Ball();
        response.radius = 10;
        response.color = "red";
        response.dx = 5;
        response.dy = 5;
        return response;
    }

    drawBaal() : void {

    }

    moveBall() : void {

    }

    changeDirection() : void {
        
    }

    deleteBall() : void {

    }
}