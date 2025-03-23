// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let anho   = document.getElementById("anho").value;
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si no se completò el campo, mostramos un mensaje
    if(anho == ""){
        alert("Por favor, indique el año");
    }
    // caso contrario calculamos si es bisiesto
    else{

        if(anho % 4 == 0 && (anho % 100 != 0 || anho % 400 == 0)){
            let texto =  "El año ingresado es bisiesto";   
            mensaje.innerHTML=texto;
        }
        else{
            let texto =  "El año ingresado NO es bisiesto";   
            mensaje.innerHTML=texto;
        }
            
    }
 
});