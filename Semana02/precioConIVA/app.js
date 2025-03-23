// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let precio   = document.getElementById("precio").value;
   
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si no se completa el campo, mostramos un mensaje
    if(precio == ""){
        alert("Por favor, complete el campo con el monto en Gs");
    }
    // caso contrario calculamos el IVA
    else{

        let iva=parseInt(precio)*1.1;
        let texto =  "El monto ingresado es: Gs"+precio+" y el monto con IVA del 10% es: Gs"+iva.toFixed(2);   
        mensaje.innerHTML=texto;

       
    }
 
});