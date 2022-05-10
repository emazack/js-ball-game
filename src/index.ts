console.log("PALLE");


    import { Ball } from "./Ball";
    import { BallManager } from "./BallManager";
    import { GameModeManager } from "./GameModeManager";

    const myPlayground: HTMLCanvasElement = document.querySelector(".canvas");
    const gameModeManager: GameModeManager = new GameModeManager();
    const ballManager: BallManager = new BallManager();
    // const newBall: Ball = ballManager.create(1, 1);
    // ballManager.insert(myPlayground, newBall);
    // ballManager.draw(myPlayground, newBall);
    // ballManager.click(newBall);
    gameModeManager.selectDifficulty();
    gameModeManager.startGame(myPlayground);

    
    