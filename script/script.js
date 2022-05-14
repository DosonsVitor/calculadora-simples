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