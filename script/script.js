function raiz(numX, numY){
    var resultado;
    if(numX != false && numY != false){
        resultado = "X: " + Math.sqrt(numX) + ", Y: " + Math.sqrt(numY);
    } else if(numX != false) {
        resultado = "X: " + Map.sqrt(numX);
    } else if(numY != false) {
        resultado = "Y: " + Math.sqrt(numY);
    }
}