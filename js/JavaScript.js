 
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
  tabla += '<th>CODIGO</th>';
  tabla += '<th>NOMBRE</th>';
  tabla += '<th>NOTA</th>';
  tabla += '<th>EDITAR</th>';
  tabla += '<th>ELIMINAR</th>';
  tabla += '</tr>';

  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    var estudiante = $.parseJSON(localStorage.getItem(clave));
      
    tabla += '<tr>';
    tabla += '<td>' + estudiante.codigo + '</td>';
    tabla += '<td>' + estudiante.nombre + '</td>';
    tabla += '<td>' + estudiante.nota + '</td>';
    tabla += '<td><button id="editar" onclick="editarEstudiante(\'' + estudiante.codigo + '\');">Editar</button></td>';
    tabla += '<td><button id="eliminar" onclick="eliminarEstudiante(\'' + estudiante.codigo + '\');">Eliminar</button></td>';
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

  $("#registrarestudiante").click(function() {
      
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
     $("#notamenor").click(function(){
 		if(localStorage.length===0){
 		return false;	
 	}else{	
 		var Nmin = 100;	 
 		for (var i=0; i<localStorage.length; i++){	
 			      var clave=localStorage.key(i);	
            var registro=$.parseJSON(localStorage.getItem(clave));
 			if (Nmin>registro.nota){	
 				Nmin = parseInt(registro.nota);	
 			}	 			
 		}	 		
 		alert("La nota menor es: " + Nmin);
 	}	 	
	});	
  $("#notamayor").click(function(){
 			 				
 		if(localStorage.length===0){
 			return false;
 		}else{	 			
 			var Nmax = 0;
 			for (var i=0;i<localStorage.length; i++){
 				var clave=localStorage.key(i);
 				var registro=$.parseJSON(localStorage.getItem(clave));					 						
 				if (Nmax<registro.nota){
 					Nmax = parseInt(registro.nota);																		
 				}	 				
 			}	 			
 			alert("La nota mayor es: "+ Nmax);
      }
      });
