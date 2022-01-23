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
    let currentPostionLeft: number = parseInt(ball.element.style.left);
    let currentPostionTop: number = parseInt(ball.element.style.top);
    let newDy: number = ball.dy;
    let newDx: number = ball.dx;
    
    this.move(ball, newDx, newDy, currentPostionLeft, currentPostionTop);
    this.changeDirection(playground, ball, currentPostionLeft, currentPostionTop);
    console.log("dopo il change");
    console.log(ball.dy);
    setTimeout(() => {
      this.draw(playground, ball);
    }, 100);
    console.log("dopo draw");
    console.log(ball.dy);    
  }
  
  delete(): void {
    
  }
  
  move(ball: Ball, dx: number, dy:number, currentPostionLeft: number, currentPostionTop: number): void {
    ball.element.style.left = `${currentPostionLeft + (dx)}px`;    
    ball.element.style.top = `${currentPostionTop + (dy)}px`;
    
  }
  
  changeDirection(playground: HTMLCanvasElement, ball: Ball, currentPostionLeft: number, currentPostionTop: number): void {

    if (currentPostionLeft < 0 || currentPostionLeft > playground.offsetWidth - ball.radius) {
      ball.dx = - (ball.dx);
    }
    if (currentPostionTop < 0 || currentPostionTop > playground.offsetHeight - ball.radius) {
      console.log("sei fuori dal canvas con questa posizione:");
      console.log("posizione:");
      console.log(currentPostionTop);
      console.log("grandezza del playgrond:");
      console.log(playground.offsetHeight - ball.radius);
      
      ball.dy = - (ball.dy);      
    }

  }
}
