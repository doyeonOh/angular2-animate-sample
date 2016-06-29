import { Component, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'move-image',
  template: `
  <div class="demo">
    <div @animState="state" class="frame" (click)="toggle()">
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
      cursor:pointer;
      width: 100%;
      height: 100%;
      background: url('/resources/img/frame.png') no-repeat center;
      position: absolute;
    }
  `],
  animations: [
    trigger('animState', [
      state('inactive', style({
        "transform": "translateX(2in)"
      })),
      state('active', style({
        "transform": "none"
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})

export class MoveImageComponent{
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
