class Score{
    curScore = 0;
    level = 1;
    maxScore: number;
    maxLevel: number;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    constructor (maxScore: number, maxLevel: number) {
        this.maxLevel = maxLevel;
        this.maxScore = maxScore;
        this.scoreElement = document.querySelector('#score')!;
        this.levelElement = document.querySelector('#level')!;
    }
    addScore () {
        this.scoreElement.innerText = ++this.curScore + '';
        if(this.curScore % 10 === 0){
            this.addLevel();
        }
    }
    addLevel () {
        this.levelElement.innerText = ++this.level + '';
    }
}
export  default Score;