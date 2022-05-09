let resultado;

function resta(x,y){
    resultado = x - y;
    return resultado;
}
function producto(x,y){
    resultado = x * y;
    return resultado;
}
function division(x,y){
    resultado = x / y;
    return resultado;
}

function cuadrado(x = 0){
    resultado = x*x;
    return resultado;
}


module.exports = {resta,producto,division,cuadrado};