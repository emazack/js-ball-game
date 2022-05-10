import { Ball } from "./Ball";
import { BallManager } from "./BallManager";

export class GameModeManager {

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

    selectDifficulty(): string {
        const difficultySelect: HTMLSelectElement = document.querySelector(".difficulty-level");
        return difficultySelect.value
    }

    startGame(playground: HTMLCanvasElement): void {
        const startButton: HTMLButtonElement = document.querySelector(".start-button");
        startButton.addEventListener("click", (): void => {
            this.addBall(playground, this.selectDifficulty());
          }) 
    }

    addBall (playground: HTMLCanvasElement, difficulty: string) : void {
        const ballManager: BallManager = new BallManager();
        const newBall: Ball = ballManager.create(1, 1);
        ballManager.insert(playground, newBall);
        ballManager.draw(playground, newBall);
        ballManager.click(newBall);
    }

  } 