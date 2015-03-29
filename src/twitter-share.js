import {Behavior} from 'aurelia-templating';

export class TwitterShare {
  static metadata(){
    return Behavior
      .customElement('twitter-share')
      .withProperty('dsize')
      .withProperty('durl')
      .withProperty('dtext')
      .withProperty('dtags');
      
  }

}
