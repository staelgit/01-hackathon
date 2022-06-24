import {Menu} from './core/menu'

export class ContextMenu extends Menu {

<<<<<<< HEAD
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
=======
}
>>>>>>> 96fc77c4ef136153c773d1aa1a6d05d3b23c6584
