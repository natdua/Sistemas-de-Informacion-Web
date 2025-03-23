// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let fecha1 = document.getElementById("fecha1").value;
    let fecha2 = document.getElementById("fecha2").value;
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si no se completó algun campo, mostramos un mensaje
    if(!fecha1||!fecha2){
        mensaje.innerHTML="Debe ingresar ambas fechas";
        mensaje.style.color= "red";
        return;
    }
    // caso contrario, convertimos las fechas a objetos tipo Date
    let date1= new Date(fecha1);
    let date2= new Date(fecha2);
    let diascorridos=(date2 -date1)/(1000*60*60*24);
    if(diascorridos < 0){
        mensaje.innerHTML="La segunda fecha debe ser mayor o igual a la primera fecha ingresada";
        mensaje.style.color= "red";
    }
    else{
        let texto = "La diferencia es de:"+diascorridos+ "días";
        mensaje.innerHTML=texto; 
        mensaje.style.color= "black";
    }
 
});