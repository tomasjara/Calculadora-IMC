function calculadoraImc() {

    // Variables a procesar

    var estatura = parseInt(document.getElementById("estatura-input").value) * (1/100)
    var peso = parseInt(document.getElementById("peso-input").value)

    // Validacion si estos numeros son negativos

    switch (true) {

        case estatura <= 0 && peso <= 0:
            alert("Su peso y estatura no pueden ser menor o igual a 0, intentelo de nuevo.")
            var validacion = boolean(false)
            break;
        case estatura <= 0:
            alert("Su estatura no puede ser menor o igual a 0, intentelo de nuevo.")
            var validacion = boolean(false)
            break;
        case peso <= 0:
            alert("Su peso no puede ser menor o igual a 0, intentelo de nuevo.")
            var validacion = boolean(false)
            break;
        default:
            var validacion = true
    }

    // Calculo de IMC

    if (validacion) {
        var resultado = peso / Math.pow(estatura, 2)
        var resultado = resultado.toFixed(1)
        document.getElementById("imc").value = resultado
    }

    // Clasificacion de IMC

    switch (validacion) {

            // Bajo peso

        case resultado < 16:
            document.getElementById("clasificacion").value = "Bajo de peso - delgadez severa"
            break;

        case resultado >=16.99 && resultado <= 16:
            document.getElementById("clasificacion").value = "Bajo de peso - delgadez moderada"
            break;

        case resultado <= 18.50 && resultado <= 17:
            document.getElementById("clasificacion").value = "Bajo peso - Delgadez aceptable"
            break;
        
            // Normal

        case resultado >= 18.50 && resultado <= 24.99:
            document.getElementById("clasificacion").value = "Normal"
            break;

            // Sobrepeso

        case resultado >= 25.00 && resultado < 30.00:
            document.getElementById("clasificacion").value = "Sobrepeso - Pre obeso"
            break;

            // Obeso
            
        case resultado >= 30.00 && resultado <= 34.99:
            document.getElementById("clasificacion").value = "Obeso - riesgo moderado"
            break;

        case resultado >= 35 && resultado <= 39.99:
            document.getElementById("clasificacion").value = "Obeso - riesgo moderado"
            break;

        case resultado >= 40:
            document.getElementById("clasificacion").value = "Obeso - riesgo muy severo"
            break;              

        default:
            alert("Verifique que haya ingresado los datos correctamente")
    }
}