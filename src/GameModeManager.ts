import { Ball } from "./Ball";
import { BallManager } from "./BallManager";

export class GameModeManager {

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