import { Component} from '@angular/core';

@Component({
  selector: 'move-image',
  template: `
  <div class="demo">
    <div class="frame">

    </div>
  </div>
  `,
  styles: [`
    .demo{
      width:264px;
      height:525px;
      position: absolute;
    }

    .frame{
      width: 100%;
      height: 100%;
      background: url('/resources/img/frame.png') no-repeat center;
      position: absolute;
    }

    :host(.anitest) {
      position: absolute;
      transition: all ease-in 0.5s;
    }

    :host(.anitest.ng-enter) {
      transform: translateY(-1in)
    }

    :host(.anitest.ng-enter-active) {
      transform: none;

    }
  `],
  host: {'class': 'ng-animate anitest'}
})

export class MoveImageComponent {
}
