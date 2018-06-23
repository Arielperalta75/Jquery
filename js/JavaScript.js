
 	function editarEstudiante(codigo) {
  var estudiante;
  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    if (clave == codigo) {
      estudiante = $.parseJSON(localStorage.getItem(clave));

      $("#codigo").val(estudiante.codigo);
      $("#nombre").val(estudiante.nombre);
      $("#nota").val(estudiante.nota);
    }
  }
}

function listarEstudiantes() {
  var tabla = "";
  var parrafo1 = $("#infoestudiante");

  tabla += '<table border="1">';
  tabla += '<tr>';
  tabla += '<th>Codigo</th>';
  tabla += '<th>Nombre</th>';
  tabla += '<th>Nota</th>';
  tabla += '<th>Editar</th>';
  tabla += '<th>Eliminar</th>';
  tabla += '</tr>';

  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    var estudiante = $.parseJSON(localStorage.getItem(clave));
 
    tabla += '<tr>';
    tabla += '<td>' + estudiante.codigo + '</td>';
    tabla += '<td>' + estudiante.nombre + '</td>';
    tabla += '<td>' + estudiante.nota + '</td>';
    tabla += '<td><button onclick="editarEstudiante(\'' + estudiante.codigo + '\');">Editar</button></td>';
    tabla += '<td><button onclick="eliminarEstudiante(\'' + estudiante.codigo + '\');">Eliminar</button></td>';
    tabla += '</tr>';
  }
  tabla += '</table>';
  $(parrafo1).html(tabla);
  
}

function eliminarEstudiante(codigo) {
  localStorage.removeItem(codigo);
  listarEstudiantes();
}

$(document).ready(function() {
  var contador;
  if (localStorage.length > 0) {
    contador = localStorage.length + 1
  } else {
    contador = 1;
  }

  $("#codigo").val(contador);

  $("#registrarestudiantes").click(function() {
    var codigo = $("#codigo").val();
    var nombre = $("#nombre").val();
    var nota = $("#nota").val();

    var estudiante = {
      codigo: codigo,
      nombre: nombre,
      nota: nota
    };

    localStorage.setItem(codigo, JSON.stringify(estudiante));
    contador = localStorage.length + 1;

    listarEstudiantes();
   restablecer();

  });

 /* $("#boton2").click(function() {
    restablecer(9);
  });*/

  function restablecer() {
    $("#codigo").val(contador);
    $("#nombre").val("");
    $("#nota").val("");
  }

  listarEstudiantes();
  $("#codigo").val();
  
});

$("#mipromedio").click(function() {
      var acumulador = 0.0,
        key, data, estudiante;
      for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i); // Clave donde esta guardada la info del Est.
        data = localStorage.getItem(key); // Info del Est. en formato JSON
        estudiante = JSON.parse(data); // Objecto estudiante
        acumulador += parseInt(estudiante.nota, 10); // Nota en formato entero
      }
      var promedio = acumulador / localStorage.length;

      alert("La nota promedio es: " + promedio);

    });

$("#notamayor").click(function() {
     var notamayor = "";
        key, data, estudiante;
      for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i); // Clave donde esta guardada la info del Est.
        data = localStorage.getItem(key); // Info del Est. en formato JSON
        estudiante = JSON.parse(data); // Objecto estudiante
        notamayor += parseInt(estudiante.nota >=10); // Nota en formato entero
      }

      alert("La nota mayor es: " + notamayor);

     });

$("#ingresonuevosestudiantes").validate();
/*$("#notamenor").click(function() {
     var notamenor = "";
        key, data, estudiante;
      for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i); // Clave donde esta guardada la info del Est.
        data = localStorage.getItem(key); // Info del Est. en formato JSON
        estudiante = JSON.parse(data); // Objecto estudiante
        acumulador += parseInt(estudiante.nota, 10); // Nota en formato entero
      }
      var promedio = acumulador / localStorage.length;

      alert("La nota promedio es: " + promedio);

     });*/
//Método que halla el número mayor
	/*function NotaMayor(){
           var Nota = 0;
           var i;
            for (i = 0; i < jsonObject.alumnos.length; i++) {
                if (jsonObject.alumnos[i].nota >= Nota) {
                     Nota = jsonObject.alumnos[i].nota;
					
                }	
            }
		alert("La nota Mayor es: "+ Nota);
 }
		    		
//Método que halla la nota menor
	function NotaMenor(){
	    var menor = 10;
		var i;
          for (i = 0; i < jsonObject.alumnos.length; i++) {
             if (jsonObject.alumnos[i].nota <= menor) {
                     menor = jsonObject.alumnos[i].nota;
		     }
        }
		alert("La nota Menor es: "+ menor);		
}*/
