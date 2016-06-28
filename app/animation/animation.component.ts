// import { Component, Directive, ElementRef } from '@angular/core';
// import {AnimationBuilder} from 'angular2/src/animate/animation_builder';
// // http://stackoverflow.com/questions/34165140/how-does-angular-2-0-for-typescript-alpha-animation-work 참고
// @Directive({
//   selector : '[animate-box]',
//   exportAs : 'ab'
// })
// class AnimateBox{
//   constructor(private _ab: AnimationBuilder, private _e: ElementRef) {}
//
//   toggle(isVisible: boolean = false){
//     let animation = this._ab.css();
//
//     animation.setDuration(1000);
//
//     if(!isVisible){
//       animation.setFromStyles({height:'0', width: '50%', overflow: 'hidden'})
//         .setToStyles({height: '300px'})
//     }else{
//       animation.setFromStyles({height:'300px', width: '50%'})
//         .setToStyles({height: '0'})
//     }
//
//     animation.start(this._e.nativeElement);
//   }
// }
//
//
// @Component({
//   selector: 'animation-ex',
//   template: `
//     <div animate-box #box="ab"  style="height:0; width:50%; overflow: hidden;">Some content</div>
//     <button (click)="box.toggle(visible = !visible)">Animate</button>
//   `,
//   directives: [
//     AnimateBox
//   ],
//   styles: [`
//
//   `]
// })
//
// export class AnimationComponent {
//
// }
