import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  template: `
    <div class="page1">
      Page 1
    </div>
  `,
  styles: [`
      .page1 {
        height: 50vh;
        background: #5cd65c;
      }

      :host(.page1Container) {
        display: inline-block;
        position: fixed;
        width: 40%;
        -webkit-transition: all ease-in 0.5s;
        transition: all ease-in 0.5s;
      }

      :host(.page1Container.ng-enter) {
        transform: rotateX(-180deg)
      }

      :host(.page1Container.ng-enter-active) {
        transform: rotateX(0deg)
      }
  `],
  host: {'class': 'ng-animate page1Container'}
})

export class Page1Component {

}
