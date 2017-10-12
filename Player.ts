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

    leftArrowPressed= function(){
        let element = document.getElementById('player');
        element.style.left = parseInt(element.style.left) - 50 + 'px';
    }

    rightArrowPressed= function(){
        let element = document.getElementById('player');
        element.style.left = parseInt(element.style.left) + 50 + 'px';
    }

    upArrowPressed= function() {
        let element = document.getElementById("player");
        element.style.top = parseInt(element.style.top) - 50 + 'px';
    }

    downArrowPressed= function() {
        let element = document.getElementById("player");
        element.style.top = parseInt(element.style.top) + 50 + 'px';
    }

    moveSelection = function (evt : any) {
        console.log("moveSelection");
        console.log(evt.keyCode);
        switch (evt.keyCode) {
            case 37:
                this.leftArrowPressed;
                console.log("left");
                break;
            case 39:
                this.rightArrowPressed;
                console.log("right");
                break;
            case 38:
                this.upArrowPressed;
                console.log("up");
                break;
            case 40:
                this.downArrowPressed;
                console.log("donw");
                break;
            default:
                console.log("switch out");
        }
    }
}
let play = new Player();
