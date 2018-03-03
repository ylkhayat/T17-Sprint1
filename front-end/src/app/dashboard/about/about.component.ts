
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
   
        <div class="tp-wrapper5">
            <div class="tp-box5" (click)="toggleFlip5()" [@flipState]="flip5">
                <div class="tp-box__side5 tp-box__front5">
                    <img src="https://drive.google.com/uc?id=1vF4_9xxB85gljrCONtgOZPaS1ysQ4MK-" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side5 tp-box__back5">
                    <font size="2">Nadine Tarek</font>
                    <br/>
                    <font size="2">Likes to google stuff</font>
                    <br/>
                    <font size="2">Meh.</font>
                </div>
            </div>
        </div>
        <div class="tp-wrapper8">
            <div class="tp-box8" (click)="toggleFlip8()" [@flipState]="flip8">
                <div class="tp-box__side8 tp-box__front8">
                    <img src="https://drive.google.com/uc?id=1VwPndoKlNjyTjzXNOut7mnBdQjd06CbS" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side8 tp-box__back8">
                    <font size="2">Ahmed Ellouzy *_*</font>
                    <br/>
                    <font size="2">Love Travelling <3</font>
                    <br/>
                </div>
            </div>
        </div>
        <div class="tp-wrapper9">
            <div class="tp-box9" (click)="toggleFlip9()" [@flipState]="flip9">
                <div class="tp-box__side9 tp-box__front9">
                    <img src="https://drive.google.com/uc?id=1CObvmV9QFBlPy6cjQsDcyl2cmQ6oMudo" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side9 tp-box__back9">
                    <font size="2">Omar El-Sobky</font>
                    <br/>
                    <font size="2">Software Engineer</font>
                    <br/>
                    <font size="2">loves travelling and football </font>
                </div>
            </div>
        </div>
        <div class="tp-wrapper11">
            <div class="tp-box11" (click)="toggleFlip11()" [@flipState]="flip11">
                <div class="tp-box__side11 tp-box__front11">
                    <img src="https://drive.google.com/uc?id=1Xg1sfu1tw45o-CgnHb05KxWTjewLViVo" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side11 tp-box__back11">
                    <font size="2">Perihan Mohamed</font>
                    <br/>
                    <font size="2">I want to quit Engineering</font>
                </div>
            </div>
        </div>
       
    `,
    styles: [
        `
    
    .tp-wrapper5 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box5 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side5 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front5 {
        background: #f30d36;
    }
    .tp-box__back5 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper8 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box8 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side8 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front8 {
        background: #f30d36;
    }
    .tp-box__back8 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper9 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box9 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side9 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front9 {
        background: #f30d36;
    }
    .tp-box__back9 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    
    .tp-wrapper11 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box11 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side11 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front11 {
        background: #f30d36;
    }
    .tp-box__back11 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    
    .rotateimg180 {
        -webkit-transform:rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    `
    ],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(179.9deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
})
export class AboutComponent {

    flip5: string = 'inactive';
    flip8: string = 'inactive';
    flip9: string = 'inactive';
    flip11: string = 'inactive';


    constructor() {}

    toggleFlip5() {
        this.flip5 = (this.flip5 == 'inactive') ? 'active' : 'inactive';
    }
  
    toggleFlip8() {
        this.flip8 = (this.flip8 == 'inactive') ? 'active' : 'inactive';
    }
    toggleFlip9() {
        this.flip9 = (this.flip9 == 'inactive') ? 'active' : 'inactive';
    }

    toggleFlip11() {
        this.flip11 = (this.flip11 == 'inactive') ? 'active' : 'inactive';
    }
    

}
