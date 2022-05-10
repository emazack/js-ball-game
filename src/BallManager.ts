//genera palle
// con raggio differente
// con colore randomico
// con velocità randomica

import { Ball } from "./Ball";
import { GameModeManager } from "./GameModeManager";

const gameModeManager: GameModeManager = new GameModeManager();


export class BallManager {
  create(dx: number, dy: number): Ball {
    var ball = new Ball();
    ball.radius = this.randomRadius();
    ball.color = this.randomColors();
    ball.dx = dx;
    ball.dy = dy;
    ball.element = document.createElement("div");
    ball.element.style.backgroundColor = ball.color;
    ball.element.style.width = `${ball.radius}px`;
    ball.element.style.height = `${ball.radius}px`;
    ball.element.className += " ball";
    return ball;
  }
  
  click(ball: Ball): void {
    ball.element.addEventListener("click", (): void => {
      this.delete(ball);
    })
  }
  
  insert(playground: HTMLCanvasElement, ball: Ball): HTMLDivElement {
    ball.element.style.left = `1px`;    
    ball.element.style.top = `10px`;
    return playground.appendChild(ball.element);
  }
  
  draw(playground: HTMLCanvasElement, ball: Ball): void {    
    this.move(ball, ball.dx, ball.dy , parseInt(ball.element.style.left), parseInt(ball.element.style.top));
    this.changeDirection(playground, ball, parseInt(ball.element.style.left), parseInt(ball.element.style.top));
    setTimeout(() => {
      this.draw(playground, ball);
    }, 1000 / 60);  
  }
  
  delete(ball: Ball): void {
    ball.element.remove();
  }
  
  move(ball: Ball, dx: number, dy:number, currentPostionLeft: number, currentPostionTop: number): void {
    ball.element.style.left = `${currentPostionLeft + (dx)}px`;    
    ball.element.style.top = `${currentPostionTop + (dy)}px`;
  }
  
  changeDirection(playground: HTMLCanvasElement, ball: Ball, currentPostionLeft: number, currentPostionTop: number): void {
    if (currentPostionLeft < 0 || currentPostionLeft > (playground.offsetWidth - ball.radius)) {
      ball.dx = -ball.dx;
    }
    if (currentPostionTop < 0 || currentPostionTop > (playground.offsetHeight - ball.radius)) {
      ball.dy = -ball.dy;      
    }
  }
  
  randomColors(): string {
    const hexElements: Array<string> = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9'];
    let resColor: string = "#";
    for (let index = 0; index < 6; index++) {
      let randomElement: string = hexElements[Math.floor(Math.random() * hexElements.length)];
      resColor+= randomElement;
    }
    return resColor;
  }
  
  randomRadius(): number {
    let radius: number = Math.floor(Math.random() * 100) + 25;
    return radius;
  }
}
