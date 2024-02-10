function calcular() {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  


 
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
       error("Por favor, ingrese un número válido para todas las notas.");
  } else if (nota1 > 30 || nota2 > 30 || nota3 > 40) {
       error("Las primeras dos  notas no deben ser mayor a 30%  y 40% para la tercera nota.");
  } else {
        let suma = nota1 + nota2 + nota3;
        let mensaje = "";
        if (suma >= 0 && suma <= 59) {
          mensaje = "Reprobado";
        } else if (suma >= 60 && suma <= 79) {
          mensaje = "Bueno";
        } else if (suma >= 80 && suma <= 89) {
          mensaje = "Muy Bueno";
        } else if (suma >= 90 && suma <= 100) {
          mensaje = "Sobresaliente";
        } else {
               error("La suma de las notas está fuera de rango.");
          return; 
        }
        
       
        document.getElementById("textP").textContent = "Su nota Obtenida es:  " + suma;
        document.getElementById("textP1").textContent = "Observación:  " + mensaje;
  
  }

}

function error(text) {
  Swal.fire({
      icon: "error",
      title: "Error en la Operacion",
      text: text
  });
}


function limpiarFormulario() {
  document.getElementById("nota1").value = " ";
  document.getElementById("nota2").value = " ";
  document.getElementById("nota3").value = " ";

}