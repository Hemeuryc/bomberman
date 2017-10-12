

class map {

    matrix : number[][];
    constructor(){
        this.matrix =
        [
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 1, 0, 1, 0, 0 ],
            [ 0, 0, 0, 0, 1, 0 ],
            [ 0, 0, 1, 0, 0, 0 ]
        ];
    }
}


var lamap = new map();


/*Framework de base jquery like*/
var $ = function(arg){
    return (arg.substr(0,1) =='#')?document.querySelector(arg):document.querySelectorAll(arg);
}

window.onload = () => {
    for(var i=0; i< lamap.matrix.length;i++){
        $("#matrice").innerHTML += "<tr id='case"+i+"'>";
        for(var j=0; j<lamap.matrix[i].length;j++){
            if(lamap.matrix[i][j] ==0){
                $("#case"+i).innerHTML += "<td class='blanc'></td>"}
            else if(lamap.matrix[i][j] == 1){
                $("#case"+i).innerHTML += "<td class='noir'></td>";}
            }

        }
        $("#matrice").innerHTML += "</tr>";
    }

