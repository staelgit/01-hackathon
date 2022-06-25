import "./styles.css";

import { ContextMenu } from "./menu";

import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";

import { SayKuku } from "./modules/kuku.module"; // для примера

const contextMenu = new ContextMenu(".menu");

contextMenu.add(new SayKuku()); // для примера
contextMenu.add(new BackgroundModule());
// contextMenu.add(new ClicksModule());
// contextMenu.add(new ShapeModule());

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open();
  contextMenu.el.style.top = `${event.clientY}px`;
  contextMenu.el.style.left = `${event.clientX}px`;
});
