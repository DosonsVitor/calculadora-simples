function somar(numX, numY){
    if(numX != false && numY != false){
        resultado = numX + numY;
        setResult(resultado);
    } 
}

function subtrair (numX, numY) {
    if (numX != false && numY != false) {
        resultado = numX - numY;
        setResult (resultado); 
    }
}

function multiplicar (numX, numY){
    if(numX != false && numY != false)
    resultado = numX + numY;
    setResult(resultado);
}

function dividir (numX, numY) {
    if (numX != false && numY != false) {
        resultado = numX / numY;
        setResult (resultado); 
    }
}

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

function potencia(numX, numY){
    if(numX != false && numY != false){
        resultado = Math.pow(numX, numY);
        setResult(resultado);
    }
}

function getX(){ 
    var num = document.getElementById("num1").value;
    if(num === ""){
        errorReport();
        return false;
    } else{
        return num;
    }
}

function getY(){ 
    var num = document.getElementById("num2").value;
    if(num === ""){
        errorReport();
        return false;
    } else{
        return num;
    }
}
function setResult(result){ document.getElementById("resultado").innerHTML = "Resultado: " + result; }
function errorReport(){ document.getElementById("resultado").innerHTML = "Insira os dois valores!"; }