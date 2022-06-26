import {Module} from '../core/module'
import { random } from "../utils";

export class RandomFigure extends Module {
    #fictureContainer
    #newElement
    #randomColor
    #randomInteger_size
    #randomInteger_width
    #randomInteger_height
    #canvas
    #ctx
    #reset

    constructor() {
        super('figure', 'Создать фигуру');
        this.#fictureContainer = document.querySelector('body');
    }

    #updateForm() {
        const canvasElement = document.querySelector('canvas');
            if(!canvasElement) {
                this.#reset = true;
                this.#newElement = document.createElement('canvas');
                this.#newElement.id = 'canvas';
                this.#fictureContainer.prepend(this.#newElement);
                this.#canvas = document.getElementById('canvas');
                this.#ctx = document.getElementById('canvas').getContext("2d");
                
                const width = this.#canvas.width = document.body.clientWidth - 75;
                const height = this.#canvas.height = document.body.clientHeight - 75;
            }
    }
    #figureStyles() {
        this.#randomColor = random(100, 1500);
        this.#randomInteger_size = random(10, 100);
        this.#randomInteger_width = random(0, this.#canvas.width - this.#randomInteger_size * 2);
        this.#randomInteger_height = random(0, this.#canvas.height - this.#randomInteger_size * 2);
    }

    randomFigure(figure) {
        switch(figure) {
            case 1: //круг
                this.#ctx.beginPath();
                this.#ctx.arc(this.#randomInteger_size + this.#randomInteger_width, this.#randomInteger_size + this.#randomInteger_height, this.#randomInteger_size, 0, 2 * Math.PI);
                this.#ctx.fill();
            break;

            case 2: //сердечко
                this.#ctx.beginPath();
                this.#ctx.moveTo(this.#randomInteger_width/1.5 + 75, this.#randomInteger_height/1.5 + 40);
                this.#ctx.bezierCurveTo(this.#randomInteger_width/1.5 + 75, this.#randomInteger_height/1.5 + 37, this.#randomInteger_width/1.5 + 70, this.#randomInteger_height/1.5 + 25, this.#randomInteger_width/1.5 +50, this.#randomInteger_height/1.5 + 25);
                this.#ctx.bezierCurveTo(this.#randomInteger_width/1.5 + 20, this.#randomInteger_height/1.5 + 25, this.#randomInteger_width/1.5 + 20, this.#randomInteger_height/1.5 + 62.5, this.#randomInteger_width/1.5 + 20, this.#randomInteger_height/1.5 + 62.5);
                this.#ctx.bezierCurveTo(this.#randomInteger_width/1.5 + 20, this.#randomInteger_height/1.5 + 80, this.#randomInteger_width/1.5 + 40, this.#randomInteger_height/1.5 + 102, this.#randomInteger_width/1.5 + 75, this.#randomInteger_height/1.5 + 120);
                this.#ctx.bezierCurveTo(this.#randomInteger_width/1.5 + 110, this.#randomInteger_height/1.5 + 102, this.#randomInteger_width/1.5 + 130, this.#randomInteger_height/1.5 + 80, this.#randomInteger_width/1.5 + 130, this.#randomInteger_height/1.5 + 62.5);
                this.#ctx.bezierCurveTo(this.#randomInteger_width/1.5 + 130, this.#randomInteger_height/1.5 + 62.5, this.#randomInteger_width/1.5 + 130, this.#randomInteger_height/1.5 + 25, this.#randomInteger_width/1.5 + 100, this.#randomInteger_height/1.5 + 25);
                this.#ctx.bezierCurveTo(this.#randomInteger_width/1.5 + 85, this.#randomInteger_height/1.5 + 25, this.#randomInteger_width/1.5 + 75, this.#randomInteger_height/1.5 + 37, this.#randomInteger_width/1.5 + 75, this.#randomInteger_height/1.5 + 40);
                this.#ctx.fill();
            break;

            case 3: //квадрат
                this.#ctx.beginPath();
                this.#ctx.rect(this.#randomInteger_size + this.#randomInteger_width, this.#randomInteger_size + this.#randomInteger_height, this.#randomInteger_size, this.#randomInteger_size);
                this.#ctx.fill();
            break;

            case 4: //прямоугольник
            this.#ctx.beginPath();
            this.#ctx.rect(this.#randomInteger_size + this.#randomInteger_width, this.#randomInteger_size + this.#randomInteger_height, random(30, 100), random(50, 150));
            this.#ctx.fill();
        break;
        }
    }
    trigger() {
        const animatedElement = document.querySelector('.animated-background');
        if(!animatedElement) {
            this.#updateForm();
            this.#figureStyles();

            this.#ctx.fillStyle = `#${this.#randomColor}`;
            this.randomFigure(random(1, 4));

            if(this.#reset) {
                this.#reset = false;
                setTimeout(() => {
                    this.#newElement.remove();
                }, 3000);
            }
        }
    }
}