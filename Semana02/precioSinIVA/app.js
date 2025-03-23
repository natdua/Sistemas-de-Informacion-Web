// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let precio   = document.getElementById("precio").value;
   
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si no se completò el campo, mostramos un mensaje
    if(precio == ""){
        alert("Por favor, complete el campo con el monto");
    }
    // caso contrario calculamos el IVA
    else{

        let precioSinIVA=parseInt(precio)/1.1;
        let iva=precio-precioSinIVA;
        let texto =  "El precio sin IVA es: Gs"+precioSinIVA.toFixed(2)+" y el IVA 10% es: Gs"+iva.toFixed(2);   
        mensaje.innerHTML=texto;

       
    }
 
});