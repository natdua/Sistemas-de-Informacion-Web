// Cuando se presiona el boton "convertir"
document.getElementById("convertir").addEventListener("click", function(){

    // Tomamos el valor de los inputs y la salida
    let centigrado   = document.getElementById("numero").value;
    let salida = document.getElementById("salida");
   

    // si los inputs estan vacios, mostramos un mensaje
    if(centigrado == ""){
        alert("Ingrese un valor");
    }
    // caso contrario, se convierte
    else{
        let conversion = centigrado*(9/5)+32;	
        salida.innerHTML = conversion.toFixed(2) + " °F";
        //Imprimimos el valor de la conversion en un mensaje
        alert("El valor en grados Fahrenheit: " + conversion.toFixed(2) + " °F");
    }
 
});