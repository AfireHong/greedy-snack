import Food from "./food";
import Score from "./score";
import Snake from "./snake";
class GameControl{
    food: Food;
    score: Score;
    snake: Snake;
    direction: String = "";
    isLive: boolean = true;
    constructor () {
        this.food = new Food();
        this.score = new Score(10, 10);
        this.snake = new Snake();
        this.init();
    }
    init () {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler (event: KeyboardEvent) {
        this.direction = event.key;
    }
    run () {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case  "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        if(this.checkEat(X, Y)) {
            this.food.change();
            this.score.addScore();
            this.snake.addBody();
        }
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert("Game Over");
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.score.level - 1) * 30);
    }
    checkEat (X: number, Y:number) {
        return X === this.food.X && Y === this.food.Y;
    }
}

export default GameControl