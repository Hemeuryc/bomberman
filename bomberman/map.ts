/*buildMatrice(){
    var matrix  :number[][];
    var compt1 = 0;
    for(var i=0; i< Math.floor(Math.random()*4+3);i++){
        var  compt1ligne =0;
        for(var j=0; j< Math.floor(Math.random()*4+3);j++){
            let isPlanche = Math.random()*1;
            if(isPlanche == 1 && compt1 <=3  && compt1ligne <=1){
                compt1 ++;
                compt1ligne ++;
                matrix[i][j] = isPlanche ;
            }else if( isPlanche == 1 && compt1 >3 &&  compt1ligne >1){
                matrix[i][j] = 0 ;
            }else{
                matrix[i][j] = 0 ;
            }
        }
    }

    return matrix;
}*/