

class map {

    matrix : number[][];
    constructor(){
        this.matrix =
        [
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ]
        ];

        var compt1 = 0;
        for(var i=0; i< 6;i++){
            var  compt1ligne =0;
            for(var j=0; j< 6;j++){
                let isPlanche = Math.floor(Math.random()*3);
                if(isPlanche == 1 && compt1 <=5  && compt1ligne <1){
                    compt1 ++;
                    compt1ligne ++;
                    this.matrix[i][j] = isPlanche ;
                }else if( isPlanche == 1 && compt1 >3 &&  compt1ligne >1){
                    this.matrix[i][j] = 0 ;
                }else{
                    this.matrix[i][j] = 0 ;
                }
            }



    }
        this.matrix[0][0]=2;
        this.matrix[0][1]=0;
        this.matrix[0][2]=0;
        this.matrix[5][5]=3;
}}


var lamap = new map();


/*Framework de base jquery like*/
var $ = function(arg){
    return (arg.substr(0,1) =='#')?document.querySelector(arg):document.querySelectorAll(arg);
}

window.onload = () => {
    for(var i=0; i< 6;i++){
        $("#matrice").innerHTML += "<tr id='case"+i+"'>";
        for(var j=0; j<6;j++){
            if(lamap.matrix[i][j] ==0){
                $("#case"+i).innerHTML += "<td class='blanc'></td>"}
            else if(lamap.matrix[i][j] == 1){
                $("#case"+i).innerHTML += "<td class='noir'></td>";}
            else if( lamap.matrix[i][j] == 2){
                $("#case"+i).innerHTML += "<td class='vert'></td>";}
             else if (lamap.matrix[i][j] == 3){
                  $("#case"+i).innerHTML += "<td class='rouge'></td>";}

        )

        }
        $("#matrice").innerHTML += "</tr>";
    }

