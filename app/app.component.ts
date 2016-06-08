import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Page1Component } from './page-transition/page1.component';
import { Page2Component } from './page-transition/page2.component';
import { MovetextComponent } from './move-text/move-text.component';


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1 class="title">Animate example</h1>
      <div>
        <p>페이지 변형 | Page Transition | <a href="http://www.waynehong.com/javascript/angular2-page-transition-animation-example/">참조</a></p>
        <p><a [routerLink]="['PAGE1']">Page 1</a> | <a [routerLink]="['PAGE2']">Page 2</a></p>
      </div>
      <div>
        <p>텍스트 움직이기 | Move Text</p>
        <p><a [routerLink]= "['MoveText']">Move Text</a></p>
      </div>
      <hr/>
      <div >
        <!-- main contents -->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})

@RouteConfig([
  { path: '/page1', name: 'PAGE1', component: Page1Component },
  { path: '/page2', name: 'PAGE2', component: Page2Component },
  { path: '/moveText', name: 'MoveText', component: MovetextComponent }
])

export class AppComponent{

}
