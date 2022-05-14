function raiz(numX, numY){
    if(numX != false && numY != false){
        resultado = "X: " + Math.sqrt(numX) + ", Y: " + Math.sqrt(numY);
        setResult(resultado);
    } else if(numX != false) {
        resultado = "X: " + Math.sqrt(numX);
        setResult(resultado);
    } else if(numY != false) {
        resultado = "Y: " + Math.sqrt(numY);
        setResult(resultado);
    } else { document.getElementById("resultado").innerHTML = "Insira algum valor!" }
}