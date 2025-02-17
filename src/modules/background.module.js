import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  constructor() {
    super('background', 'Поменять цвет');
  }
  setColor() {
    return random(100, 255);
  }
  trigger() {
    document.body.style.backgroundColor = `rgb(
      ${this.setColor()} 
      , 
      ${this.setColor()} 
      , 
      ${this.setColor()} 
      )`;
  }
}
