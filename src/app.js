import './styles.css';
import './animated_background.css';

import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { RandomFigure } from './modules/random-figure.module';
import { AnimatedBackground } from './modules/animated-background.module';

const contextMenu = new ContextMenu('.menu');

contextMenu.add(new BackgroundModule());
contextMenu.add(new RandomFigure());
const timeToDisplay = 10;
contextMenu.add(new AnimatedBackground(timeToDisplay));

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  contextMenu.el.style.top = `${event.clientY}px`;
  contextMenu.el.style.left = `${event.clientX}px`;
  contextMenu.open();
});
