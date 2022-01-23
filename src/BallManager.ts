//genera palle
// con raggio differente
// con colore randomico
// con velocità randomica

import { Ball } from "./Ball";

export class BallManager {
  create(dx: number, dy: number): Ball {
    var ball = new Ball();
    ball.radius = 40;
    ball.color = "red";
    ball.dx = dx;
    ball.dy = dy;
    ball.element = document.createElement("div");
    ball.element.style.backgroundColor = ball.color;
    ball.element.style.width = `${ball.radius}px`;
    ball.element.style.height = `${ball.radius}px`;
    ball.element.className += " ball";
    return ball;
  }
  
  insert(playground: HTMLCanvasElement, ball: Ball): HTMLDivElement {
    ball.element.style.left = `5px`;    
    ball.element.style.top = `7px`;
    return playground.appendChild(ball.element);
  }
  
  draw(playground: HTMLCanvasElement, ball: Ball): void {

    console.log("inizio draw");
    
    console.log(ball.dx);
    console.log(ball.dy);
    
    
    this.move(ball, ball.dx, ball.dy , parseInt(ball.element.style.left), parseInt(ball.element.style.top));
    this.changeDirection(playground, ball, parseInt(ball.element.style.left), parseInt(ball.element.style.top));
    setTimeout(() => {
      this.draw(playground, ball);
    }, 1000 / 60);  
  }
  
  delete(): void {
    
  }
  
  move(ball: Ball, dx: number, dy:number, currentPostionLeft: number, currentPostionTop: number): void {
    console.log("Prima di move");
    console.log(ball.dx);
    console.log(ball.dy);
    
    ball.element.style.left = `${currentPostionLeft + (dx)}px`;    
    ball.element.style.top = `${currentPostionTop + (dy)}px`;

    console.log("dopo di move");
    console.log(ball.dx);
    console.log(ball.dy);

  }
  
  changeDirection(playground: HTMLCanvasElement, ball: Ball, currentPostionLeft: number, currentPostionTop: number): void {

    console.log("Prima di change");
    console.log(ball.dx);
    console.log(ball.dy);
    if (currentPostionLeft < 0 || currentPostionLeft > (playground.offsetWidth - ball.radius)) {
      console.log("entro per cambiare il dx");
      ball.dx = -ball.dx;
    }
    if (currentPostionTop < 0 || currentPostionTop > (playground.offsetHeight - ball.radius)) {
      console.log("entro per cambiare il dy");
      console.log("la position: top attuale è questa:");
      console.log(currentPostionTop);
      console.log("la grandezza in altezza del canvas è questa");
      console.log(playground.offsetHeight - ball.radius);
      console.log(`Pertanto se sono entrato dentro qui questo numero ${currentPostionTop} è piu grande di questo ${playground.offsetHeight - ball.radius}`);
      ball.dy = -ball.dy;      
    }

    console.log("dopo di change");
    console.log(ball.dx);
    console.log(ball.dy);

  }
}
