// import {Component, Directive, ElementRef, OnInit} from '@angular/core';
// import {AnimationBuilder} from 'angular2/src/animate/animation_builder';
// // http://embed.plnkr.co/W7fEIfS6CWAW6HwMJkkG/ 참고
// @Directive({
//     selector: '[scale-element]',
//     exportAs: 'se'
// })
//
// export class ScaleElement implements OnInit {
//     private _isRunning: Boolean = false;
//     constructor(private _ab: AnimationBuilder, private _e: ElementRef) { }
//     ngOnInit() {
//         this.run();
//     }
//     run() {
//         let animation = this._ab.css();
//         animation.setDuration(300);
//         animation.setFromStyles({ transform: "scale(0, 0)", opacity: 0 });
//         animation.setToStyles({ transform: "scale(1.1, 1.5)", opacity: 1 });
//         animation.start(this._e.nativeElement).onComplete(() => {
//             animation.setDuration(300);
//             animation.setFromStyles({ transform: "scale(1.1, 1.5)" });
//             animation.setToStyles({ transform: "scale(1, 1)" });
//             animation.start(this._e.nativeElement);
//         });
//     }
//     toggle() {
//         if (!this._isRunning) {
//             let animation = this._ab.css();
//             animation.setDuration(300);
//             animation.setFromStyles({ transform: "scale(1, 1)", opacity: 1 });
//             animation.setToStyles({ transform: "scale(0, 0)", opacity: 0 });
//             this._isRunning = true;
//             animation.start(this._e.nativeElement).onComplete(() => {
//                 animation.setDuration(300);
//                 animation.setFromStyles({ transform: "scale(0, 0)", opacity: 0 });
//                 animation.setToStyles({ transform: "scale(1.1, 1.5)", opacity: 1 });
//                 animation.start(this._e.nativeElement).onComplete(() => {
//                     animation.setDuration(300);
//                     animation.setFromStyles({ transform: "scale(1.1, 1.5)" });
//                     animation.setToStyles({ transform: "scale(1, 1)" });
//                     animation.start(this._e.nativeElement);
//                     this._isRunning = false;
//                 });
//             }).eventClearFunctions;
//         }
//     }
// }
//
// @Directive({
//     selector: '[translate-fade-element]',
//     host: { // element yang menjadi host dari directive ini
//         '[style.opacity]': "'0'",
//         '[style.background-color]': "'green'",
//         '[style.color]': "'#FFF'",
//         '[style.width]': "'98%'",
//         '[style.padding]': "'1%'"
//     },
//     inputs: ['startY'],
//     exportAs: 'tfe'
// })
//
// export class TranslateFadeElement implements OnInit {
//     public startY: number = 0;
//     private _isRunning: Boolean = false;
//     constructor(private _ab: AnimationBuilder, private _el: ElementRef) { }
//     ngOnInit() {
//         this.run();
//     }
//     run() {
//         let animation = this._ab.css();
//         animation.setDuration(300);
//         animation.setFromStyles({ transform: "translate(0px," + this.startY + "px)", opacity: 0 });
//         animation.setToStyles({ transform: "translate(0px,0px)", opacity: 1 });
//         animation.start(this._el.nativeElement);
//     }
//     toggle() {
//         if (!this._isRunning) {
//             let animation = this._ab.css();
//             animation.setDuration(300);
//             animation.setFromStyles({ transform: "translate(0px,0px)", opacity: 1 });
//             animation.setToStyles({ transform: "translate(0px," + this.startY + "px)", opacity: 0 });
//             this._isRunning = true;
//             animation.start(this._el.nativeElement).onComplete(() => {
//                 animation.setFromStyles({ transform: "translate(0px," + this.startY + "px)", opacity: 0 });
//                 animation.setToStyles({ transform: "translate(0px,0px)", opacity: 1 });
//                 animation.start(this._el.nativeElement).onComplete(() => {
//                     this._isRunning = false;
//                 }).eventClearFunctions;
//             }).eventClearFunctions;
//         }
//     }
// }
//
//
// @Component({
//     selector: 'animation2',
//     providers: [],
//     template: `
//     <div>
//       <header translate-fade-element #header="tfe" [startY]="-50">Header</header>
//       <div scale-element #content="se" style="width: 98%; padding: 1%; background: salmon;"><span>Hello, {{name}}</span></div>
//       <footer translate-fade-element #footer="tfe" [startY]="50" style="width: 98%; padding: 1%; background: red; color: #FFF">Footer</footer>
//       <button (click)="header.toggle(); content.toggle(); footer.toggle();">Rerun animation</button>
//     </div>
//   `,
//     directives: [TranslateFadeElement, ScaleElement]
// })
// export class Animation2Component {
//     public name: String;
//     private _visible: boolean;
//     constructor() {
//         this.name = "Angular 2";
//     }
// }
