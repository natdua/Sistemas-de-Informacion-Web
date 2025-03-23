// Cuando se presiona el boton "convertir"
document.getElementById("convertir").addEventListener("click", function(){

    // Tomamos el valor de los inputs y el resultado
    let guarani   = document.getElementById("guarani").value;
    let dolar     = document.getElementById("dolar").value;
    let resultado = document.getElementById("resultado");

    // si los inputs estan vacios, mostramos un mensaje
    if(guarani == "" || dolar == ""){
        alert("Ingrese un valor");
    }
    // caso contrario, se convierte
    else{
        let conversion = guarani / dolar;
        resultado.innerHTML = conversion.toFixed(2) + " USD";
        //Imprimimos el valor de la conversion en un mensaje
        alert("El valor de la conversion es: " + conversion.toFixed(2) + " USD");
    }
 
});