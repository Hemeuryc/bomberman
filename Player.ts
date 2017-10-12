/**
 * Created by Adrien on 12/10/2017.
 */
class Player{

    public canMove: boolean;

    constructor(){
        console.log('constructor');
        //document.querySelector('#divPlayer').addEventListener("keydown", this.moveSelection,false);
        window.addEventListener("keydown", this.moveSelection,false);
    }

    /**leftArrowPressed= function(){
        console.log("leftArrowPressed");
        let element = document.getElementById('bomber');
        element.style.left = parseInt(element.style.left) - 50 + 'px';
    }

    rightArrowPressed= function(){
        console.log("rightArrowPressed");
        let element = document.getElementById('bomber');
        element.style.left = parseInt(element.style.left) + 50 + 'px';
    }

    upArrowPressed= function() {
        console.log("upArrowPressed");
        let element = document.getElementById("bomber");
        element.style.top = parseInt(element.style.top) - 50 + 'px';
    }

    downArrowPressed = function () {
        console.log("downArrowPressed");
        let element = document.getElementById("bomber");
        element.style.top = parseInt(element.style.top) + 50 + 'px';
    }**/

    moveSelection(evt : any) {
        //var element = document.getElementById('bomber');
        console.log('moveSelection');
        console.log(evt.keyCode);
        switch (evt.keyCode) {
            case 37:
                //this.leftArrowPressed();
                var elementLeft = document.getElementById('bomber');
                elementLeft.style.left = parseInt(elementLeft.style.left) - 5 + 'px';
                console.log("left");
                break;
            case 39:
                //this.rightArrowPressed();
                var elementRight = document.getElementById('bomber');
                elementRight.style.left = parseInt(elementRight.style.left) + 5 + 'px';
                console.log("right");
                break;
            case 38:
                //this.upArrowPressed();
                var elementUp = document.getElementById('bomber');
                elementUp.style.top = parseInt(elementUp.style.top) - 5 + 'px';
                console.log("up");
                break;
            case 40:
                //this.downArrowPressed();
                var elementDown = document.getElementById('bomber');
                elementDown.style.top = parseInt(elementDown.style.top) + 5 + 'px';
                console.log("down");
                break;
        }
    }
}
let play = new Player();
