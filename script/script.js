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