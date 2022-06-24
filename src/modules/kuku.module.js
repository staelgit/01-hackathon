import {Module} from '../core/module'

export class SayKuku extends Module {
    constructor() {
        super('kuku', 'Скажи Ку-ку');
    }

    trigger() {
        console.log('Ku-ku');
      }
}