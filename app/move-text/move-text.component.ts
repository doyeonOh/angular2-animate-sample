import { Component } from '@angular/core';

@Component({
  selector: 'move-text',
  template: `
    <p> 텍스트가 움직입니다. text is  moving~ </p>
  `,
  styles: [`
    p {
      animation-duration: 3s;
      animation-name: slidein;
      animation-iteration-count : infinite; /* 애니메이션 반복 카운트 */
      animation-direction: alternate; /* 애니메이션 끝났을때 반대로 똑같이 해주기*/
    }

    @keyframes slidein {
      from {
        margin-left: 30%;
        width: 300%;
      }

      to {
        margin-left: 0%;
        width: 100%;
      }
      /* 중간 상태 추가 */
      50% {
        font-size: 100%;
        margin-left: 15%;
        width: 150%;
      }
    }
  `]
})

export class MovetextComponent {

}
