// Cuando se presiona el boton "enviar"
document.getElementById("enviar").addEventListener("click", function(){

    // capturamos los valores de los inputs y el mensaje
    let nombre   = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si los inputs estan vacios, mostramos un mensaje
    if(nombre == "" || apellido == "" || edad == ""){
        alert("Por favor, complete todos los campos");
    }
    // caso contrario, formamos el siguiente mensaje
    else{
        let texto =  "Bienvenido " + nombre + " " + apellido + " a nuestra tienda virtual" + ", tenemos muchos articulos interesantes para tus " + edad + " años. Esperamos que disfrutes navegando y aproveches al maximo!";
        mensaje.innerHTML=texto;

        // se muestre el mensaje alert

        alert(texto);	
               
    }
 
});