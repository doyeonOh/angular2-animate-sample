import { Component  } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Page1Component } from './page-transition/page1.component';
import { Page2Component } from './page-transition/page2.component';
import { MovetextComponent } from './move-text/move-text.component';
import { MoveImageComponent } from './move-image/move-image.component';
import { AnimationComponent } from './animation/animation.component';
// import { Animation2Component } from './animation/animation2.component';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1 class="title">Animate example</h1>
      <section>
        <div style="color:#aaa">

          <p>animation 개편되서 동작 불가 | 페이지 변형 | Page Transition | <a href="http://www.waynehong.com/javascript/angular2-page-transition-animation-example/">참조</a></p>
          <p><a [routerLink]="['PAGE1']">Page 1</a> | <a [routerLink]="['PAGE2']">Page 2</a></p>
        </div>
        <div>
          <p>텍스트 움직이기 | Move Text</p>
          <p><a [routerLink]= "['MoveText']">Move Text</a></p>
        </div>
        <div>
          <p> 이미지 움직이기 | Move Image </p>
          <p><a [routerLink]= "['MoveImage']">Move Image</a></p>
        </div>
        <div>
          <p> @triggerName 을 사용한 animation
          <p><a [routerLink]= "['Animation']">Animation </a></p>
        </div>
        <!--
        <div>
          <p> with animation builder 2 | <a href="http://embed.plnkr.co/W7fEIfS6CWAW6HwMJkkG/">참조</a></p>
          <p><a [routerLink]="['Animation2']">Animation2 </a></p>
        </div> -->
      </section>
      <hr/>
      <section>
        <!-- main contents -->
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],

})

@RouteConfig([
  { path: '/page1', name: 'PAGE1', component: Page1Component },
  { path: '/page2', name: 'PAGE2', component: Page2Component },
  { path: '/moveText', name: 'MoveText', component: MovetextComponent },
  { path: '/moveImage', name: 'MoveImage', component: MoveImageComponent },
  { path: '/animation', name: 'Animation', component: AnimationComponent },
  // { path: '/animation2', name: 'Animation2', component: Animation2Component }
])

export class AppComponent{

}
