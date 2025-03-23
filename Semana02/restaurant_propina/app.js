// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let precio   = document.getElementById("precio").value;
    let propina   = document.getElementById("propina").value;
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si no se completò el campo, mostramos un mensaje
    if(precio == ""){
        alert("Por favor, complete el campo con el monto");
    }
    // caso contrario calculamos el IVA
    else{

        let _propina=precio*propina/100;
        let texto =  "El monto a pagar por propina es: Gs"+_propina.toFixed(2);   
        mensaje.innerHTML=texto;
     
    }
 
});