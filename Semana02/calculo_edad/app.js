// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let edad   = document.getElementById("edad").value;
   
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si no se ingresaron los datos, mostramos un mensaje
    if(edad == ""){
        alert("Por favor, complete el campo Edad");
    }
    // caso contrario, se calcula edad
    else{

        _5a = parseInt(edad) + 5;
        _10a = parseInt(edad) + 10;
        _100a = parseInt(edad) + 100;
        let texto =  "En 5 años tendrás " + _5a + " años, en 10 años tendrás " + _10a + " años y en 100 años, si sigues viviendo tendrás " + _100a + " años.";
        mensaje.innerHTML=texto;

       
    }
 
});