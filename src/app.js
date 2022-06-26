import './styles.css';
import './animated_background.css';

import { ContextMenu } from './menu';

// -------- импортируем сюда свой класс --------
import { SayKuku } from './modules/kuku.module'; // для примера
import { BackgroundModule } from './modules/background.module';
import { RandomFigure } from './modules/random-figure.module';
import { AnimatedBackground } from './modules/animated-background.module';
import { ClicksModule } from './modules/clicks.module';

const contextMenu = new ContextMenu('.menu');

// -------- генерируем пунк меню из своего класса --------
contextMenu.add(new SayKuku()); // для примера
contextMenu.add(new BackgroundModule());
contextMenu.add(new RandomFigure());                 
contextMenu.add(new AnimatedBackground());                 
// contextMenu.add(new ClicksModule());


document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  contextMenu.el.style.top = `${event.clientY}px`;
  contextMenu.el.style.left = `${event.clientX}px`;
  contextMenu.open();
});
