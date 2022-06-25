import { Module } from "../core/module";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor() {
    super("background", "Change the background color");
  }
  setColor() {
    return random(100, 255);
  }
  trigger() {
    document.body.style.backgroundColor =
      "rgb(" + setColor() + "," + setColor() + "," + setColor() + ")";
  }
}
