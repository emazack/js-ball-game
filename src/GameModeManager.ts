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
        // let difficulty: string = "";
        // difficultySelect.addEventListener("change", (): void => {
        //     difficulty = difficultySelect.value;
        // })
        // return difficulty
        return difficultySelect.value
    }

    startGame(): void {
        const startButton: HTMLButtonElement = document.querySelector(".start-button");
        startButton.addEventListener("click", (): void => {
            this.selectDifficulty();
          }) 
    }

  } 