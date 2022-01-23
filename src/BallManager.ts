//genera palle
// con raggio differente
// con colore randomico
// con velocità randomica

import { Ball } from "./Ball";

export class BallManager {
  create(): Ball {
    var ball = new Ball();
    ball.radius = 10;
    ball.color = "red";
    ball.dx = 25;
    ball.dy = 25;
    ball.element = document.createElement("div");
    ball.element.style.backgroundColor = ball.color;
    ball.element.style.width = `${ball.radius}px`;
    ball.element.style.height = `${ball.radius}px`;
    ball.element.style.left = `${ball.dx}px`;
    ball.element.style.top = `${ball.dy}px`;
    ball.element.className += " ball";
    return ball;
  }

  insert(playground: HTMLCanvasElement, ball: Ball): HTMLDivElement {
    return playground.appendChild(ball.element);
  }
  
  draw(ball: Ball): void {
    this.move(ball, 10, 10);
    setTimeout(() => {
      this.draw(ball);
    }, 1000);    
  }
  
  delete(): void {
    
  }
  
  move(ball: Ball, dx: number, dy: number): void {
    ball.element.style.left = `${parseInt(ball.element.style.left) + dx}px`;    
    ball.element.style.top = `${parseInt(ball.element.style.top) + dx}px`;
  }
  
  changeDirection(ball: Ball, playground: HTMLCanvasElement, dx: number, dy: number): void {
    if (dx < 0 || dx > playground.width - ball.radius) {
      ball.dx = -ball.dx;
    }
    if (dy < 0 || dy > playground.width - ball.radius) {
      ball.dy = -ball.dy;
    }
  }
}
