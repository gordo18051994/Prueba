var init = function() {

  // 	// $('#listaElementos').on('click','.tarea',function(evnt){

  // 	// 	jQuery.post( "api/tareas/borrar",{id:evnt.target.id.substring(6)} , function(tarea){

  // 	// 			$(evnt.target).remove();
  // 	// 	})

  // 	// })

  $("#registrar_usuario").on("click", function() {
    var d_form = {
      nombre: $("#nombre").val(),
      apellido1: $("#apellido1").val(),
      apellido2: $("#apellido2").val(),
      telefono: $("#telefono").val(),
      DNI: $("#DNI").val(),
      direccion: $("#direccion").val(),
      email: $("#email").val(),
      provincia: $("#provincia").val(),
      localidad: $("#localidad").val(),
      password: $("#password").val()
    };
    jQuery.post("/Signup", d_form, function(results) {
      console.log(" jquery", d_form);
    });
  });


  $("#Signin").on('click', function() {
    var email = $("#email").val();
    var password = $("#password").val();
    $.post("/login", {email: email, password: password}, function(results){
      console.log(results);
    })
  })

  $("#Logout").on('click', function() {
    $.get("/Logout", function(){
      console.log("LogOut con Éxito")
    })
  })
  // 	// jQuery.post( "api/tareas/crear",{nombre:$("#newTarea").val()} , function(tarea){

  // 	// 			$('#listaElementos').
  // 	// 		append($('<li class="tarea" id="tarea_' + tarea.id + '">' + tarea.nombre +'</li>'));
  // 	// 		$('#newTarea').val('');

  // 	// } )

  // })
};

$().ready(init);
