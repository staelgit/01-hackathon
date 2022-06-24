import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open() {
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  add(menuItem) {
    const menuItemString = menuItem.toHTML();
    this.el.insertAdjacentHTML('beforeend', menuItemString);
    const menuItemHTML = this.el.querySelector(`[data-type="${menuItem.type}"]`);
    menuItemHTML.addEventListener('click', () => {
      menuItem.trigger();
      this.el.classList.remove('open');
      //СОрян 
    })
    
  }
}
