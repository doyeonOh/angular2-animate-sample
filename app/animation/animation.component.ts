import { Component, Directive, ElementRef, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'animation-ex',
  template: `
    <div @animState="state">Some content</div>
    <button (click)="toggle()">Animate</button>
  `,
  styles: [`

  `],
  animations: [
    trigger('animState', [
      state('inactive', style({
        "height" :'0',
        "width" :'50%',
        "overflow": "hidden"
      })),
      state('active', style({
        "height": '300px',
        "background-color": '#f2f'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})

export class AnimationComponent {
  state: string = "inactive";

  toggle(){
    if(this.state == "active"){
      this.state = "inactive";
    }else{
      this.state = "active";
    }
    console.log(this.state);
  }
}
