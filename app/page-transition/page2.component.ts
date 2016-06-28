import { Component } from '@angular/core';

@Component({
  selector: 'page2',
  template: `
    <div class="page2">
      Page 2
    </div>
  `,
  styles: [`
    .page2 {
      height: 50vh;
      background: #ff4d4d;
    }

    :host(.page2Container) {
      position: fixed;
      display: inline-block;
      width: 40%;
      -webkit-transition: all-ease-in-out 0.5s;
      transition: all ease-in-out 0.5s;
    }

    :host(.page2Container.ng-enter) {
      transform: rotateZ(180deg)
    }

    :host(.page2Container.ng-enter-active) {
      transform: rotateZ(0deg)
    }
  `],
   host: {'class' : 'ng-animate page2Container'}
})

export class Page2Component { }
