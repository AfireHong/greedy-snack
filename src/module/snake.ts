class Snake{
    head: HTMLElement;
    body: HTMLCollection;
    snake: HTMLElement;
    constructor() {
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.body = document.getElementById("snake")!.getElementsByTagName("div");
        this.snake = document.querySelector("#snake")!;
    }
    get X () {
        return this.head.offsetLeft;
    }
    get Y () {
        return this.head.offsetTop;
    }
    set X (value: number) {
        if(this.X === value) {
            return;
        }
        if(value < 0 || value > 290) {
            throw new Error("撞墙~")
        }
        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
            if(value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px';
        this.checkBody()
    }
    set Y (value: number) {
        if(this.Y === value) {
            return;
        }
        if(value < 0 || value > 290) {
            throw new Error("撞墙~")
        }
        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
            if(value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkBody()
    }
    addBody () {
        let node = document.createElement("div");
        this.snake.appendChild(node);
    }
    moveBody () {
        for(let i = this.body.length - 1; i > 0; i -- ) {
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    checkBody () {
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己~');
            }
        }
    }
}
export default Snake;