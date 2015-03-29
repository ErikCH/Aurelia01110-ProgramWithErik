import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Test App';
      config.map([
        { route: ['','start'], moduleId: 'start', nav: true, title:'Starting With Aurelia' }
      ]);
    });
  }
}
